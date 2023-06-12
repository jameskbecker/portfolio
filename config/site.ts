export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "James K. Becker",
  description:
    "A Fullstack Enginner specialising in frontend and crafting exceptional web experiences.",
  mainNav: [
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Showcase",
      href: "/#showcase",
    },
    {
      title: "Skills",
      href: "/#skills",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ],
  links: {
    heroCta: "#showcase",
  },
  skills: [
    {
      id: "frontend",
      data: [
        "React (Native)",
        "Next.js",
        "Redux",
        "Styled Components",
        "Tailwind",
        "React Testing Library",
        "Framer Motion",
        "Recharts",
      ],
    },
    {
      id: "backend",
      data: ["Node.js", "Express.js", "MySQL", "MongoDB"],
    },
    {
      id: "languages",
      data: [
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML",
        "CSS / SCSS / Sass",
        "Go",
      ],
    },
    {
      id: "tooling-platforms",
      data: [
        "Storybook",
        "Github (Git)",
        "Webpack",
        "Jest",
        "Vercel",
        "Heroku",
        "Cypress",
        "Turborepo",
        "AWS",
      ],
    },
    {
      id: "collaboration",
      data: [
        "Slack / Discord",
        "Jira / Linear",
        "Notion",
        "MS Teams",
        "Trello",
        "Chromatic",
      ],
    },
    {
      id: "design",
      data: ["Figma", "Adobe XD"],
    },
  ],

  showcase: [
    {
      id: "kupm",
      name: "KU Project Manager",
      image: "/kupm.png",
      description: `A CRUD web application to help students manage their university work. This was made as my final year project as part of my university coursework. It uses React and is written in TypeScript.`,
      skills: ["React", "Figma", "Express.js", "Typescript", "MySQL"],
    },
    {
      id: "nft",
      name: "NFT Automation",
      image: "/nft-automation.png",
      description: `This project involved creating a React front end based on a provided design. It needed to be done in a way where it was ready to be plugged into the back end. The project involved several complex tasks such as creating dynamic charts and performant lists.`,
      skills: [
        "React",
        "Typescript",
        "Styled Components",
        "Chart.js",
        "Node.js",
        "Electron",
      ],
    },
    {
      id: "propseraio",
      name: "ProsperAIO",
      image: "/prosperaio.png",
      description: `This was my first big side project. It played a key role in developing both my initial knowledge and passion for web development. It taught me a lot about how the web works and involved making requests to various servers. Working on this project also gave me a thorough understanding of JavaScript, my core programming language.`,
      skills: [
        "React",
        "Typescript",
        "Styled Components",
        "Express.js",
        "Node.js",
        "Electron",
        "Figma",
      ],
    },
  ],
}
