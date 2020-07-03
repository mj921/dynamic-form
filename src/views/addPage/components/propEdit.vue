<template>
  <div class="prop-edit-list">
    <dl class="prop-item" v-for="prop in editComp.props" :key="prop.key">
      <dt class="prop-title">{{ prop.name }}</dt>
      <el-input
        v-if="prop.type === 'input'"
        size="small"
        v-model="prop.value"
        :placeholder="'请输入' + prop.name"
      ></el-input>
      <el-select
        v-if="prop.type === 'enum'"
        size="small"
        v-model="prop.value"
        :placeholder="'请选择' + prop.name"
      >
        <el-option
          v-for="item in prop.enumList"
          :label="item"
          :value="item"
          :key="prop.key + '-' + item"
        ></el-option>
      </el-select>
      <el-switch
        v-if="prop.type === 'boolean'"
        v-model="prop.value"
      ></el-switch>
      <el-select
        v-if="prop.type === 'tags'"
        v-model="prop.value"
        :placeholder="'请输入' + prop.name"
        multiple
        filterable
        allow-create
      ></el-select>
      <el-input-number
        v-if="prop.type === 'number'"
        v-model="prop.value"
        :min="prop.min"
      />
      <el-color-picker v-if="prop.type === 'color'" v-model="prop.value" />
      <div v-if="prop.type === 'option'" class="prop-type-option">
        <dl
          v-for="(option, optionIndex) in prop.value"
          :key="prop.key + '-option' + optionIndex"
          class="prop-type-option__item"
        >
          <el-input
            v-model="option.value"
            placeholder="value"
            size="small"
          ></el-input>
          <el-input
            v-model="option.label"
            placeholder="label"
            size="small"
          ></el-input>
          <el-button type="text" @click="addOption(prop.value, optionIndex)">
            添加
          </el-button>
          <el-button
            v-show="prop.value.length > 1"
            type="text"
            @click="delOption(prop.value, optionIndex)"
          >
            删除
          </el-button>
        </dl>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    editComp: Object
  },
  methods: {
    addOption(list, index) {
      list.splice(index + 1, 0, { value: "", label: "" });
    },
    delOption(list, index) {
      list.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.prop-edit-list {
  padding: 10px;
  .prop-item {
    &:not(:first-child) {
      margin-top: 10px;
    }
    .prop-title {
      position: relative;
      height: 14px;
      background-color: #fff;
      color: #606060;
      z-index: 1;
      padding-left: 10px;
      border-left: 3px solid #4e78db;
      font-size: 14px;
      line-height: 1em;
      margin-bottom: 10px;
    }
    .prop-type-option {
      .prop-type-option__item {
        display: flex;
        & > *:not(:first-child) {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
