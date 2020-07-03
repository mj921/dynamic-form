<template>
  <div class="show-page">
    <dt class="page-title">
      页面标题
    </dt>
    <div class="form-container">
      <dt class="form-title">
        <span>表单</span>
      </dt>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <div slot="label">
            输入框
          </div>
          <el-input
            v-model="form.input"
            type="text"
            size="medium"
            :clearable="false"
            :disabled="false"
            placeholder="请输入输入框"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div slot="label">
            输入框1
          </div>
          <el-input
            v-model="form.input1"
            type="text"
            size="medium"
            :clearable="false"
            :disabled="false"
            placeholder="请输入输入框1"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="form-container">
      <dt class="form-title">
        <span>表单</span>
      </dt>
      <el-form ref="form" :model="form1" label-width="80px">
        <el-form-item>
          <div slot="label">
            输入框
          </div>
          <el-input
            v-model="form1.input"
            type="text"
            size="medium"
            :clearable="false"
            :disabled="false"
            placeholder="请输入输入框"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: "",
        input1: ""
      },
      form1: {
        input: ""
      }
    };
  }
};
</script>

<style src="./demo.scss" lang="scss" scoped></style>
