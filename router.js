const router = require("express").Router();

const {
  tailwindCSSDocs,
  chakraUIDocs,
  nextJSdocs,
  clerkDocs,
  slapdashPlatformDocs,
} = require("./src/cloud/docsearch");

const { unixTimestamp } = require("./src/cloud/utils");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/docsearch/tailwind-css", tailwindCSSDocs);
router.get("/docsearch/chakra-ui", chakraUIDocs);
router.get("/docsearch/nextjs", nextJSdocs);
router.get("/docsearch/clerk", clerkDocs);
router.get("/docsearch/slapdash-platform", slapdashPlatformDocs);

router.get("/utils/unix-timestamp", unixTimestamp);

module.exports = router;
