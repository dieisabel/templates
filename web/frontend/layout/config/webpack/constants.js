const path = require("path");

const PATHS = {};
PATHS.ROOT = path.resolve(__dirname, "../../");
PATHS.SRC = PATHS.ROOT + "/src";
PATHS.DIST = PATHS.ROOT + "/dist";
PATHS.CONFIG = PATHS.ROOT + "/config";
PATHS.ASSETS = PATHS.ROOT + "/assets";

const ENTRIES = {};
ENTRIES.HTML = PATHS.SRC + "/html/index.html";
ENTRIES.SCSS = PATHS.SRC + "/scss/styles.scss";
ENTRIES.JS = PATHS.SRC + "/js/index.js";

const CONFIGS = {};
CONFIGS.POSTCSS = PATHS.CONFIG + "/postcss.js";
CONFIGS.BABEL = PATHS.CONFIG + "/babel.js";

module.exports = {
  PATHS: PATHS,
  ENTRIES: ENTRIES,
  CONFIGS: CONFIGS,
};
