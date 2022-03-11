const tailwindResponse = require("../shared/docsearch/tailwind-css-docs");
const chakraResponse = require("../shared/docsearch/chakra-ui-docs");
const nextjsResponse = require("../shared/docsearch/nextjs-docs");
const clerkResponse = require("../shared/docsearch/clerk-docs");

const tailwindCSSDocs = (_, res) => {
  res.json(tailwindResponse);
};

const chakraUIDocs = (_, res) => {
  res.json(chakraResponse);
};

const nextJSdocs = (_, res) => {
  res.json(nextjsResponse);
};

const clerkDocs = (_, res) => {
  res.json(clerkResponse);
};

const slapdashPlatformDocs = (_, res) => {
  res.json(slapdashPlatformResponse);
};

module.exports = {
  tailwindCSSDocs,
  chakraUIDocs,
  nextJSdocs,
  clerkDocs,
  slapdashPlatformDocs,
};
