<template>
  <div class="show-page">
    <dt class="page-title" @click="toggleComp(page)">
      {{ page.data.title }}
    </dt>
    <template v-for="(item, i) in page.children">
      <div
        v-if="item.type === 'form'"
        class="form-container"
        :key="'container-' + item.type + '-' + i"
      >
        <dt class="form-title" @click="toggleComp(item)">
          <span>{{ item.data.title }}</span>
        </dt>
        <el-form ref="form" label-width="80px">
          <el-form-item
            v-for="(jtem, j) in item.children"
            :key="'component-' + jtem.type + '-' + j"
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
          </el-form-item>
        </el-form>
      </div>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
