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
        gtag: {
          trackingID: 'G-PJL1R0ZCNB', // Google Analytics Measurement ID
          anonymizeIP: true
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
              {
                label: "Placement Brochure",
                to: "https://drive.google.com/file/d/1YiPmpcUr667m8cdnSxsClBUR57iLgUv7/view?usp=sharing",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                to: "https://www.instagram.com/iiitbhubaneswar",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/school/international-institute-of-information-technology-bhubaneswar/",
              },
              {
                label: "Twitter",
                to: "https://x.com/BhubaneswarIiit",
              },
            ],
          },
          {
            title: "Site Maintainers",
            items: [
              {
                label: "Rajnish Kumar Singh",
                to: "https://www.linkedin.com/in/rajnish-kumar-singh-2241b321b/",
              },
              {
                label: "Md. Haris",
                to: "https://www.linkedin.com/in/muhammad-haris-860089265/",
              },
              {
                label: "Krishna Kalra",
                to: "https://www.linkedin.com/in/krishnakalra/",
              },
              {
                label: "Souharda Roy",
                to: "https://www.linkedin.com/in/souharda-roy3301/",
              },
            ],
          },
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} Placement Cell | IIIT Bhubaneswar`,
      },
      prism: {
        theme: prismThemes.nightOwl, // or prismThemes.github
        darkTheme: prismThemes.oceanicNext, // or prismThemes.dracula
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
