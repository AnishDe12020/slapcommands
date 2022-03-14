const apolloDocsItems = require("../../data/docsearch/apollo-docs.json");

module.exports = {
  view: {
    type: "list",
    options: apolloDocsItems.map((item) => ({
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
