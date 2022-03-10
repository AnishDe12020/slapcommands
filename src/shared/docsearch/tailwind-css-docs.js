const tailwindDocsItems = require("../../data/docsearch/tailwind-css-docs.json");

module.exports = {
  view: {
    type: "list",
    options: tailwindDocsItems.map((item) => ({
      title: item.title,
      subtitle: item.subtitle,
      action: {
        type: "open-url",
        url: item.url,
      },
      icon: "https://tailwindcss.com/favicons/favicon.ico",
    })),
  },
};
