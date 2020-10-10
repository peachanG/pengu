import os
import glob
from typing import List, Tuple

import imagehash
from PIL import Image

from pengu.utils.function import alpha_numeric_sorted


def list_pictures(dir_path: str,
                  n_use: int = -1,
                  ext: Tuple[str, ...] = ('jpg', 'jpeg', 'bmp', 'png', 'tif')) -> List[str]:
    """Lists all pictures in a directory, not including all subdirectories.

    Args
        dir_path (str): Absolute path to the directory.
        ext (Tuple[str, ...]): Extensions of the pictures.

    Returns
        A list of paths.

    """
    ext = tuple('.%s' % e for e in ((ext,) if isinstance(ext, str) else ext))

    picture_file_list = [file for file in glob.glob(os.path.join(dir_path, '*'))
                         if file.lower().endswith(ext)]

    picture_file_list = alpha_numeric_sorted(picture_file_list)
    if n_use != -1:
        picture_file_list = picture_file_list[:n_use]

    return picture_file_list


def get_image_meta(img: Image.Image,
                   hash_method: str) -> Tuple[Tuple[int, int],
                                              str,
                                              imagehash.ImageHash,
                                              str]:
    """Get image meta data(size[w, h], mode, hash)

    Args:
        data (Image.Image):
            image data. support data_format data.
        data_format (str):
            support "url" and "file"(path), "pil", "opencv".
        hash_method (str):
            support "phash" and "average", "dhash", "whash".

    Returns:
        Tuple[Tuple[int, int], str, imagehash.ImageHash, str]:
            (size[w, h], image_mode, hash, img_format).
            if DownloadError, ((0,0), None, None, None).
    """
    if hash_method == "phash":
        hash_func = imagehash.phash
    elif hash_method == "average":
        hash_func = imagehash.average_hash
    elif hash_method == "dhash":
        hash_func = imagehash.dhash
    elif hash_method == "whash":
        hash_func = imagehash.whash
    else:
        raise ValueError(f"Invalid hashmethod. hash_method: {hash_method}")

    img_hash = hash_func(img)
    img_format = img.format
    return img.size, img.mode, img_hash, img_format


def resize_image(img: Image.Image,
                 size: Tuple[int, int],
                 resample: int = Image.BILINEAR,
                 preserve_aspect_ratio: bool = False):
    if preserve_aspect_ratio:
        current_width, current_height = img.size

        # do the computation to find the right scale and height/width.
        scale_factor_width: float = size[0] / current_width
        scale_factor_height: float = size[1] / current_height
        scale_factor: float = min(scale_factor_height, scale_factor_width)
        scaled_width_const: int = round(scale_factor * current_width)
        scaled_height_const: int = round(scale_factor * current_height)

        size = (scaled_width_const, scaled_height_const)

    img = img.resize(size, resample=resample)
    return img
