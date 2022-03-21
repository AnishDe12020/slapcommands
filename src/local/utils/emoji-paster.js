const { parseArgs } = require("../../utils/parseArgs");
const { rootResponse } = require("../../shared/utils/emoji-paster");

const args = parseArgs(process.argv);

console.log(JSON.stringify(rootResponse(args.keywords)));
