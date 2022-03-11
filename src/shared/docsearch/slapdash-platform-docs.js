const slapdashPlatfomrDocsItmes = require("../../data/docsearch/slapdash-platform-docs.json");

module.exports = {
  view: {
    type: "list",
    options: slapdashPlatfomrDocsItmes.map((item) => ({
      title: item.title,
      subtitle: item.subtitle,
      action: {
        type: "open-url",
        url: item.url,
      },
      icon: "https://slapdash.com/favicon-180x180.2sB.png",
    })),
  },
};
