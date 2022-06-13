# -- Path setup --------------------------------------------------------------

import sys
import pathlib

# PROJECT_DIR = pathlib.Path(__file__).parent.parent.parent


# -- Project information -----------------------------------------------------

project = ""
copyright = ""
author = ""


# -- General configuration ---------------------------------------------------

extensions = [
    # "sphinx.ext.autodoc",
]
language = "en"
templates_path = ["templates"]
exclude_patterns = []
source_suffix = {
    ".rst": "restructuredtext",
    ".txt": "restructuredtext",
    ".md": "markdown",
}
root_doc = "index"


# -- Options for HTML output -------------------------------------------------

html_theme = "furo"
html_static_path = ["static"]
