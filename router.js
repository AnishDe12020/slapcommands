const router = require("express").Router();

const {
  tailwindCSSDocs,
  chakraUIDocs,
  nextJSdocs,
  clerkDocs,
  slapdashPlatformDocs,
  apolloDocs,
  apolloClientDocs,
} = require("./src/cloud/docsearch");

const { unixTimestamp } = require("./src/cloud/utils");

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.get("/docsearch/tailwind-css", tailwindCSSDocs);
router.get("/docsearch/chakra-ui", chakraUIDocs);
router.get("/docsearch/nextjs", nextJSdocs);
router.get("/docsearch/clerk", clerkDocs);
router.get("/docsearch/slapdash-platform", slapdashPlatformDocs);
router.get("/docsearch/apollo", apolloDocs);
router.get("/docsearch/apollo-client", apolloClientDocs);

router.get("/utils/unix-timestamp", unixTimestamp);

module.exports = router;
