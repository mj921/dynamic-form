<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
if (!process.env.IS_ELECTRON) {
  window.require = function(module) {
    switch (module) {
      case "electron":
        return {
          ipcRenderer: {
            send: console.log,
            on: console.log
          }
        };
    }
  };
}
const { ipcRenderer } = window.require("electron");
export default {
  created() {
    const self = this;
    ipcRenderer.on("index", function() {
      self.$router.push("/");
    });
  }
};
</script>

<style lang="scss">
body,
div,
dl,
dt,
ol,
ul,
li {
  padding: 0;
  margin: 0;
}
</style>
