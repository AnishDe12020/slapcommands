const tailwindResponse = require("../shared/docsearch/tailwind-css-docs");
const chakraResponse = require("../shared/docsearch/chakra-ui-docs");
const nextjsResponse = require("../shared/docsearch/nextjs-docs");
const clerkResponse = require("../shared/docsearch/clerk-docs");
const slapdashPlatformResponse = require("../shared/docsearch/slapdash-platform-docs");
const apolloResponse = require("../shared/docsearch/apollo-docs");
const apolloClientResponse = require("../shared/docsearch/apollo-client-docs");

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

const apolloDocs = (_, res) => {
  res.json(apolloResponse);
};

const apolloClientDocs = (_, res) => {
  res.json(apolloClientResponse);
};

module.exports = {
  tailwindCSSDocs,
  chakraUIDocs,
  nextJSdocs,
  clerkDocs,
  slapdashPlatformDocs,
  apolloDocs,
  apolloClientDocs,
};
