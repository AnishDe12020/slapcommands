const emojiData = require("../../data/utils/emojiData.json");
const fuzzySearch = require("../../utils/fuzzy-search");

const rootResponse = (query) => {
  let results = [];

  if (query) {
    results = fuzzySearch.go(query, emojiData, {
      key: "title",
      limit: 100,
      threshold: -10000,
    });
  } else {
    results = [];
  }

  return {
    inputPlaceholder: "Type to search NPM packages",
    view: {
      type: "list",
      ranking: false,
      options: results.map((result) => result.obj),
    },
  };
};

module.exports = { rootResponse };
