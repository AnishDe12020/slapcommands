import clone from "git-clone/promise";
import chalk from "chalk";
import ora, { Ora, promise as oraPromise } from "ora";
import { glob } from "glob";

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
}

interface IDocsObject {
  docsPathAddition?: string;
  baseWebsitePathAddition?: string;
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
];

const alreadyCloned = (targetPath: string): boolean => {
  return glob.sync(targetPath).length > 0;
};

const cloneRepo = async (
  repoUrl: string,
  targetPath: string
): Promise<void> => {
  if (alreadyCloned(targetPath)) {
    success(`${repoUrl} has already been cloned`);
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

    repos.map(async (repo) => {
      const { repoUrl, docsPathAddition: repoDocsPathAddition } = repo;
      await cloneRepo(repoUrl, targetPath);
      repo.docs.map(async (doc) => {
        const { docsPathAddition } = repo;
        const paths = glob.sync(
          `${targetPath}/${
            repoDocsPathAddition ? `${repoDocsPathAddition}/` : ""
          }${docsPathAddition ? `${docsPathAddition}/` : ""}**/*.md`
        );
        console.log(paths);
        success(`${paths.length} files found`);
      });
    });
  });
};

main();
