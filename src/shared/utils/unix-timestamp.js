const timestamp = Math.round(new Date().getTime() / 1000);

module.exports = {
  view: {
    type: "list",
    options: [
      {
        title: `Copy Timestamp`,
        action: {
          type: "copy",
          value: timestamp.toString(),
        },
        subtitle: [timestamp.toString(), new Date().toString()],
      },
    ],
  },
};
