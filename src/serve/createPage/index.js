import fs from "fs";
import createTemplate from "./createTemplate";
import createScript from "./createScript";

const parseComponentConfig = function(config) {
  let data = {};
  config.props.forEach(prop => {
    data[prop.key] = prop.getPropValue ? prop.getPropValue() : prop.value;
  });
  config.data = data;
  if (config.children instanceof Array) {
    config.children.forEach(c => {
      parseComponentConfig(c);
    });
  }
  return config;
};

export default function(page) {
  return new Promise((resolve, reject) => {
    try {
      const file = fs.createWriteStream("./src/views/demo/index.vue");
      parseComponentConfig(page);
      const chunk =
        createTemplate(page) +
        "\n" +
        createScript(page) +
        '\n<style src="./demo.scss" lang="scss" scoped></style>\n';
      file.write(chunk);
      file.end();
      file.on("finish", function() {
        console.log("创建成功");
        resolve("创建成功");
      });
    } catch (e) {
      reject(e);
    }
  });
}
