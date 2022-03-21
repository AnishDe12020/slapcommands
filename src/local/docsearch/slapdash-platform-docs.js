const {
  rootResponse,
  itemResponse,
} = require("../../shared/docsearch/slapdash-platform-docs");

const { parseArgs } = require("../../utils/parseArgs");

const args = parseArgs(process.argv);

let response;

if (args.item) {
  response = itemResponse(args.item);
} else {
  response = rootResponse();
}

console.log(JSON.stringify(response));
