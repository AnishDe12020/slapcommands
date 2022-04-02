import { writeFileSync } from "fs";
import Sitemapper, { SitemapperResponse } from "sitemapper";
import { success, loading } from "../../utils/helpers";

const data: IData[] = [
  {
    fileName: "clerk-docs.json",
    baseWebsiteUrl: "https://clerk.dev/docs/",
    sitemapUrl: "https://clerk.dev/sitemap.xml",
    docs: [
      {
        basePath: "https://clerk.dev/docs/",
      },
      {
        basePath: "https://clerk.dev/guides/",
      },
    ],
  },
];

interface IData {
  fileName: string;
  baseWebsiteUrl: string;
  sitemapUrl: string;
  docs: IDoc[];
}

interface IDoc {
  basePath: string;
}

interface IItemsObject {
  title: string;
  subtitle: string | string[];
  url: string;
}

const fetchSitemap = async (sitemapUrl: string) => {
  const sitemap = new Sitemapper({
    url: sitemapUrl,
    timeout: 15000,
  });

  const data: SitemapperResponse = await loading(
    sitemap.fetch(),
    `Fetching sitemap with url ${sitemapUrl}`,
    `Fetched sitemap with url ${sitemapUrl}`,
    `Failed to fetch sitemap with url ${sitemapUrl}`
  );

  return data;
};

const main = async () => {
  data.map(async (project) => {
    const items: IItemsObject[] = [];
    const { sitemapUrl, docs } = project;

    const { sites } = await fetchSitemap(sitemapUrl);

    docs.map((doc) => {
      const { basePath } = doc;

      sites.map((site: string) => {
        if (site.includes(basePath)) {
          const name = site.replace(basePath, "");
          let nameParts: string[] = name.split("/");

          nameParts = nameParts.map((part: string) => {
            return part
              .split("-")
              .map((word: string) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
              })
              .join(" ");
          });

          const title = nameParts[nameParts.length - 1];

          const subtitle = nameParts.join(" → ");

          items.push({
            title,
            subtitle,
            url: site,
          });
        }
      });
    });
    writeFileSync(
      `./src/data/docsearch/${project.fileName}`,
      JSON.stringify(items)
    );
    success(`Wrote ${items.length} items to ${project.fileName}`);
  });
};

main();
