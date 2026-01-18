import { ProjectsType } from "@/app/type";
import {
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
} from "@remixicon/react";
import project1 from "@/public/images/project-1.png";
import project2 from "@/public/images/project-2.jpg";
import project3 from "@/public/images/project-3.jpg";

export const projects: ProjectsType = [
  {
    id: 1,
    title: "Bandomega Personal Website ",
    description:
      "A personal portfolio website showcasing projects, GitHub links, and project highlights. Built with HTML5 and Bootstrap.",
    githubURL: "https://github.com/bando9/bandomega-portfolio/",
    websiteURL: "https://v1.bandomega.com/",
    projectdetailURL: "/blog/personal-website",
    isContentTextLeft: false,
    image: project1,
    tools: [
      { id: 1, name: "HTML5", icon: RiHtml5Fill },
      { id: 2, name: "CSS3", icon: RiCss3Fill },
      { id: 3, name: "Bootsrap", icon: RiBootstrapFill },
    ],
  },
  {
    id: 2,
    title: "Memomate – Daily Notes App",
    description:
      "A simple web app for creating and managing daily notes. Built with ReactJS and modular styling.",
    githubURL: "https://github.com/bando9/memomate",
    websiteURL: "https://memomate-six.vercel.app/",
    projectdetailURL: "/projects/project-details",
    isContentTextLeft: true,
    image: project2,
    tools: [{ id: 1, name: "React", icon: RiReactjsFill }],
  },
  {
    id: 3,
    title: "Mini Library – Book CRUD Application",
    description:
      "A personal portfolio website showcasing projects, GitHub links, and project highlights. Built with HTML5 and Bootstrap.",
    githubURL: "https://github.com/bando9/perpustakaan-mini",
    websiteURL: "https://perpustakaan-mini.vercel.app/",
    projectdetailURL: "/projects/project-details",
    isContentTextLeft: false,
    image: project3,
    tools: [
      { id: 1, name: "HTML5", icon: RiHtml5Fill },
      { id: 2, name: "CSS3", icon: RiCss3Fill },
      { id: 3, name: "JS", icon: RiJavascriptFill },
    ],
  },
  {
    id: 4,
    title: "Mindflow ",
    description:
      "A personal portfolio website showcasing projects, GitHub links, and project highlights. Built with HTML5 and Bootstrap.",
    githubURL: "https://github.com/bando9/mindflow",
    websiteURL: "https://mindflow.bandomega.com/",
    projectdetailURL: "/projects/project-details",
    isContentTextLeft: true,
    image: project3,
    tools: [
      { id: 2, name: "CSS3", icon: RiCss3Fill },
      { id: 3, name: "JS", icon: RiJavascriptFill },
    ],
  },
];
