export default {
  name: "输入框",
  type: "input",
  props: [
    { key: "param", type: "input", value: "input", name: "输入框参数" },
    { key: "defaultValue", type: "input", value: "", name: "输入框默认值" },
    { key: "label", type: "input", value: "输入框", name: "标签文本" },
    {
      key: "type",
      type: "enum",
      value: "text",
      name: "类型",
      enumList: ["text", "password"]
    },
    {
      key: "autoPlaceholder",
      type: "boolean",
      value: true,
      name: "是否自动生成占位文本"
    },
    { key: "placeholder", type: "input", value: "请输入", name: "占位文本" },
    {
      key: "size",
      type: "enum",
      value: "medium",
      name: "输入框尺寸",
      enumList: ["medium", "small", "mini"]
    },
    {
      key: "clearable",
      type: "boolean",
      value: false,
      name: "是否可清空"
    },
    {
      key: "disabled",
      type: "boolean",
      value: false,
      name: "是否禁用"
    }
  ],
  vmodelValue: ""
};
