const createForm = function(comp) {
  return `${comp.data.model}: {
        ${comp.children.map(item => {
          let defaultValue = '""';
          switch (item.defaultValue.type) {
            case "input":
              defaultValue = '"' + item.defaultValue.value + '"';
              break;
            case "tags":
              defaultValue = JSON.stringify(item.defaultValue.value) + "";
              break;
            case "boolean":
              defaultValue = item.defaultValue.value;
              break;
          }
          return item.data.param + ": " + defaultValue;
        }).join(`,
        `)}
      }`;
};

export default function(page) {
  return `<script>
export default {
  data() {
    return {
      ${page.children.map(createForm).join(`,
      `)}
    };
  }
};
</script>
`;
}
