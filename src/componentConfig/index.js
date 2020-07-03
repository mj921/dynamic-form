import pageConfig from "./pageConfig";
import inputConfig from "./inputConfig";
import formConfig from "./formConfig";
import selectConfig from "./selectConfig";
import checkboxConfig from "./checkboxConfig";
import checkboxGroupConfig from "./checkboxGroupConfig";
const configs = {
  pageConfig,
  formConfig,
  inputConfig,
  selectConfig,
  checkboxConfig,
  checkboxGroupConfig
};
const parseComponentConfig = function(config) {
  let _config = JSON.parse(
    JSON.stringify(config, function(key, val) {
      if (typeof val === "function") {
        return val + "";
      }
      return val;
    }),
    function(key, val) {
      if (/^function/.test(val)) {
        return eval(`(function(){return ${val} })()`);
      }
      return val;
    }
  );
  let data = {};
  _config.props.forEach(prop => {
    Object.defineProperty(data, prop.key, {
      get() {
        return prop.getPropValue ? prop.getPropValue() : prop.value;
      }
    });
  });
  _config.data = data;
  return _config;
};
const getConfig = function(type) {
  return parseComponentConfig(configs[type + "Config"]);
};
export default getConfig;
