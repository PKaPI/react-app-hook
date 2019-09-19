const { override, fixBabelImports, addWebpackAlias,addLessLoader } = require("customize-cra");
const path = require("path");
module.exports = override(
  //按需加载antd
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    //下面这行很特殊，这里是更改主题的关键，这里我只更改了主色，当然还可以更改其他的，下面会详细写出。
    modifyVars: { "@primary-color": "red"}
  }),
  //别名配置
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
    "@views": path.resolve(__dirname, "./src/views"),
    "@components": path.resolve(__dirname, "./src/components")
  })
);
