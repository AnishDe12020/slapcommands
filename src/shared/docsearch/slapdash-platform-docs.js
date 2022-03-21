const slapdashPlatfomrDocsItmes = require("../../data/docsearch/slapdash-platform-docs.json");

const slapdashLogo = "https://slapdash.com/favicon-180x180.2sB.png";

const rootResponse = () => {
  return {
    view: {
      type: "list",
      options: slapdashPlatfomrDocsItmes.map((item) => ({
        title: item.title,
        subtitle: item.subtitle,
        action: {
          type: "open-url",
          url: item.url,
        },
        icon: slapdashLogo,
        moveAction: {
          type: "add-param",
          name: "item",
          value: `${item.title}&${item.url}`,
        },
      })),
    },
  };
};

const itemResponse = (itemString) => {
  const [itemName, itemUrl] = itemString.split("&");
  return {
    tokens: [
      {
        paramName: "item",
        label: itemName,
        icon: slapdashLogo,
      },
    ],
    view: {
      type: "list",
      options: [
        {
          title: "Open in browser",
          action: {
            type: "open-url",
            url: itemUrl,
          },
        },
        {
          title: "Copy URL to clipboard",
          action: {
            type: "copy",
            value: itemUrl,
          },
        },
        {
          title: "Paste URL",
          action: {
            type: "paste",
            value: itemUrl,
          },
        },
      ],
    },
  };
};

module.exports = { rootResponse, itemResponse };
