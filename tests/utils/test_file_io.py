import py
from pathlib import Path
from typing import Any

import numpy as np
import pytest

from pengu.utils.file_io import save_pkl
from pengu.utils.file_io import load_pkl
from pengu.utils.file_io import save_json
from pengu.utils.file_io import load_json
from pengu.utils.file_io import save_yaml
from pengu.utils.file_io import load_yaml


@pytest.mark.parametrize("input_data", [
    (1),
    (2.2),
    ('a'),
    ([1, 2.2, 'a']),
    ((1, 2.2, 'a')),
    ({'a': 1, 'b': 2})
])
def test_pkl(tmpdir: py._path.local.LocalPath,
             input_data: Any):
    tmpdir = Path(tmpdir)
    pkl_path = tmpdir / 'data.pkl'

    save_pkl(input_data, pkl_path)
    output_data = load_pkl(pkl_path)
    assert output_data == input_data


def test_pkl_np(tmpdir: py._path.local.LocalPath):
    tmpdir = Path(tmpdir)
    pkl_path = tmpdir / 'data.pkl'
    input_data = np.zeros((2, 3))

    save_pkl(input_data, pkl_path)
    output_data = load_pkl(pkl_path)
    assert np.array_equal(input_data, output_data)


def test_json(tmpdir: py._path.local.LocalPath):
    tmpdir = Path(tmpdir)
    json_path = tmpdir / 'data.json'

    input_dict = {
        'root': {
            'dir1': 'a.jpg'
        }
    }

    save_json(input_dict, json_path)
    output_data = load_json(json_path)
    assert output_data == input_dict


def test_yaml(tmpdir: py._path.local.LocalPath):
    tmpdir = Path(tmpdir)
    json_path = tmpdir / 'data.yaml'

    input_dict = {
        'root': {
            'dir1': 'a.jpg'
        }
    }

    save_yaml(input_dict, json_path)
    output_data = load_yaml(json_path)
    assert output_data == input_dict
