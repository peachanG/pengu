import logging
import argparse
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import List, Tuple, Optional, Dict

import pandas as pd
from imblearn.under_sampling import RandomUnderSampler

from pengu.data.crawler import ImagesDataCSV
from pengu.utils.file_io import YamlConfig, save_yaml
from pengu.utils.function import set_logging_basic_config
from pengu.dataset.image import ImageTFRecord


@dataclass
class MakeClfDatasetMainConfig(YamlConfig):
    use_random_under_sampling: bool
    ratio: List[float]
    label2index: Optional[Dict[str, int]] = None


def main():
    parser = argparse.ArgumentParser(
        description="Remove images with duplicate hash and "
                    "Split dataframe to train and val, test dataframe")
    parser.add_argument("--input_img_data_csv", "-img_csv", type=Path, metavar="Path",
                        required=True,
                        help="[input] Path to image data csv path")
    parser.add_argument("--output_preprocessed_csv_dir", "-p_csv", type=Path, metavar="Path",
                        required=True,
                        help="[output] Path to directory to save preprocessed csv")
    parser.add_argument("--output_tfrecord_dir", "-tfrecord", type=Path, metavar="Path",
                        required=True,
                        help="[output] Path to directory to save tfrecord")
    parser.add_argument("--output_label2index", "-l2i", type=Path, metavar="Path",
                        required=True,
                        help="[output] Path to label2index.yaml")
    parser.add_argument("--config_path", "-config",
                        type=Path, metavar="path", default=Path("./params.yaml"),
                        help="Config(.yml) file path")
    args = parser.parse_args()

    config: MakeClfDatasetMainConfig = MakeClfDatasetMainConfig.load(
        args.config_path, process_name="make_clf_dataset")

    set_logging_basic_config("INFO")

    # Drop hash duplicates & file_path is Null
    df: pd.DataFrame = ImagesDataCSV.create_df_with_duplicate_hashes_removed(
        args.input_img_data_csv)
    df: pd.DataFrame = df.dropna(subset=[ImagesDataCSV.FILE_PATH_COL])
    counts_after_duplicates_nan: pd.Series = df.value_counts(ImagesDataCSV.LABEL_COL)
    logging.info(f"Counts after dropping row with null {ImagesDataCSV.FILE_PATH_COL}!")
    logging.info(counts_after_duplicates_nan)

    # Under Sampling
    if config.use_random_under_sampling:
        rus: RandomUnderSampler = RandomUnderSampler(random_state=0)
        df, _ = rus.fit_resample(df, df[ImagesDataCSV.LABEL_COL])  # type: ignore
        counts_after_undersampling: pd.Series = df.value_counts(ImagesDataCSV.LABEL_COL)
        logging.info("Counts after under sampling!")
        logging.info(counts_after_undersampling)

    # Split data
    ratio: Tuple[float, float, float] = tuple(config.ratio)  # type: ignore
    train_df, val_df, test_df = ImagesDataCSV.split_train_val_test(
        df=df, ratio=ratio)
    args.output_preprocessed_csv_dir.mkdir(exist_ok=True, parents=True)
    train_csv_path = args.output_preprocessed_csv_dir / "train.csv"
    val_csv_path = args.output_preprocessed_csv_dir / "val.csv"
    test_csv_path = args.output_preprocessed_csv_dir / "test.csv"
    logging.info("Split data into train and val, test!")
    logging.info("Counts Train")
    logging.info(train_df.value_counts(ImagesDataCSV.LABEL_COL))
    logging.info("Counts Validation")
    logging.info(val_df.value_counts(ImagesDataCSV.LABEL_COL))
    logging.info("Counts Test")
    logging.info(test_df.value_counts(ImagesDataCSV.LABEL_COL))
    train_df.to_csv(train_csv_path, index=False)
    val_df.to_csv(val_csv_path, index=False)
    test_df.to_csv(test_csv_path, index=False)

    # make tf.data.Dataset
    args.output_tfrecord_dir.mkdir(exist_ok=True, parents=True)
    train_tfrec_path = args.output_tfrecord_dir / "train.tfrec"
    val_tfrec_path = args.output_tfrecord_dir / "val.tfrec"
    test_tfrec_path = args.output_tfrecord_dir / "test.tfrec"
    if config.label2index is None:
        label2index = None
    else:
        label2index = asdict(config.label2index)
    args.output_label2index.parent.mkdir(exist_ok=True, parents=True)

    train_label2index: Dict[str, int] = ImageTFRecord.write_tfrecord(
        df=train_df,
        tfrecord_path=train_tfrec_path,
        label2index=label2index)
    ImageTFRecord.write_tfrecord(df=val_df,
                                 tfrecord_path=val_tfrec_path,
                                 label2index=train_label2index)
    ImageTFRecord.write_tfrecord(df=test_df,
                                 tfrecord_path=test_tfrec_path,
                                 label2index=train_label2index)
    save_yaml(train_label2index, args.output_label2index)


if __name__ == "__main__":
    main()
