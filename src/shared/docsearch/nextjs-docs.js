const nextjsDocsItems = require("../../data/docsearch/nextjs-docs.json");

module.exports = {
  view: {
    type: "list",
    options: nextjsDocsItems.map((item) => ({
      title: item.title,
      subtitle: item.subtitle,
      action: {
        type: "open-url",
        url: item.url,
      },
      icon: "https://nextjs.org/static/favicon/favicon-32x32.png",
    })),
  },
};
