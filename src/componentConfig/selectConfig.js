export default {
  name: "下拉框",
  type: "select",
  props: [
    { key: "param", type: "input", value: "select", name: "下拉框参数" },
    { key: "defaultValue", type: "input", value: "", name: "下拉框默认值" },
    { key: "label", type: "input", value: "下拉框", name: "标签文本" },
    {
      key: "listOptions",
      type: "option",
      value: [{ value: "", label: "" }],
      name: "选项列表",
      getPropValue() {
        const list = [];
        for (let i = 0; i < this.value.length; i++) {
          let item = this.value[i];
          if (
            item.label &&
            list.find(jtem => jtem.value === item.value) === undefined
          ) {
            list.push({
              label: item.label,
              value: item.value
            });
          }
        }
        return list;
      }
    },
    {
      key: "autoPlaceholder",
      type: "boolean",
      value: true,
      name: "是否自动生成占位文本"
    },
    { key: "placeholder", type: "input", value: "请选择", name: "占位文本" },
    {
      key: "size",
      type: "enum",
      value: "medium",
      name: "下拉框尺寸",
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
    },
    {
      key: "multiple",
      type: "boolean",
      value: false,
      name: "是否多选"
    }
  ],
  vmodelValue: ""
};
