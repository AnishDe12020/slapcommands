const { parseArgs } = require("../../utils/parseArgs");

const { rootResponse } = require("../../shared/apps/raindrop");

const args = parseArgs(process.argv);

rootResponse(process.env["raindrop-token"], args.keywords).then((response) => {
  console.log(JSON.stringify(response));
});
