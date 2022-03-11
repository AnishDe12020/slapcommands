const unixTimestampReponse = require("../shared/utils/unix-timestamp");

const unixTimestamp = (_, res) => {
  res.json(unixTimestampReponse);
};

module.exports = {
  unixTimestamp,
};
