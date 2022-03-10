import glob from "glob";
import clone from "git-clone/promise";
import fs from "fs";

interface IData {
  repoUrl: string;
  targetPath: string;
  fileName: string;
  baseWebsiteUrl: string;
  docs: IDocsObject[];
}

interface IDocsObject {
  docsPath: string;
  baseWebsitePath: string;
}

interface IItemsObject {
  title: string;
  subtitle: string;
  url: string;
}

const data: IData[] = [
  {
    repoUrl: "https://github.com/vercel/next.js.git",
    targetPath: "./tmp/nextjs",
    fileName: "nextjs-docs.json",
    baseWebsiteUrl: "https://nextjs.org/",
    docs: [
      {
        docsPath: "docs/",
        baseWebsitePath: "docs/",
      },
    ],
  },
  {
    repoUrl: "https://github.com/tailwindlabs/tailwindcss.com.git",
    targetPath: "./tmp/tailwindcss-docs",
    fileName: "tailwind-css-docs.json",
    baseWebsiteUrl: "https://tailwindcss.com/",
    docs: [
      {
        docsPath: "src/pages/docs/",
        baseWebsitePath: "docs/",
      },
    ],
  },
  {
    repoUrl: "https://github.com/chakra-ui/chakra-ui-docs.git",
    targetPath: "./tmp/chakra-ui-docs",
    fileName: "chakra-ui-docs.json",
    baseWebsiteUrl: "https://chakra-ui.com/",
    docs: [
      {
        docsPath: "pages/docs/",
        baseWebsitePath: "docs/",
      },
      {
        docsPath: "pages/guides/",
        baseWebsitePath: "guides/",
      },
    ],
  },
  {
    repoUrl: "https://github.com/clerkinc/docs.git",
    targetPath: "./tmp/clerk-docs",
    fileName: "clerk-docs.json",
    baseWebsiteUrl: "https://docs.clerk.dev/",
    docs: [
      {
        docsPath: "",
        baseWebsitePath: "",
      },
    ],
  },
];

const excludeFilenames = ["readme", "summary"];

data.forEach((project) => {
  let items: IItemsObject[] = [];
  clone(project.repoUrl, project.targetPath, { shallow: true })
    .then(() => {
      project.docs.forEach((doc) => {
        const paths = glob.sync(
          `${project.targetPath}/${doc.docsPath}/**/*.{md,mdx}`
        );

        paths.forEach((path) => {
          let name = path.replace(`${project.targetPath}/${doc.docsPath}`, "");
          name = name.replace(/\.(md|mdx)$/g, "");
          console.log(name);

          if (
            excludeFilenames.some((excludeFilename) =>
              name.toLowerCase().includes(excludeFilename)
            )
          ) {
            return;
          }

          let websitePath = `${project.baseWebsiteUrl}${doc.baseWebsitePath}${name}`;
          console.log(websitePath);

          let nameParts = name.split("/");
          nameParts = nameParts.map((part) => {
            return part
              .split("-")
              .map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
              })
              .join(" ");
          });

          name = nameParts.join(" → ");

          items.push({
            title: nameParts[nameParts.length - 1],
            subtitle: name,
            url: websitePath,
          });

          console.log(items);
        });
      });

      fs.writeFileSync(
        `./src/data/docsearch/${project.fileName}`,
        JSON.stringify(items)
      );
      console.log("Wrote file " + project.fileName);
    })
    .catch((err) => {
      console.error(err);
    });
});
