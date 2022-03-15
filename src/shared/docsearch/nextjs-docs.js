const nextjsDocsItems = require("../../data/docsearch/nextjs-docs.json");

const rootResponse = () => {
  return {
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
        icon: "https://nextjs.org/static/favicon/favicon-32x32.png",
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

module.exports = {
  rootResponse,
  itemResponse,
};
