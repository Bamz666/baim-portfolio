import {
  frontend,
  backend,
  mobile,
  prototyping,
  javascript,
  php,
  html,
  css,
  reactjs,
  redux,
  bootstrap,
  laravel,
  git,
  mysql,
  github,
  postgresql,
  java,
  spring,
  kingkosMobile,
  kingkosWeb,
  energiNusantara,
  shopeymart,
  berbagiListrik,
  kos,
  kelhel,
  petik,
  kosachmad,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile/App Developer",
    icon: mobile,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Berbagi Listrik",
    icon: berbagiListrik,
    iconBg: "#333333",
    date: "July 2023 - Aug 2023",
  },
  {
    title: "Mentor (Volunteer)",
    company_name: "PeTIK",
    icon: petik,
    iconBg: "#333333",
    date: "Sep 2023 - Oct 2023",
  },
  {
    title: "Full Stack Developer",
    company_name: "Achmad Group",
    icon: kos,
    iconBg: "#333333",
    date: "Nov 2023 - Dec 2024",
  },
  {
    title: "Full Stack Developer",
    company_name: "King Group",
    icon: kelhel,
    iconBg: "#333333",
    date: "Feb 2024 - March 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Kos Achmad",
    description: "Book and Explore Ideal Living Spaces Online",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: kosachmad,
    repo: "https://github.com/Bamz666/kos-achmad",
    demo: "/",
  },
  {
    id: "project-2",
    name: "Kingkos Mobile",
    description:
      "Efficient mobile app for searching and booking boarding room (kosan)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: kingkosMobile,
    repo: "https://github.com/Bamz666/kingkos-mobile",
    demo: "/",
  },
  {
    id: "project-3",
    name: "Kingkos Web",
    description:
      "User-friendly website for searching and booking boarding rooms efficiently",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kingkosWeb,
    repo: "https://github.com/Bamz666/kingkos-web",
    demo: "/",
  },
  {
    id: "project-4",
    name: "Energi Nusantara",
    description: `An online portal for supporting solar energy development`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: energiNusantara,
    repo: "https://github.com/gusxdev/energi-nusantara",
    demo: "/",
  },
  {
    id: "project-5",
    name: "Shopeymart",
    description:
      "User-friendly POS system for small shops: manage sales and payments",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shopeymart,
    repo: "https://github.com/Bamz666/shopeymart",
    demo: "https://shopeymart.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
