const createForm = function(comp) {
  return `<div class="form-container">
      <dt class="form-title">
        <span>${comp.data.title}</span>
      </dt>
      <el-form ref="form" :model="${comp.data.model}" label-width="${
    comp.data.labelWidth
  }" :inline="${comp.data.inline}">
        ${comp.children.map(item => createComponent(item, comp.data.model))
          .join(`
        `)}
      </el-form>
    </div>`;
};
const createComponent = function(comp, model) {
  const createFun = {
    input: createInput,
    select: createSelect
  };
  return createFun[comp.type](comp, model);
};
const createInput = function(comp, model) {
  return `<el-form-item>
          <div slot="label">
            ${comp.data.label}
          </div>
          <el-input
            v-model="${model}.${comp.data.param}"
            type="${comp.data.type}"
            size="${comp.data.size}"
            :clearable="${comp.data.clearable}"
            :disabled="${comp.data.disabled}"
            placeholder="${
              comp.data.autoPlaceholder
                ? "请输入" + comp.data.label
                : comp.data.placeholder
            }"
          ></el-input>
        </el-form-item>`;
};
const createSelect = function(comp, model) {
  return `<el-form-item>
          <div slot="label">
            ${comp.data.label}
          </div>
          <el-select
            v-model="${model}.${comp.data.param}"
            size="${comp.data.size}"
            :clearable="${comp.data.clearable}"
            :disabled="${comp.data.disabled}"
            placeholder="${
              comp.data.autoPlaceholder
                ? "请输入" + comp.data.label
                : comp.data.placeholder
            }"
          >
            ${comp.data.listOptions.map(
              option => `<el-option
              label="${option.label}"
              value="${option.value}"
            ></el-option>`
            )}
          </el-select>
        </el-form-item>`;
};

export default function(page) {
  return `<template>
  <div class="show-page">
    <dt class="page-title">
      ${page.data.title}
    </dt>
    ${page.children.map(createForm).join(`
    `)}
  </div>
</template>
`;
}
