const router = require("express").Router();

const {
  tailwindCSSDocs,
  chakraUIDocs,
  nextJSdocs,
  clerkDocs,
  slapdashPlatformDocs,
} = require("./src/cloud/docsearch");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/docsearch/tailwind-css", tailwindCSSDocs);
router.get("/docsearch/chakra-ui", chakraUIDocs);
router.get("/docsearch/nextjs", nextJSdocs);
router.get("/docsearch/clerk", clerkDocs);
router.get("/docsearch/slapdash-platform", slapdashPlatformDocs);

module.exports = router;
