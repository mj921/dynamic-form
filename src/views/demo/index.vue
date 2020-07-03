<template>
  <div class="show-page">
    <dt class="page-title">
      页面标题
    </dt>
    <div class="form-container">
      <dt class="form-title">
        <span>表单</span>
      </dt>
      <el-form ref="form" :model="form" label-width="80px" :inline="false">
        <el-form-item>
          <div slot="label">
            复选框
          </div>
          <el-checkbox
            v-model="form.checkbox"
            size="medium"
            :disabled="false"
            :border="false"
          >复选框</el-checkbox>
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
        checkbox: true
      }
    };
  }
};
</script>

<style src="./demo.scss" lang="scss" scoped></style>
