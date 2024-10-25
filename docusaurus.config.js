// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Interview Experiences ft. IIIT Bhubaneswar",
  tagline: "Get prepared for your next on-campus interview!!",
  favicon: "img/iiit 128x128.svg",

  // Set the production url of your site here
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://interviews-at-iiit.vercel.app/", // Replace when deploying
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "IIIT Bhubaneswar",
  projectName: "Interview_Experiences",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Add client modules to handle authentication
  clientModules: [require.resolve("./src/clientModules/routeProtection.js")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: ["@docusaurus/plugin-ideal-image"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Interviews @ IIIT-BH",
        logo: {
          alt: "Logo",
          src: "img/iiit 128x128.svg",
        },
        items: [
          {
            href: "https://iiit-placement-website-v2.vercel.app/placements",
            label: "Placement Stats",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Reach us",
            items: [
              {
                label: "College Website",
                to: "https://www.iiit-bh.ac.in/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/iiitbhubaneswar",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/school/international-institute-of-information-technology-bhubaneswar/",
              },
              {
                label: "Twitter",
                href: "https://x.com/BhubaneswarIiit",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Placement Brochure",
                href: "https://drive.google.com/file/d/1YiPmpcUr667m8cdnSxsClBUR57iLgUv7/view?usp=sharing",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Placement Cell | IIIT Bhubaneswar`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
