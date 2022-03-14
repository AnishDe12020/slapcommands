const apolloClientDocsItems = require("../../data/docsearch/apollo-client-docs.json");

module.exports = {
  view: {
    type: "list",
    options: apolloClientDocsItems.map((item) => ({
      title: item.title,
      subtitle: item.subtitle,
      action: {
        type: "open-url",
        url: item.url,
      },
      icon: "https://www.apollographql.com/favicon.ico",
    })),
  },
};
