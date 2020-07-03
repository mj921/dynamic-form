const createForm = function(comp) {
  return `${comp.data.model}: {
        ${comp.children.map(item => {
          return item.data.param + ': "' + item.data.defaultValue + '"';
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
