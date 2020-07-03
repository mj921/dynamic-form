export default {
  name: "复选框",
  type: "checkbox",
  props: [
    { key: "param", type: "input", value: "checkbox", name: "复选框参数" },
    {
      key: "defaultValue",
      type: "boolean",
      value: false,
      name: "复选框默认值"
    },
    { key: "label", type: "input", value: "复选框", name: "标签文本" },
    {
      key: "checkboxLabel",
      type: "input",
      value: "复选框",
      name: "复选框文本"
    },
    {
      key: "size",
      type: "enum",
      value: "medium",
      name: "复选框组尺寸(仅在显示边框时有效)",
      enumList: ["medium", "small", "mini"]
    },
    {
      key: "border",
      type: "boolean",
      value: false,
      name: "是否显示边框"
    },
    {
      key: "disabled",
      type: "boolean",
      value: false,
      name: "是否禁用"
    }
  ],
  vmodelValue: false
};
