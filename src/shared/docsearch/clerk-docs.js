const clerkDocsItems = require("../../data/docsearch/clerk-docs.json");

module.exports = {
  view: {
    type: "list",
    options: clerkDocsItems.map((item) => ({
      title: item.title,
      action: {
        type: "open-url",
        url: item.url,
      },
      icon: "https://clerk.dev/favicon/favicon-32x32.png",
    })),
  },
};
