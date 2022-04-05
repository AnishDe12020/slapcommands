import clone from "git-clone/promise";
import { glob } from "glob";
import { readFile, writeFileSync } from "fs";
import fm from "front-matter";
import { info, error, success, loading } from "../../utils/helpers";

interface IData {
  fileName: string;
  baseWebsiteUrl: string;
  targetPath: string;
  repos: IRepoObject[];
}

interface IRepoObject {
  docsPathAddition?: string;
  websitePathAddition?: string;
  docs: IDocsObject[];
  repoUrl: string;
  pathReplacements?: IPathReplacement[];
  titleOverrides?: ITitleOverride[];
  subtitleOverrides?: ISubtitleOverride[];
}

interface IPathReplacement {
  dirPath: string | RegExp;
  websitePath: string;
}

interface IDocsObject {
  docsPathAddition?: string;
  baseWebsitePathAddition?: string;
}

interface ITitleOverride {
  oldTitle: string;
  newTitle: string;
}

interface ISubtitleOverride {
  oldSubtitle: string;
  newSubtitle: string;
}

interface IItemsObject {
  title: string;
  subtitle: string | string[];
  url: string;
}

const data: IData[] = [
  {
    targetPath: "./tmp/apollo-docs",
    fileName: "apollo-docs.json",
    baseWebsiteUrl: "https://www.apollographql.com/",
    repos: [
      {
        repoUrl: "https://github.com/apollographql/apollo",
        docs: [
          {
            docsPathAddition: "docs/source/",
            baseWebsitePathAddition: "docs/",
          },
        ],
      },
    ],
  },
  {
    targetPath: "./tmp/slapdash-platform-docs",
    fileName: "slapdash-platform-docs.json",
    baseWebsiteUrl: "https://platform.slapdash.com/",
    repos: [
      {
        repoUrl: "https://github.com/slapdash/platform.git",
        docs: [
          {
            docsPathAddition: "docs/",
          },
        ],
        pathReplacements: [
          {
            dirPath: "/build-commands/example-slack-message",
            websitePath: "/command-tutorials/send-slack-message",
          },
          {
            dirPath: "/build-commands/example-",
            websitePath: "/command-tutorials/",
          },
        ],
        titleOverrides: [
          {
            oldTitle: "Root",
            newTitle: "Home",
          },
        ],
        subtitleOverrides: [
          {
            oldSubtitle: "Root",
            newSubtitle: "",
          },
        ],
      },
    ],
  },
  {
    targetPath: "./tmp/nextjs",
    fileName: "nextjs-docs.json",
    baseWebsiteUrl: "https://nextjs.org/",
    repos: [
      {
        repoUrl: "https://github.com/vercel/next.js.git",
        docs: [
          {
            docsPathAddition: "docs/",
            baseWebsitePathAddition: "docs/",
          },
        ],
      },
    ],
  },
  {
    targetPath: "./tmp/tailwindcss-docs",
    fileName: "tailwind-css-docs.json",
    baseWebsiteUrl: "https://tailwindcss.com/",
    repos: [
      {
        repoUrl: "https://github.com/tailwindlabs/tailwindcss.com.git",
        docs: [
          {
            docsPathAddition: "src/pages/docs/",
            baseWebsitePathAddition: "docs/",
          },
        ],
      },
    ],
  },
  {
    targetPath: "./tmp/chakra-ui-docs",
    fileName: "chakra-ui-docs.json",
    baseWebsiteUrl: "https://chakra-ui.com/",
    repos: [
      {
        repoUrl: "https://github.com/chakra-ui/chakra-ui-docs.git",
        docs: [
          {
            docsPathAddition: "pages/docs/",
            baseWebsitePathAddition: "docs/",
          },
          {
            docsPathAddition: "pages/guides/",
            baseWebsitePathAddition: "guides/",
          },
        ],
      },
    ],
  },
];

const alreadyCloned = (targetPath: string): boolean => {
  return glob.sync(targetPath).length > 0;
};

const cloneRepo = async (
  repoUrl: string,
  targetPath: string
): Promise<void> => {
  if (alreadyCloned(targetPath)) {
    info(`${repoUrl} has already been cloned`);
    return;
  }
  await loading(
    clone(repoUrl, targetPath, { shallow: true }),
    `Cloning repo with url ${repoUrl} to ${targetPath}`,
    `Cloned repo with url ${repoUrl} to ${targetPath}`,
    `Failed to clone repo with url ${repoUrl} to ${targetPath}`
  );
};

const main = async () => {
  info("Starting...");

  data.map(async (project) => {
    const { targetPath, repos } = project;
    const items: IItemsObject[] = [];

    await Promise.all(
      repos.map(async (repo) => {
        const { repoUrl, docsPathAddition: repoDocsPathAddition } = repo;
        await cloneRepo(repoUrl, targetPath);
        await Promise.all(
          repo.docs.map(async (doc) => {
            const { docsPathAddition } = doc;
            const paths = glob.sync(
              `${targetPath}/${
                repoDocsPathAddition ? `${repoDocsPathAddition}` : ""
              }${docsPathAddition ? `${docsPathAddition}` : ""}**/*.{md,mdx}`
            );
            info(
              `${targetPath}/${
                repoDocsPathAddition ? `${repoDocsPathAddition}` : ""
              }${docsPathAddition ? `${docsPathAddition}` : ""}**/*.{md,mdx}`
            );
            info(`${paths.length} files found`);

            paths.map((path) => {
              const { pathReplacements, titleOverrides, subtitleOverrides } =
                repo;

              readFile(path, "utf8", (err, data) => {
                if (err) {
                  error(err.message);
                  return;
                }

                const content = fm(data);
                title = (content.attributes as any).title;
              });

              if (pathReplacements) {
                pathReplacements.map((pathReplacement) => {
                  if (path.match(pathReplacement.dirPath)) {
                    path = path.replace(
                      pathReplacement.dirPath,
                      pathReplacement.websitePath
                    );
                    return;
                  }
                });
              }
              let name: string;
              let title: string = "";

              name = path
                .replace(
                  `${targetPath}/${
                    repoDocsPathAddition ? `${repoDocsPathAddition}` : ""
                  }${docsPathAddition ? `${docsPathAddition}` : ""}`,
                  ""
                )
                .replace(/\.(md|mdx)$/g, "");

              let nameParts = name.split("/");

              nameParts = nameParts.map((part) => {
                return part
                  .split("-")
                  .map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                  })
                  .join(" ");
              });

              if (!title) {
                title = nameParts[nameParts.length - 1];
              }

              if (titleOverrides) {
                titleOverrides.map((titleOverride) => {
                  if (title === titleOverride.oldTitle) {
                    title = titleOverride.newTitle;
                    return;
                  }
                });
              }

              const url = `${project.baseWebsiteUrl}${
                repo.websitePathAddition ? `${repo.websitePathAddition}` : ""
              }${
                doc.baseWebsitePathAddition
                  ? `${doc.baseWebsitePathAddition}`
                  : ""
              }${name}`;

              let subtitle = nameParts.join(" → ");

              if (subtitleOverrides) {
                subtitleOverrides.map((subtitleOverride) => {
                  if (subtitle === subtitleOverride.oldSubtitle) {
                    subtitle = subtitleOverride.newSubtitle;
                    return;
                  }
                });
              }

              items.push({
                title,
                subtitle,
                url,
              });
            });
          })
        );
      })
    );
    writeFileSync(
      `./src/data/docsearch/${project.fileName}`,
      JSON.stringify(items)
    );
    success(`Wrote ${items.length} items to ${project.fileName}`);
  });
};

main();
