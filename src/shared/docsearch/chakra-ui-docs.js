const chakraDocsItems = require("../../data/docsearch/chakra-ui-docs.json");

module.exports = {
  view: {
    type: "list",
    options: chakraDocsItems.map((item) => ({
      title: item.title,
      subtitle: item.subtitle,
      action: {
        type: "open-url",
        url: item.url,
      },
      icon: "https://chakra-ui.com/favicon.png",
    })),
  },
};
