const docItems = [
  {
    title: "Advanced Features → Amp Support → Adding Amp Components",
    url: "https://nextjs.org/docs/advanced-features/amp-support/adding-amp-components",
  },
  {
    title: "Advanced Features → Amp Support → Amp In Static Html Export",
    url: "https://nextjs.org/docs/advanced-features/amp-support/amp-in-static-html-export",
  },
  {
    title: "Advanced Features → Amp Support → Amp Validation",
    url: "https://nextjs.org/docs/advanced-features/amp-support/amp-validation",
  },
  {
    title: "Advanced Features → Amp Support → Introduction",
    url: "https://nextjs.org/docs/advanced-features/amp-support/introduction",
  },
  {
    title: "Advanced Features → Amp Support → Typescript",
    url: "https://nextjs.org/docs/advanced-features/amp-support/typescript",
  },
  {
    title: "Advanced Features → Automatic Static Optimization",
    url: "https://nextjs.org/docs/advanced-features/automatic-static-optimization",
  },
  {
    title: "Advanced Features → Codemods",
    url: "https://nextjs.org/docs/advanced-features/codemods",
  },
  {
    title: "Advanced Features → Compiler",
    url: "https://nextjs.org/docs/advanced-features/compiler",
  },
  {
    title: "Advanced Features → Custom App",
    url: "https://nextjs.org/docs/advanced-features/custom-app",
  },
  {
    title: "Advanced Features → Custom Document",
    url: "https://nextjs.org/docs/advanced-features/custom-document",
  },
  {
    title: "Advanced Features → Custom Error Page",
    url: "https://nextjs.org/docs/advanced-features/custom-error-page",
  },
  {
    title: "Advanced Features → Custom Server",
    url: "https://nextjs.org/docs/advanced-features/custom-server",
  },
  {
    title: "Advanced Features → Customizing Babel Config",
    url: "https://nextjs.org/docs/advanced-features/customizing-babel-config",
  },
  {
    title: "Advanced Features → Customizing Postcss Config",
    url: "https://nextjs.org/docs/advanced-features/customizing-postcss-config",
  },
  {
    title: "Advanced Features → Debugging",
    url: "https://nextjs.org/docs/advanced-features/debugging",
  },
  {
    title: "Advanced Features → Dynamic Import",
    url: "https://nextjs.org/docs/advanced-features/dynamic-import",
  },
  {
    title: "Advanced Features → Error Handling",
    url: "https://nextjs.org/docs/advanced-features/error-handling",
  },
  {
    title: "Advanced Features → I18n Routing",
    url: "https://nextjs.org/docs/advanced-features/i18n-routing",
  },
  {
    title: "Advanced Features → Measuring Performance",
    url: "https://nextjs.org/docs/advanced-features/measuring-performance",
  },
  {
    title: "Advanced Features → Module Path Aliases",
    url: "https://nextjs.org/docs/advanced-features/module-path-aliases",
  },
  {
    title: "Advanced Features → Multi Zones",
    url: "https://nextjs.org/docs/advanced-features/multi-zones",
  },
  {
    title: "Advanced Features → Output File Tracing",
    url: "https://nextjs.org/docs/advanced-features/output-file-tracing",
  },
  {
    title: "Advanced Features → Preview Mode",
    url: "https://nextjs.org/docs/advanced-features/preview-mode",
  },
  {
    title: "Advanced Features → React 18 → Overview",
    url: "https://nextjs.org/docs/advanced-features/react-18/overview",
  },
  {
    title: "Advanced Features → React 18 → Server Components",
    url: "https://nextjs.org/docs/advanced-features/react-18/server-components",
  },
  {
    title: "Advanced Features → React 18 → Streaming",
    url: "https://nextjs.org/docs/advanced-features/react-18/streaming",
  },
  {
    title: "Advanced Features → Security Headers",
    url: "https://nextjs.org/docs/advanced-features/security-headers",
  },
  {
    title: "Advanced Features → Source Maps",
    url: "https://nextjs.org/docs/advanced-features/source-maps",
  },
  {
    title: "Advanced Features → Src Directory",
    url: "https://nextjs.org/docs/advanced-features/src-directory",
  },
  {
    title: "Advanced Features → Static Html Export",
    url: "https://nextjs.org/docs/advanced-features/static-html-export",
  },
  {
    title: "Advanced Features → Using Mdx",
    url: "https://nextjs.org/docs/advanced-features/using-mdx",
  },
  {
    title: "Api Reference → Cli",
    url: "https://nextjs.org/docs/api-reference/cli",
  },
  {
    title: "Api Reference → Create Next App",
    url: "https://nextjs.org/docs/api-reference/create-next-app",
  },
  {
    title: "Api Reference → Data Fetching → Get Initial Props",
    url: "https://nextjs.org/docs/api-reference/data-fetching/get-initial-props",
  },
  {
    title: "Api Reference → Data Fetching → Get Server Side Props",
    url: "https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props",
  },
  {
    title: "Api Reference → Data Fetching → Get Static Paths",
    url: "https://nextjs.org/docs/api-reference/data-fetching/get-static-paths",
  },
  {
    title: "Api Reference → Data Fetching → Get Static Props",
    url: "https://nextjs.org/docs/api-reference/data-fetching/get-static-props",
  },
  {
    title: "Api Reference → Edge Runtime",
    url: "https://nextjs.org/docs/api-reference/edge-runtime",
  },
  {
    title: "Api Reference → Next.config.js → Basepath",
    url: "https://nextjs.org/docs/api-reference/next.config.js/basepath",
  },
  {
    title: "Api Reference → Next.config.js → Build Indicator",
    url: "https://nextjs.org/docs/api-reference/next.config.js/build-indicator",
  },
  {
    title: "Api Reference → Next.config.js → Cdn Support With Asset Prefix",
    url: "https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix",
  },
  {
    title: "Api Reference → Next.config.js → Compression",
    url: "https://nextjs.org/docs/api-reference/next.config.js/compression",
  },
  {
    title: "Api Reference → Next.config.js → Configuring OnDemandEntries",
    url: "https://nextjs.org/docs/api-reference/next.config.js/configuring-onDemandEntries",
  },
  {
    title: "Api Reference → Next.config.js → Configuring The Build Id",
    url: "https://nextjs.org/docs/api-reference/next.config.js/configuring-the-build-id",
  },
  {
    title: "Api Reference → Next.config.js → Custom Page Extensions",
    url: "https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions",
  },
  {
    title: "Api Reference → Next.config.js → Custom Webpack Config",
    url: "https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config",
  },
  {
    title: "Api Reference → Next.config.js → Disabling Etag Generation",
    url: "https://nextjs.org/docs/api-reference/next.config.js/disabling-etag-generation",
  },
  {
    title: "Api Reference → Next.config.js → Disabling Http Keep Alive",
    url: "https://nextjs.org/docs/api-reference/next.config.js/disabling-http-keep-alive",
  },
  {
    title: "Api Reference → Next.config.js → Disabling X Powered By",
    url: "https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by",
  },
  {
    title: "Api Reference → Next.config.js → Environment Variables",
    url: "https://nextjs.org/docs/api-reference/next.config.js/environment-variables",
  },
  {
    title: "Api Reference → Next.config.js → ExportPathMap",
    url: "https://nextjs.org/docs/api-reference/next.config.js/exportPathMap",
  },
  {
    title: "Api Reference → Next.config.js → Headers",
    url: "https://nextjs.org/docs/api-reference/next.config.js/headers",
  },
  {
    title: "Api Reference → Next.config.js → Ignoring Eslint",
    url: "https://nextjs.org/docs/api-reference/next.config.js/ignoring-eslint",
  },
  {
    title: "Api Reference → Next.config.js → Ignoring Typescript Errors",
    url: "https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors",
  },
  {
    title: "Api Reference → Next.config.js → Introduction",
    url: "https://nextjs.org/docs/api-reference/next.config.js/introduction",
  },
  {
    title: "Api Reference → Next.config.js → React Strict Mode",
    url: "https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode",
  },
  {
    title: "Api Reference → Next.config.js → Redirects",
    url: "https://nextjs.org/docs/api-reference/next.config.js/redirects",
  },
  {
    title: "Api Reference → Next.config.js → Rewrites",
    url: "https://nextjs.org/docs/api-reference/next.config.js/rewrites",
  },
  {
    title: "Api Reference → Next.config.js → Runtime Configuration",
    url: "https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration",
  },
  {
    title: "Api Reference → Next.config.js → Setting A Custom Build Directory",
    url: "https://nextjs.org/docs/api-reference/next.config.js/setting-a-custom-build-directory",
  },
  {
    title: "Api Reference → Next.config.js → Static Optimization Indicator",
    url: "https://nextjs.org/docs/api-reference/next.config.js/static-optimization-indicator",
  },
  {
    title: "Api Reference → Next.config.js → Trailing Slash",
    url: "https://nextjs.org/docs/api-reference/next.config.js/trailing-slash",
  },
  {
    title: "Api Reference → Next.config.js → Url Imports",
    url: "https://nextjs.org/docs/api-reference/next.config.js/url-imports",
  },
  {
    title: "Api Reference → Next → Amp",
    url: "https://nextjs.org/docs/api-reference/next/amp",
  },
  {
    title: "Api Reference → Next → Head",
    url: "https://nextjs.org/docs/api-reference/next/head",
  },
  {
    title: "Api Reference → Next → Image",
    url: "https://nextjs.org/docs/api-reference/next/image",
  },
  {
    title: "Api Reference → Next → Link",
    url: "https://nextjs.org/docs/api-reference/next/link",
  },
  {
    title: "Api Reference → Next → Router",
    url: "https://nextjs.org/docs/api-reference/next/router",
  },
  {
    title: "Api Reference → Next → Script",
    url: "https://nextjs.org/docs/api-reference/next/script",
  },
  {
    title: "Api Reference → Next → Server",
    url: "https://nextjs.org/docs/api-reference/next/server",
  },
  {
    title: "Api Reference → Next → Streaming",
    url: "https://nextjs.org/docs/api-reference/next/streaming",
  },
  {
    title: "Api Routes → Api Middlewares",
    url: "https://nextjs.org/docs/api-routes/api-middlewares",
  },
  {
    title: "Api Routes → Dynamic Api Routes",
    url: "https://nextjs.org/docs/api-routes/dynamic-api-routes",
  },
  {
    title: "Api Routes → Introduction",
    url: "https://nextjs.org/docs/api-routes/introduction",
  },
  {
    title: "Api Routes → Response Helpers",
    url: "https://nextjs.org/docs/api-routes/response-helpers",
  },
  {
    title: "Authentication",
    url: "https://nextjs.org/docs/authentication",
  },
  {
    title: "Basic Features → Built In Css Support",
    url: "https://nextjs.org/docs/basic-features/built-in-css-support",
  },
  {
    title: "Basic Features → Data Fetching → Client Side",
    url: "https://nextjs.org/docs/basic-features/data-fetching/client-side",
  },
  {
    title: "Basic Features → Data Fetching → Get Server Side Props",
    url: "https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props",
  },
  {
    title: "Basic Features → Data Fetching → Get Static Paths",
    url: "https://nextjs.org/docs/basic-features/data-fetching/get-static-paths",
  },
  {
    title: "Basic Features → Data Fetching → Get Static Props",
    url: "https://nextjs.org/docs/basic-features/data-fetching/get-static-props",
  },
  {
    title: "Basic Features → Data Fetching → Incremental Static Regeneration",
    url: "https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration",
  },
  {
    title: "Basic Features → Data Fetching → Overview",
    url: "https://nextjs.org/docs/basic-features/data-fetching/overview",
  },
  {
    title: "Basic Features → Environment Variables",
    url: "https://nextjs.org/docs/basic-features/environment-variables",
  },
  {
    title: "Basic Features → Eslint",
    url: "https://nextjs.org/docs/basic-features/eslint",
  },
  {
    title: "Basic Features → Fast Refresh",
    url: "https://nextjs.org/docs/basic-features/fast-refresh",
  },
  {
    title: "Basic Features → Font Optimization",
    url: "https://nextjs.org/docs/basic-features/font-optimization",
  },
  {
    title: "Basic Features → Image Optimization",
    url: "https://nextjs.org/docs/basic-features/image-optimization",
  },
  {
    title: "Basic Features → Layouts",
    url: "https://nextjs.org/docs/basic-features/layouts",
  },
  {
    title: "Basic Features → Pages",
    url: "https://nextjs.org/docs/basic-features/pages",
  },
  {
    title: "Basic Features → Script",
    url: "https://nextjs.org/docs/basic-features/script",
  },
  {
    title: "Basic Features → Static File Serving",
    url: "https://nextjs.org/docs/basic-features/static-file-serving",
  },
  {
    title: "Basic Features → Supported Browsers Features",
    url: "https://nextjs.org/docs/basic-features/supported-browsers-features",
  },
  {
    title: "Basic Features → Typescript",
    url: "https://nextjs.org/docs/basic-features/typescript",
  },
  {
    title: "Deployment",
    url: "https://nextjs.org/docs/deployment",
  },
  {
    title: "Faq",
    url: "https://nextjs.org/docs/faq",
  },
  {
    title: "Getting Started",
    url: "https://nextjs.org/docs/getting-started",
  },
  {
    title: "Going To Production",
    url: "https://nextjs.org/docs/going-to-production",
  },
  {
    title: "Guides → Building Forms",
    url: "https://nextjs.org/docs/guides/building-forms",
  },
  {
    title: "Middleware",
    url: "https://nextjs.org/docs/middleware",
  },
  {
    title: "Migrating → From Create React App",
    url: "https://nextjs.org/docs/migrating/from-create-react-app",
  },
  {
    title: "Migrating → From Gatsby",
    url: "https://nextjs.org/docs/migrating/from-gatsby",
  },
  {
    title: "Migrating → From React Router",
    url: "https://nextjs.org/docs/migrating/from-react-router",
  },
  {
    title: "Migrating → Incremental Adoption",
    url: "https://nextjs.org/docs/migrating/incremental-adoption",
  },
  {
    title: "Routing → Dynamic Routes",
    url: "https://nextjs.org/docs/routing/dynamic-routes",
  },
  {
    title: "Routing → Imperatively",
    url: "https://nextjs.org/docs/routing/imperatively",
  },
  {
    title: "Routing → Introduction",
    url: "https://nextjs.org/docs/routing/introduction",
  },
  {
    title: "Routing → Shallow Routing",
    url: "https://nextjs.org/docs/routing/shallow-routing",
  },
  {
    title: "Testing",
    url: "https://nextjs.org/docs/testing",
  },
  {
    title: "Upgrading",
    url: "https://nextjs.org/docs/upgrading",
  },
];

const response = {
  view: {
    type: "list",
    options: docItems.map((item) => ({
      title: item.title,
      action: {
        type: "open-url",
        url: item.url,
      },
      icon: "/static/favicon/favicon-32x32.png",
    })),
  },
};

console.log(JSON.stringify(response));
