import chalk from "chalk";
import ora from "ora";

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
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const spinner = ora(loadingText).start();
    action
      .then((data) => {
        spinner.succeed(successText);
        resolve(data);
      })
      .catch((err) => {
        spinner.fail(failText);
        reject(err);
      });
  });
};

export { info, error, success, loading };
