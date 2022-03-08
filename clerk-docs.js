const docItems = [
  {
    title:
      "Components → Control Components → Authenticate With Redirect Callback",
    websitePath:
      "https://docs.clerk.dev/components/control-components/authenticate-with-redirect-callback",
  },
  {
    title: "Components → Control Components → Clerk Loaded",
    websitePath:
      "https://docs.clerk.dev/components/control-components/clerk-loaded",
  },
  {
    title: "Components → Control Components → Clerk Loading",
    websitePath:
      "https://docs.clerk.dev/components/control-components/clerk-loading",
  },
  {
    title: "Components → Customization",
    websitePath: "https://docs.clerk.dev/components/customization",
  },
  {
    title: "Components → Introduction",
    websitePath: "https://docs.clerk.dev/components/introduction",
  },
  {
    title: "Components → Sign In With Metamask Button",
    websitePath:
      "https://docs.clerk.dev/components/sign-in-with-metamask-button",
  },
  {
    title: "Components → Sign In → Redirect To Sign In",
    websitePath:
      "https://docs.clerk.dev/components/sign-in/redirect-to-sign-in",
  },
  {
    title: "Components → Sign In → Sign In Button",
    websitePath: "https://docs.clerk.dev/components/sign-in/sign-in-button",
  },
  {
    title: "Components → Sign In → Sign In",
    websitePath: "https://docs.clerk.dev/components/sign-in/sign-in",
  },
  {
    title: "Components → Sign Up → Redirect To Sign Up",
    websitePath:
      "https://docs.clerk.dev/components/sign-up/redirect-to-sign-up",
  },
  {
    title: "Components → Sign Up → Sign Up Button",
    websitePath: "https://docs.clerk.dev/components/sign-up/sign-up-button",
  },
  {
    title: "Components → Sign Up → Sign Up",
    websitePath: "https://docs.clerk.dev/components/sign-up/sign-up",
  },
  {
    title: "Components → Signed In",
    websitePath: "https://docs.clerk.dev/components/signed-in",
  },
  {
    title: "Components → Signed Out",
    websitePath: "https://docs.clerk.dev/components/signed-out",
  },
  {
    title: "Components → User Button",
    websitePath: "https://docs.clerk.dev/components/user-button",
  },
  {
    title: "Components → User Profile → Redirect To User Profile",
    websitePath:
      "https://docs.clerk.dev/components/user-profile/redirect-to-user-profile",
  },
  {
    title: "Components → User Profile → User Profile",
    websitePath: "https://docs.clerk.dev/components/user-profile/user-profile",
  },
  {
    title: "Get Started → Create React App",
    websitePath: "https://docs.clerk.dev/get-started/create-react-app",
  },
  {
    title: "Get Started → Get Started With Gatsby",
    websitePath: "https://docs.clerk.dev/get-started/get-started-with-gatsby",
  },
  {
    title: "Get Started → Get Started With Web3",
    websitePath: "https://docs.clerk.dev/get-started/get-started-with-web3",
  },
  {
    title: "Get Started → Nextjs Api",
    websitePath: "https://docs.clerk.dev/get-started/nextjs-api",
  },
  {
    title: "Get Started → Nextjs",
    websitePath: "https://docs.clerk.dev/get-started/nextjs",
  },
  {
    title: "Get Started → Redwoodjs",
    websitePath: "https://docs.clerk.dev/get-started/redwoodjs",
  },
  {
    title: "Get Started → Remix",
    websitePath: "https://docs.clerk.dev/get-started/remix",
  },
  {
    title: "Integrations → Bubble.io Beta",
    websitePath: "https://docs.clerk.dev/integrations/bubble.io-beta",
  },
  {
    title: "Integrations → Fauna",
    websitePath: "https://docs.clerk.dev/integrations/fauna",
  },
  {
    title: "Integrations → Firebase",
    websitePath: "https://docs.clerk.dev/integrations/firebase",
  },
  {
    title: "Integrations → Google Analytics",
    websitePath: "https://docs.clerk.dev/integrations/google-analytics",
  },
  {
    title: "Integrations → Hasura",
    websitePath: "https://docs.clerk.dev/integrations/hasura",
  },
  {
    title: "Integrations → Supabase",
    websitePath: "https://docs.clerk.dev/integrations/supabase",
  },
  {
    title: "Learning Center → Build Frontend First → Elevating Permissions",
    websitePath:
      "https://docs.clerk.dev/learning-center/build-frontend-first/elevating-permissions",
  },
  {
    title: "Learning Center → Build Frontend First → Handling Errors",
    websitePath:
      "https://docs.clerk.dev/learning-center/build-frontend-first/handling-errors",
  },
  {
    title: "Learning Center → Build Frontend First → Session Authentication",
    websitePath:
      "https://docs.clerk.dev/learning-center/build-frontend-first/session-authentication",
  },
  {
    title: "Learning Center → Build Frontend First → What Is A Frontend Api",
    websitePath:
      "https://docs.clerk.dev/learning-center/build-frontend-first/what-is-a-frontend-api",
  },
  {
    title: "Learning Center → Security → Csrf Protection",
    websitePath:
      "https://docs.clerk.dev/learning-center/security/csrf-protection",
  },
  {
    title: "Learning Center → Security → Fixation Protection",
    websitePath:
      "https://docs.clerk.dev/learning-center/security/fixation-protection",
  },
  {
    title: "Learning Center → Security → Introduction",
    websitePath: "https://docs.clerk.dev/learning-center/security/introduction",
  },
  {
    title: "Learning Center → Security → Password Protection",
    websitePath:
      "https://docs.clerk.dev/learning-center/security/password-protection",
  },
  {
    title: "Learning Center → Security → Session Leak Protection",
    websitePath:
      "https://docs.clerk.dev/learning-center/security/session-leak-protection",
  },
  {
    title: "Learning Center → Security → Vulnerability Disclosure Policy",
    websitePath:
      "https://docs.clerk.dev/learning-center/security/vulnerability-disclosure-policy",
  },
  {
    title: "Learning Center → Security → Xss Leak Protection",
    websitePath:
      "https://docs.clerk.dev/learning-center/security/xss-leak-protection",
  },
  {
    title: "Main Concepts → Auth V2",
    websitePath: "https://docs.clerk.dev/main-concepts/auth-v2",
  },
  {
    title: "Main Concepts → Session Lifetime",
    websitePath: "https://docs.clerk.dev/main-concepts/session-lifetime",
  },
  {
    title: "Main Concepts → Session Management",
    websitePath: "https://docs.clerk.dev/main-concepts/session-management",
  },
  {
    title: "Main Concepts → Sign In Flow",
    websitePath: "https://docs.clerk.dev/main-concepts/sign-in-flow",
  },
  {
    title: "Main Concepts → Sign Up Flow",
    websitePath: "https://docs.clerk.dev/main-concepts/sign-up-flow",
  },
  {
    title: "Main Concepts → User Object",
    websitePath: "https://docs.clerk.dev/main-concepts/user-object",
  },
  {
    title: "Popular Guides → Build Your Own Ui",
    websitePath: "https://docs.clerk.dev/popular-guides/build-your-own-ui",
  },
  {
    title: "Popular Guides → Email And Password",
    websitePath: "https://docs.clerk.dev/popular-guides/email-and-password",
  },
  {
    title: "Popular Guides → Invitations",
    websitePath: "https://docs.clerk.dev/popular-guides/invitations",
  },
  {
    title: "Popular Guides → Jwt Templates",
    websitePath: "https://docs.clerk.dev/popular-guides/jwt-templates",
  },
  {
    title: "Popular Guides → Magic Links",
    websitePath: "https://docs.clerk.dev/popular-guides/magic-links",
  },
  {
    title: "Popular Guides → Making Authenticated Requests To The Backend",
    websitePath:
      "https://docs.clerk.dev/popular-guides/making-authenticated-requests-to-the-backend",
  },
  {
    title: "Popular Guides → Multi Factor Authentication",
    websitePath:
      "https://docs.clerk.dev/popular-guides/multi-factor-authentication",
  },
  {
    title: "Popular Guides → Passwordless Authentication",
    websitePath:
      "https://docs.clerk.dev/popular-guides/passwordless-authentication",
  },
  {
    title: "Popular Guides → Popular Guides Multi Session Applications",
    websitePath:
      "https://docs.clerk.dev/popular-guides/popular-guides-multi-session-applications",
  },
  {
    title: "Popular Guides → Popular Guides Sign Out",
    websitePath:
      "https://docs.clerk.dev/popular-guides/popular-guides-sign-out",
  },
  {
    title: "Popular Guides → Production Setup",
    websitePath: "https://docs.clerk.dev/popular-guides/production-setup",
  },
  {
    title: "Popular Guides → Setup Your Application",
    websitePath: "https://docs.clerk.dev/popular-guides/setup-your-application",
  },
  {
    title: "Popular Guides → Social Login Oauth",
    websitePath: "https://docs.clerk.dev/popular-guides/social-login-oauth",
  },
  {
    title: "Popular Guides → Ssr Beta",
    websitePath: "https://docs.clerk.dev/popular-guides/ssr-beta",
  },
  {
    title: "Popular Guides → Sync Data To Your Backend",
    websitePath:
      "https://docs.clerk.dev/popular-guides/sync-data-to-your-backend",
  },
  {
    title: "Popular Guides → Validating Session Tokens",
    websitePath:
      "https://docs.clerk.dev/popular-guides/validating-session-tokens",
  },
  {
    title: "Reference → Backend Api Reference → Allowlist Identifiers",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/allowlist-identifiers",
  },
  {
    title:
      "Reference → Backend Api Reference → Beta Features → Instance Settings",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/beta-features/instance-settings",
  },
  {
    title: "Reference → Backend Api Reference → Beta Features → Introduction",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/beta-features/introduction",
  },
  {
    title: "Reference → Backend Api Reference → Beta Features → Tokens",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/beta-features/tokens",
  },
  {
    title: "Reference → Backend Api Reference → Clients",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/clients",
  },
  {
    title: "Reference → Backend Api Reference → Emails",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/emails",
  },
  {
    title: "Reference → Backend Api Reference → Introduction",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/introduction",
  },
  {
    title: "Reference → Backend Api Reference → Invitations",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/invitations",
  },
  {
    title: "Reference → Backend Api Reference → Organizations",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/organizations",
  },
  {
    title:
      "Reference → Backend Api Reference → Sdks → Golang → Getting Started",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/golang/getting-started",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Golang → Other Examples",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/golang/other-examples",
  },
  {
    title:
      "Reference → Backend Api Reference → Sdks → Golang → Verifying A Session",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/golang/verifying-a-session",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Node → Getting Started",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/node/getting-started",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Node → User",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/node/user",
  },
  {
    title:
      "Reference → Backend Api Reference → Sdks → Ruby → Available Methods",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/ruby/available-methods",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Ruby → Configuration",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/ruby/configuration",
  },
  {
    title: "Reference → Backend Api Reference → Sdks → Ruby → Getting Started",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/ruby/getting-started",
  },
  {
    title:
      "Reference → Backend Api Reference → Sdks → Ruby → Rack Rails Integration",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sdks/ruby/rack-rails-integration",
  },
  {
    title: "Reference → Backend Api Reference → Sessions",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sessions",
  },
  {
    title: "Reference → Backend Api Reference → Sms Messages",
    websitePath:
      "https://docs.clerk.dev/reference/backend-api-reference/sms-messages",
  },
  {
    title: "Reference → Backend Api Reference → Users",
    websitePath: "https://docs.clerk.dev/reference/backend-api-reference/users",
  },
  {
    title: "Reference → Clerk Expo",
    websitePath: "https://docs.clerk.dev/reference/clerk-expo",
  },
  {
    title: "Reference → Clerk React → Clerkprovider",
    websitePath: "https://docs.clerk.dev/reference/clerk-react/clerkprovider",
  },
  {
    title: "Reference → Clerk React → Installation",
    websitePath: "https://docs.clerk.dev/reference/clerk-react/installation",
  },
  {
    title: "Reference → Clerk React → Useclerk Hook",
    websitePath: "https://docs.clerk.dev/reference/clerk-react/useclerk-hook",
  },
  {
    title: "Reference → Clerk React → Usesession Hook",
    websitePath: "https://docs.clerk.dev/reference/clerk-react/usesession-hook",
  },
  {
    title: "Reference → Clerk React → Usesessionlist Hook",
    websitePath:
      "https://docs.clerk.dev/reference/clerk-react/usesessionlist-hook",
  },
  {
    title: "Reference → Clerk React → Usesignin Hook",
    websitePath: "https://docs.clerk.dev/reference/clerk-react/usesignin-hook",
  },
  {
    title: "Reference → Clerk React → Usesignup Hook",
    websitePath: "https://docs.clerk.dev/reference/clerk-react/usesignup-hook",
  },
  {
    title: "Reference → Clerk React → Useuser Hook",
    websitePath: "https://docs.clerk.dev/reference/clerk-react/useuser-hook",
  },
  {
    title: "Reference → Clerkjs → Clerk",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/clerk",
  },
  {
    title: "Reference → Clerkjs → Client",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/client",
  },
  {
    title: "Reference → Clerkjs → Emailaddress",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/emailaddress",
  },
  {
    title: "Reference → Clerkjs → Installation",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/installation",
  },
  {
    title: "Reference → Clerkjs → Organization",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/organization",
  },
  {
    title: "Reference → Clerkjs → Organizationmembership",
    websitePath:
      "https://docs.clerk.dev/reference/clerkjs/organizationmembership",
  },
  {
    title: "Reference → Clerkjs → Page 1",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/page-1",
  },
  {
    title: "Reference → Clerkjs → Phonenumber",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/phonenumber",
  },
  {
    title: "Reference → Clerkjs → Session",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/session",
  },
  {
    title: "Reference → Clerkjs → Sessionwithactivities",
    websitePath:
      "https://docs.clerk.dev/reference/clerkjs/sessionwithactivities",
  },
  {
    title: "Reference → Clerkjs → Signin",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/signin",
  },
  {
    title: "Reference → Clerkjs → Signup",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/signup",
  },
  {
    title: "Reference → Clerkjs → User",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/user",
  },
  {
    title: "Reference → Clerkjs → Web3wallet",
    websitePath: "https://docs.clerk.dev/reference/clerkjs/web3wallet",
  },
  {
    title: "Reference → Email And Sms Templates",
    websitePath: "https://docs.clerk.dev/reference/email-and-sms-templates",
  },
  {
    title: "Reference → Export Users And Data",
    websitePath: "https://docs.clerk.dev/reference/export-users-and-data",
  },
  {
    title: "Reference → Frontend Api Reference → Introduction",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/introduction",
  },
  {
    title:
      "Reference → Frontend Api Reference → Organization Requests → Organization Invitations Requests",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/organization-requests/organization-invitations-requests",
  },
  {
    title:
      "Reference → Frontend Api Reference → Organization Requests → Organization Membership Requests",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/organization-requests/organization-membership-requests",
  },
  {
    title:
      "Reference → Frontend Api Reference → Organization Requests → Organization Requests",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/organization-requests/organization-requests",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Client",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/user-api/client",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Introduction",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/user-api/introduction",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Sessions",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/user-api/sessions",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Sign Ins",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/user-api/sign-ins",
  },
  {
    title: "Reference → Frontend Api Reference → User Api → Sign Ups",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/user-api/sign-ups",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Email Addresses",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/users/email-addresses",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Introduction",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/users/introduction",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Organizations",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/users/organizations",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Phone Numbers",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/users/phone-numbers",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Profile Image",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/users/profile-image",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Sessions",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/users/sessions",
  },
  {
    title: "Reference → Frontend Api Reference → Users → Tokens",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/users/tokens",
  },
  {
    title: "Reference → Frontend Api Reference → Users → User",
    websitePath:
      "https://docs.clerk.dev/reference/frontend-api-reference/users/user",
  },
  {
    title: "Reference → Import Users",
    websitePath: "https://docs.clerk.dev/reference/import-users",
  },
  {
    title: "Reference → Social Login Reference → Bitbucket",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/bitbucket",
  },
  {
    title: "Reference → Social Login Reference → Discord",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/discord",
  },
  {
    title: "Reference → Social Login Reference → Dropbox",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/dropbox",
  },
  {
    title: "Reference → Social Login Reference → Github",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/github",
  },
  {
    title: "Reference → Social Login Reference → Gitlab",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/gitlab",
  },
  {
    title: "Reference → Social Login Reference → Hubspot",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/hubspot",
  },
  {
    title: "Reference → Social Login Reference → Linkedin",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/linkedin",
  },
  {
    title: "Reference → Social Login Reference → Microsoft",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/microsoft",
  },
  {
    title: "Reference → Social Login Reference → Notion",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/notion",
  },
  {
    title: "Reference → Social Login Reference → Social Login Facebook",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/social-login-facebook",
  },
  {
    title: "Reference → Social Login Reference → Social Login Google",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/social-login-google",
  },
  {
    title: "Reference → Social Login Reference → Tiktok",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/tiktok",
  },
  {
    title: "Reference → Social Login Reference → Twitch",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/twitch",
  },
  {
    title: "Reference → Social Login Reference → Twitter",
    websitePath:
      "https://docs.clerk.dev/reference/social-login-reference/twitter",
  },
  {
    title: "Reference → Webhooks",
    websitePath: "https://docs.clerk.dev/reference/webhooks",
  },
];

const response = {
  view: {
    type: "list",
    options: docItems.map((item) => ({
      title: item.title,
      action: {
        type: "open-url",
        url: item.websitePath,
      },
      icon: "https://clerk.dev/favicon/favicon-32x32.png",
    })),
  },
};

console.log(JSON.stringify(response));
