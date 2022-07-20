const { merge } = require("webpack-merge");
const path = require('path');

const base_config = require("./webpack.config.base.js");

module.exports = merge(base_config, {
    mode: "production",

});