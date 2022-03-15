const {
  rootResponse,
  itemResponse,
} = require("../../shared/docsearch/chakra-ui-docs");
const { parseArgs } = require("../../utils/parseArgs");

const args = parseArgs(process.argv);

let response;

if (args.item) {
  response = itemResponse(args.item);
} else {
  response = rootResponse();
}

console.log(JSON.stringify(response));
