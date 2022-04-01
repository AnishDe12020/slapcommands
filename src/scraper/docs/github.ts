import clone from "git-clone/promise";
import chalk from "chalk";
import ora from "ora";
import { glob } from "glob";
import { readFile } from "fs";
import fm from "front-matter";

const log = console.log;

const info = (msg: string): void => {
  log(chalk.blue(msg));
};

const error = (msg: string): void => {
  log(chalk.red(msg));
};

const success = (msg: string): void => {
  log(chalk.green(msg));
};

const loading = async (
  action: Promise<any>,
  loadingText: string = "Loading...",
  successText: string = "Success!",
  failText: string = "Failed!"
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const spinner = ora(loadingText).start();
    action
      .then(() => {
        spinner.succeed(successText);
        resolve();
      })
      .catch((err) => {
        spinner.fail(failText);
        reject(err);
      });
  });
};

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
            websitePath: "/commands-tutorials/",
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
    clone(repoUrl, targetPath),
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

    repos.map(async (repo) => {
      const { repoUrl, docsPathAddition: repoDocsPathAddition } = repo;
      await cloneRepo(repoUrl, targetPath);
      repo.docs.map(async (doc) => {
        const { docsPathAddition } = doc;
        const paths = glob.sync(
          `${targetPath}/${
            repoDocsPathAddition ? `${repoDocsPathAddition}` : ""
          }${docsPathAddition ? `${docsPathAddition}` : ""}**/*.md`
        );
        info(
          `${targetPath}/${
            repoDocsPathAddition ? `${repoDocsPathAddition}` : ""
          }${docsPathAddition ? `${docsPathAddition}` : ""}**/*.md`
        );
        info(`${paths.length} files found`);

        paths.map((path) => {
          const { pathReplacements, titleOverrides, subtitleOverrides } = repo;

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
            repo.websitePathAddition ? `${repo.websitePathAddition}/` : ""
          }${
            doc.baseWebsitePathAddition ? `${doc.baseWebsitePathAddition}/` : ""
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

          console.log(title, subtitle, url);
        });
      });
    });
  });
};

main();
