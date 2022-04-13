const https = require("https");

const RAINDROP_API_URL = "https://api.raindrop.io";

const getCollectionEndpoint = (query) => {
  return "/rest/v1/raindrops/0?search=" + query + "&sort=score";
};

const getRaindrops = async (query, token) => {
  const collectionsFullURL = new URL(
    RAINDROP_API_URL + getCollectionEndpoint(query)
  );
  return new Promise((resolve, reject) => {
    https
      .get(
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          host: collectionsFullURL.host,
          path: collectionsFullURL.pathname + collectionsFullURL.search,
        },
        (res) => {
          let data = "";

          res.on("data", (chunk) => {
            data += chunk;
          });

          res.on("end", () => {
            resolve(JSON.parse(data).items);
          });

          res.on("error", (error) => {
            reject(error);
          });
        }
      )
      .on("error", (err) => {
        reject(err);
      });
  });
};

const rootResponse = async (token, query) => {
  if (!token) {
    return {
      config: {
        form: {
          fields: [
            {
              type: "text",
              id: "raindrop-token",
              label: "Raindrop.io Access Token",
              defaultValue: token,
            },
          ],
        },
      },
    };
  }

  if (query) {
    const raindrops = await getRaindrops(query, token);

    // console.log(raindrops);
    return {
      inputPlaceholder: "Type to search raindrops",
      view: {
        type: "list",
        ranking: false,
        options: raindrops.map((item) => ({
          title: item.title,
          icon: item.cover,
          action: {
            type: "open-url",
            url: item.link,
          },
        })),
      },
    };
  } else {
    return {
      inputPlaceholder: "Type to search raindrops",
      view: {
        type: "list",
        ranking: false,
        options: [],
      },
    };
  }
};

module.exports = {
  rootResponse,
};
