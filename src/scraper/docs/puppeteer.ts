import puppeteer from "puppeteer";

const startBrowser = async () => {
  console.log("Opening the browser......");
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--disable-setuid-sandbox", "--window-size=1920,1080"],
    ignoreHTTPSErrors: true,
  });

  return browser;
};

const scrape = async () => {
  const browser = await startBrowser();

  const page = await browser.newPage();
  await page.goto(
    "https://www.radix-ui.com/docs/primitives/overview/introduction"
  );

  page.click(
    "#__next > div.c-lesPJm.c-lesPJm-ieXZWYX-css > div > div.c-lesPJm.c-lesPJm-ifkCXNL-css > div > div.c-lesPJm.c-lesPJm-ihkuIra-css > div.c-gqwkJN.c-gqwkJN-ejCoEP-direction-row.c-gqwkJN-irEjuD-align-stretch.c-gqwkJN-awKDG-justify-start.c-gqwkJN-kVNAnR-wrap-noWrap.c-gqwkJN-isfbcm-css > div > button"
  );

  await page.waitForSelector(".c-lesPJm-igvUKiS-css");
  console.log("Scraping the page......");

  console.log(page);

  await page.$$eval("div", (links) => {
    links.forEach((link) => {
      console.log(link);
    });
  });
};

scrape();
