const timestamp = Math.round(new Date().getTime() / 1000);

module.exports = {
  view: {
    type: "list",
    options: [
      {
        title: `Copy timestamp ${timestamp}`,
        action: {
          type: "copy",
          value: timestamp.toString(),
        },
        subtitle: new Date().toString(),
      },
    ],
  },
};
