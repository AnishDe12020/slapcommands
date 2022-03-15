const tailwindDocsItems = require("../../data/docsearch/tailwind-css-docs.json");

const tailwindLogo = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#000"><path d="M32 10.667c-4.377 0-8.14 1.181-11.095 3.713-2.933 2.514-4.851 6.174-5.916 10.735a2.133 2.133 0 0 0 3.826 1.708c1.35-1.93 2.7-3.09 3.995-3.684 1.256-.577 2.609-.693 4.158-.278 1.564.419 2.775 1.645 4.675 3.712l.062.067c1.433 1.559 3.18 3.46 5.57 4.934 2.481 1.531 5.568 2.56 9.659 2.56 4.377 0 8.14-1.182 11.095-3.714 2.932-2.514 4.851-6.174 5.916-10.735a2.134 2.134 0 0 0-3.826-1.708c-1.35 1.93-2.7 3.09-3.996 3.684-1.255.577-2.608.693-4.157.278-1.564-.419-2.775-1.645-4.675-3.712l-.062-.067c-1.433-1.559-3.18-3.46-5.57-4.935-2.481-1.53-5.568-2.558-9.659-2.558ZM17.067 29.867c-4.377 0-8.141 1.181-11.095 3.713C3.039 36.094 1.12 39.754.056 44.315a2.133 2.133 0 0 0 3.825 1.708c1.351-1.93 2.7-3.09 3.996-3.684 1.255-.577 2.608-.694 4.158-.278 1.564.419 2.774 1.645 4.675 3.713l.061.066c1.433 1.558 3.181 3.46 5.571 4.935 2.48 1.53 5.568 2.558 9.658 2.558 4.378 0 8.141-1.181 11.096-3.713 2.932-2.514 4.85-6.174 5.915-10.735a2.133 2.133 0 0 0-3.825-1.709c-1.351 1.93-2.7 3.09-3.996 3.685-1.255.577-2.608.693-4.158.278-1.564-.419-2.774-1.646-4.675-3.713l-.061-.066c-1.433-1.559-3.18-3.46-5.571-4.935-2.48-1.53-5.567-2.558-9.658-2.558Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath></defs></svg>`;

const rootResponse = () => {
  return {
    view: {
      type: "list",
      options: tailwindDocsItems.map((item) => ({
        title: item.title,
        subtitle: item.subtitle,
        action: {
          type: "open-url",
          url: item.url,
        },
        icon: {
          monochrome: tailwindLogo,
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
          monochrome: tailwindLogo,
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
