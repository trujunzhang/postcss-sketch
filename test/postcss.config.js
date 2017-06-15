module.exports = (ctx) => ({
  plugins: [
    require("postcss-flexbugs-fixes")(),
    require("postcss-custom-properties")(),
    require("postcss-calc")(),
    require("postcss-cssnext")(),
    require("../lib")(),
  ]
});