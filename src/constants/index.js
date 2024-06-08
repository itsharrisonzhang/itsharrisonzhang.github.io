// EFF5EF
// EB644D
// D37194
// 875949
// 2C2C3C
import {
  gmail,
  linkedin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  resume,
  github,
  raytheon,
  csail,
  edgecompute,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/harrisonzhy",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/harrisonzhy/",
  },
  {
    title: "Email",
    icon: gmail,
    link: "mailto:itsharrisonzhang@gmail.com",
  },
  {
    title: "Resume",
    icon: resume,
    link: "",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern (CODEX)",
    company_name: "Raytheon Technologies",
    icon: raytheon,
    iconBg: "#FFFFFF",
    date: "Jun 2024 - Present",
    points: [
      "Engineering Linux kernel \"electronic armor\" to dynamically detect and defend against already-privileged adversaries.",
      "Preventing interrupt-driven exploits by leveraging Zero Trust policies. Really cool, but unfortunately can't disclose more."
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)",
    icon: csail,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - Present",
    points: [
      "Leading team of 3 building parallel graph methods for weight access prediction in deep learning recommender models.",
      "Developing novel multicore lookup engine (10,000+ LOC) for DLRM inference acceleration on GPU (CUDA) and CPU.",
      "Achieved 32\% speedup, 29\% memory savings over SOTA on FAIR benchmarks - \textit{Scales near-linearly} to multi-model GPUs.",
      "Characterizing performance-accuracy tradeoff using Facebook Folly, e.g. sharded caching and lock-free (hash) algorithms.", 
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Harvard Edge Computing Lab",
    icon: edgecompute,
    iconBg: "#FFFFFF",
    date: "May 2023 - Dec 2023",
    points: [
      "Developed a custom embedded platform for accelerating AR/VR ML apps using Google’s FPGA ISA playground.",
      "As second team member, compiled first versions of project firmware (ARM) and engineered core DNN architectures.",
      "Built the de-facto build system and debugger tool now used by 30+ researchers, significantly enhancing project workflow.",
      "Decreased ensemble build time up to 250x by creating the \"Knot\" feature to support partial build for 30,000+ components.",
      "Deployed universal integration templates to interface open-source ML models, leading project migration past prototyping."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "DNN Accelerator",
    description:
      "Novel statically-unfoldable schemes (kernel encoding, layer decomposition) for Atrous convolutions on SOTA architectures. \
      Presented to scientists at NVIDIA Research and MIT CSAIL.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "HW/SW-Co-Design",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "Chickadee OS",
    description:
      "A multicore operating system with buddy and slab memory allocation, process hierarchy, CPU scheduler, HDD prefetcher, \
      virtual file system API, asynchronous disk file system, and Intel VT-x KVM virtualization support.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "OS-Internals",
        color: "green-text-gradient",
      },
      {
        name: "Virtualization",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "RenderWRLD",
    description:
      "A multicore GPU ray tracer and simulation engine, integrating Lambert diffusion, path tracing and ambient occlusion \
      algorithms to achieve high-fidelity images and interactions.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "CUDA",
        color: "green-text-gradient",
      },
      {
        name: "Graphics",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "Oasis",
    description:
      "A decentralized, anonymous, and gamified Web3 social media platform prioritizing authentic community discussion. \
      Fine-tuned LLM agents are leveraged to help users enforce community guidelines.",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "AI/ML",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "Alcolyze",
    description:
      "A user application written in Swift leveraging fine-tuned state-of-the-art semantic segmentation models to conduct personalized sobriety testing.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "Computer-Vision",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "",
  },
  {
    name: "Robotic Butterfly",
    description:
      "A biomimetic robotic butterfly that actually flies. \
      Lightweight skeleton is constructed from carbon fiber and \
      3D printed parts, and movement is controlled by custom embedded firmware.",
    tags: [
      {
        name: "Embedded-Systems",
        color: "blue-text-gradient",
      },
      {
        name: "Firmware",
        color: "green-text-gradient",
      },
      {
        name: "Robotics",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
