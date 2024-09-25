// @ts-nocheck
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Interview Experiences ft. IIIT Bhubaneswar",
  tagline: "Get prepared for your next on-campus interview!!",
  favicon: "img/iiit 128x128.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "IIIT Bhubaneswar", // Usually your GitHub org/user name.
  projectName: "Interview_Experiences", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
                href: "https://www.instagram.com/iiitbhubaneswar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
        defaultMode: "dark", // Set dark mode by default
        disableSwitch: false, // Allow users to switch between light and dark mode
        respectPrefersColorScheme: false, // Force dark mode regardless of system preferences
      },
    }),
};

export default config;
