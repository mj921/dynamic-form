export default {
  name: "复选框组",
  type: "checkboxGroup",
  props: [
    { key: "param", type: "input", value: "checkbox", name: "复选框组参数" },
    { key: "defaultValue", type: "tags", value: [], name: "复选框组默认值" },
    { key: "label", type: "input", value: "复选框组", name: "标签文本" },
    { key: "labelList", type: "tags", value: [], name: "复选框组选项" },
    {
      key: "min",
      type: "number",
      value: undefined,
      name: "可被勾选最小数量",
      min: 0
    },
    {
      key: "max",
      type: "number",
      value: undefined,
      name: "可被勾选最大数量",
      min: 0
    },
    {
      key: "size",
      type: "enum",
      value: "medium",
      name: "复选框组尺寸(仅在显示边框时有效)",
      enumList: ["medium", "small", "mini"]
    },
    {
      key: "showType",
      type: "enum",
      value: "default",
      name: "复选框类型",
      enumList: ["default", "button"]
    },
    {
      key: "disabled",
      type: "boolean",
      value: false,
      name: "是否禁用"
    },
    {
      key: "textColor",
      type: "color",
      value: "#ffffff",
      name: "激活时的文本颜色(仅button类型)"
    },
    {
      key: "fill",
      type: "color",
      value: "#409EFF",
      name: "激活时的填充色和边框色(仅button类型)"
    }
  ],
  vmodelValue: []
};
