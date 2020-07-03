<template>
  <div
    ref="dragParent"
    @mousedown="parentMousedown"
    @dragover="parentDragover"
    @drop="drop"
    @dragstart="dragStart"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
    put: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drapEl: null,
      elList: null
    };
  },
  methods: {
    parentMousedown(e) {
      if (this.drapEl) {
        this.drapEl.setAttribute("draggable", false);
      }
      this.drapEl = e.target;
      e.target.setAttribute("draggable", true);
    },
    parentDragover(e) {
      e.preventDefault();
      if (this.put) {
        console.log(this.elList.indexOf(e.target));
        // this.list.push({
        //   ...JSON.parse(e.dataTransfer.getData("Text")),
        //   tempFlag: true
        // });
      }
    },
    dragStart(e) {
      e.dataTransfer.setData(
        "Text",
        JSON.stringify(this.list[this.elList.indexOf(e.target)])
      );
    },
    winMouseUp() {
      if (this.drapEl) {
        this.drapEl.setAttribute("draggable", false);
      }
    },
    drop(e) {
      if (this.put) {
        this.list.push(JSON.parse(e.dataTransfer.getData("Text")));
      }
    }
  },
  mounted() {
    window.addEventListener("mouseup", this.winMouseUp);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("mouseup", this.winMouseUp);
    });
    this.elList = Array.from(this.$refs.dragParent.getElementsByTagName("dl"));
    console.log(this.elList);
  }
};
</script>

<style></style>
