module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        // targets: "> 1%",
        // debug: true
      }
    ]
  ]
};
