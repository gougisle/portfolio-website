import {
  faSquareJs,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const PROJECTS_ARR = [
  {
    company: "Distributed Drone Flight Management Tool (DXFMT)",
    title: "Full Stack Engineer",
    workDescription:
      "Spearheaded the development of comprehensive equipment management/maintenenace systems, integrated email services via SendGrid API, and built out mobile-first frontend UI with a focus on speed and responsiveness.",
    skills: ["JS", "C#", "SQL", "ASP.NET", "React", "RestAPI"],
  },
  {
    company: "Sabio Inc.",
    title: "Full Stack Engineer",
    workDescription:
      "Built and maintained REST API web services utilized by over 500 concurrent users daily. Increased performance of high-traffic pages in our React application. Maintained relational database (SQL) procs and tables in order to ensure reliable and efficient data management. Developed suite of automate unittests to verify structure and functionality for new backend code. Guided and mentored teams of 10-12 junior developers.",
    skills: ["JS", "C#", "SQL", "ASP.NET", "React", "RestAPI"],
  },
  {
    company: "World Prints",
    title: "Full Stack Developer",
    workDescription:
      "Built end-to-end analytics tracking system. Engineered backend solutions (.NET & SQL) for seamless integration with the analytics dashboard. Implemented graphical features in React allowing business owners to adjust parameters and gain insights into specific metrics.",
    skills: ["JS", "C#", "SQL", "ASP.NET", "React", "RestAPI"],
  },
  {
    company: "Del Rey Tech",
    title: "Junior Developer (Intern)",
    workDescription:
      "Collaborated with an Agile team of developers and product managers, delivering fast and scalable web solutions. Contributed to project-wide migration of legacy systems to React frontend ",
    skills: ["JS", "HTML", "CSS", "React"],
  },
  {
    company: "Center For Mindfulness and Human Potential (CMHP)",
    title: "QA Tester / Researcher",
    workDescription:
      "Conducted QA testing on Mindfulness application ensuring reliability of new features across multiple devices. Recorded Designed surveys and questionnaires, to collect actionable user-feedback about the UI/UX. Edited and Pproduced both video and audio content from the application (i.e. recorded interviews, guided meditation and video lessons.",
    skills: [
      "Google Workspace",
      "Qualtrics",
      "Adobe Premier",
      "Adobe Audition",
    ],
  },
];

const SKILLS_ARR = [
  {
    label: "JavaScript",
    icon: faSquareJs,
    urlLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "HTML5",
    icon: faHtml5,
    urlLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS3",
    icon: faCss3,
    urlLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { label: "React", icon: faReact, urlLink: "https://react.dev/" },
  {
    label: "C#",
    icon: null,
    urlLink:
      "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/",
  },
  {
    label: ".NET",
    icon: faMicrosoft,
    urlLink: "https://learn.microsoft.com/en-us/dotnet/",
  },
  {
    label: "Node.js",
    icon: faNodeJs,
    urlLink: "https://nodejs.org/docs/latest/api/",
  },
  {
    label: "SQL",
    icon: faDatabase,
    urlLink:
      "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16",
  },
];

export { PROJECTS_ARR, SKILLS_ARR };
