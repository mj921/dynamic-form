export default {
  name: "表单",
  type: "form",
  props: [
    {
      key: "model",
      type: "input",
      value: "form",
      name: "model"
    },
    { key: "title", type: "input", value: "表单", name: "表单标题" },
    {
      key: "labelWidth",
      type: "input",
      value: "80px",
      name: "表单域标签的宽度"
    },
    {
      key: "inline",
      type: "boolean",
      value: false,
      name: "行内表单模式"
    }
  ],
  children: []
};
