<template>
  <el-container class="add-page">
    <el-aside width="300px">
      <el-collapse v-model="leftActionName">
        <el-collapse-item title="容器" name="container">
          <draggable
            :list="containerList"
            :group="{ name: 'container', pull: 'clone', put: false }"
            :clone="clone"
            class="comp-list"
          >
            <dl
              class="comp-list-item"
              v-for="item in containerList"
              :key="item.type"
            >
              {{ item.name }}
            </dl>
          </draggable>
        </el-collapse-item>
        <el-collapse-item title="基础组件" name="baseComp">
          <draggable
            :list="componentList"
            :group="{ name: 'component', pull: 'clone', put: false }"
            :clone="clone"
            class="comp-list"
          >
            <dl
              class="comp-list-item"
              v-for="item in componentList"
              :key="item.type"
            >
              {{ item.name }}
            </dl>
          </draggable>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <el-button type="primary" @click="submit">提交</el-button>
      </el-header>
      <el-container class="page">
        <el-main
          class="show-page"
          :class="{ 'edit-prop-comp': currEditComp === page }"
        >
          <dt class="page-title" @click="toggleComp(page)">
            {{ page.data.title }}
          </dt>
          <draggable :list="page.children" group="container" class="page-drag">
            <template v-for="(item, i) in page.children">
              <div
                v-if="item.type === 'form'"
                class="form-container"
                :class="{ 'edit-prop-comp': currEditComp === item }"
                :key="'container-' + item.type + '-' + i"
              >
                <dt class="form-title" @click="toggleComp(item)">
                  <span>{{ item.data.title }}</span>
                </dt>
                <el-form
                  ref="form"
                  :label-width="item.data.labelWidth"
                  :inline="item.data.inline"
                >
                  <draggable
                    class="form-drag"
                    :list="item.children"
                    group="component"
                  >
                    <el-form-item
                      v-for="(jtem, j) in item.children"
                      :key="'component-' + jtem.type + '-' + j"
                      :class="{ 'edit-prop-comp': currEditComp === jtem }"
                    >
                      <div slot="label" @click="toggleComp(jtem)">
                        {{ jtem.data.label }}
                      </div>
                      <el-input
                        v-model="jtem.vmodelValue"
                        v-if="jtem.type === 'input'"
                        :type="jtem.data.type"
                        :size="jtem.data.size"
                        :clearable="jtem.data.clearable"
                        :disabled="jtem.data.disabled"
                        :placeholder="
                          jtem.data.autoPlaceholder
                            ? `请输入${jtem.data.label}`
                            : jtem.data.placeholder
                        "
                      ></el-input>
                      <el-select
                        v-model="jtem.vmodelValue"
                        v-if="jtem.type === 'select'"
                        :size="jtem.data.size"
                        :clearable="jtem.data.clearable"
                        :disabled="jtem.data.disabled"
                        :placeholder="
                          jtem.data.autoPlaceholder
                            ? `请输入${jtem.data.label}`
                            : jtem.data.placeholder
                        "
                      >
                        <el-option
                          v-for="option in jtem.data.listOptions"
                          :key="
                            'component-' +
                              jtem.type +
                              '-' +
                              j +
                              '-' +
                              option.value
                          "
                          :label="option.label"
                          :value="option.value"
                        ></el-option>
                      </el-select>
                      <el-checkbox
                        v-if="jtem.type === 'checkbox'"
                        v-model="jtem.vmodelValue"
                        :size="jtem.data.size"
                        :disabled="jtem.data.disabled"
                        :border="jtem.data.border"
                      >
                        {{ jtem.data.checkboxLabel }}
                      </el-checkbox>
                      <el-checkbox-group
                        v-if="jtem.type === 'checkboxGroup'"
                        v-model="jtem.vmodelValue"
                        :size="jtem.data.size"
                        :min="jtem.data.min"
                        :max="jtem.data.max"
                        :disabled="jtem.data.disabled"
                        :text-color="jtem.data.textColor"
                        :fill="jtem.data.fill"
                      >
                        <template v-if="jtem.data.showType === 'default'">
                          <el-checkbox
                            v-for="label in jtem.data.labelList"
                            :key="
                              'component-' + jtem.type + '-' + j + '-' + label
                            "
                            :label="label"
                          >
                            {{ label }}
                          </el-checkbox>
                        </template>
                        <template v-else-if="jtem.data.showType === 'button'">
                          <el-checkbox-button
                            v-for="label in jtem.data.labelList"
                            :key="
                              'component-' + jtem.type + '-' + j + '-' + label
                            "
                            :label="label"
                          >
                            {{ label }}
                          </el-checkbox-button>
                        </template>
                      </el-checkbox-group>
                    </el-form-item>
                  </draggable>
                </el-form>
              </div>
            </template>
          </draggable>
        </el-main>
        <el-aside width="300px" class="comp-edit">
          <el-tabs type="card" value="compProp">
            <el-tab-pane label="组件属性" name="compProp">
              <prop-edit :edit-comp="currEditComp" />
            </el-tab-pane>
          </el-tabs>
        </el-aside>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Draggable from "vuedraggable";
import PropEdit from "./components/propEdit";
import getConfig from "../../componentConfig";
const { ipcRenderer } = window.require("electron");
export default {
  components: {
    Draggable,
    PropEdit
  },
  data() {
    return {
      leftActionName: ["container", "baseComp"],
      containerList: [
        {
          name: "表单",
          type: "form",
          containerFlag: true
        }
      ],
      componentList: [
        {
          name: "输入框",
          type: "input"
        },
        {
          name: "下拉框",
          type: "select"
        },
        {
          name: "复选框",
          type: "checkbox"
        },
        {
          name: "复选框组",
          type: "checkboxGroup"
        }
      ],
      page: getConfig("page"),
      cloneObj: null,
      currEditComp: {}
    };
  },
  methods: {
    clone(obj) {
      return getConfig(obj.type);
    },
    toggleComp(comp) {
      this.currEditComp = comp;
    },
    submit() {
      ipcRenderer.send("createPage", this.page);
    }
  },
  created() {
    this.currEditComp = this.page;
    const self = this;
    ipcRenderer.on("createPage", function(e, data) {
      self.$message.success(data);
    });
  }
};
</script>

<style lang="scss" scoped>
.add-page {
  height: 100vh;
  .el-collapse-item {
    /deep/ {
      .el-collapse-item__header {
        background-color: #fafbfd;
        padding: 0 16px;
      }
      .el-collapse-item__content {
        padding: 16px;
      }
    }
  }
  .comp-list {
    display: flex;
    flex-wrap: wrap;
    .comp-list-item {
      width: calc(50% - 5px);
      padding: 16px;
      box-sizing: border-box;
      border: 1px solid #f2f2f2;
      text-align: center;
      &:not(:nth-child(-n + 2)) {
        margin-top: 10px;
      }
      &:nth-child(odd) {
        margin-right: 10px;
      }
    }
  }
  .page {
    padding: 20px 0 0 20px;
    background-color: #f3f8fb;
    .edit-prop-comp {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #779ed7;
        box-sizing: border-box;
        z-index: 1;
      }
    }
    .show-page {
      margin: 0 10px 20px 0;
      padding: 0 10px;
      background-color: #fff;
      position: relative;
      .page-title {
        position: relative;
        line-height: 50px;
        font-size: 16px;
        color: #333;
        font-weight: bold;
        z-index: 1;
      }
      .page-drag {
        position: relative;
        width: 100%;
        height: calc(100% - 50px);
        z-index: 1;
        .form-container {
          min-height: 84px;
          background-color: #fafbfd;
          position: relative;
          padding: 2px;
          .form-title {
            position: relative;
            padding: 15px;
            height: 14px;
            background-color: #fff;
            color: #606060;
            z-index: 1;
            span {
              float: left;
              padding-left: 10px;
              border-left: 3px solid #4e78db;
              font-size: 14px;
              line-height: 1em;
            }
          }
          .form-drag {
            position: relative;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            min-height: 40px;
            z-index: 1;
            .el-form-item {
              box-sizing: border-box;
              padding: 2px;
              /deep/ {
                .el-form-item__label {
                  position: relative;
                  z-index: 1;
                }
                .el-form-item__content {
                  position: relative;
                  z-index: 1;
                }
              }
            }
          }
        }
      }
    }
  }
  .comp-edit {
    background-color: #fff;
  }
}
</style>
