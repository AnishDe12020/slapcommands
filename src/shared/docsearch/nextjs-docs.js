const nextjsDocsItems = require("../../data/docsearch/nextjs-docs.json");

const nextjsLogo = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.904.017c-.137.013-.575.057-.97.088-9.09.82-17.604 5.723-22.997 13.26-3.003 4.192-4.924 8.946-5.65 13.981C.032 29.104 0 29.623 0 32.006s.031 2.903.288 4.66C2.027 48.683 10.579 58.78 22.178 62.52c2.077.67 4.267 1.126 6.756 1.401.97.107 5.162.107 6.131 0 4.298-.475 7.94-1.538 11.53-3.371.551-.282.657-.357.582-.42-.05-.037-2.396-3.183-5.211-6.986l-5.117-6.912-6.413-9.49c-3.529-5.216-6.431-9.482-6.456-9.482-.025-.007-.05 4.21-.063 9.357-.019 9.014-.025 9.377-.138 9.59-.162.306-.287.431-.55.569-.2.1-.375.119-1.32.119h-1.082l-.288-.182a1.17 1.17 0 0 1-.42-.456l-.13-.282L20 33.432l.019-12.548.194-.243c.1-.132.312-.3.462-.382.257-.125.357-.138 1.44-.138 1.276 0 1.488.05 1.82.413.094.1 3.566 5.33 7.72 11.629 4.154 6.299 9.834 14.9 12.625 19.122l5.067 7.675.257-.169c2.27-1.476 4.673-3.578 6.575-5.767 4.048-4.648 6.656-10.315 7.532-16.358.257-1.757.288-2.276.288-4.66 0-2.383-.031-2.902-.288-4.66C61.973 15.33 53.421 5.234 41.822 1.493 39.776.83 37.6.373 35.16.1c-.6-.063-4.735-.132-5.255-.082Zm13.1 19.354c.3.15.545.438.632.738.05.162.063 3.64.05 11.478l-.018 11.247-1.983-3.04-1.99-3.04v-8.176c0-5.285.025-8.256.063-8.4.1-.35.319-.626.619-.788.256-.132.35-.144 1.332-.144.926 0 1.089.012 1.295.125Z" fill="#000"/></svg>`;

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
        icon: {
          monochrome: nextjsLogo,
        },
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
        icon: {
          monochrome: nextjsLogo,
        },
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
