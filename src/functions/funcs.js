const currentDate = new Date();
const shorterDate = currentDate[Symbol.toPrimitive]("string").slice(4, 31);

const help = [
  "HELP - Command List:",
  "- clear:             clear the console",
  "",
  "- baseStats:         general stats",
  "- codeStats:         programming stats",
  "- jobSearch:         job search characteristics",
  "- links:             social media links",
  "- contact            contact info",
  "- downloads:         download files",
  "",
  "",
  "- show about:        introduction",
  "- show projects:     personal projects",
  "- show academic:     academic background",
  "- show experience:   work experience",
  "",
  "",
  "- exit:              exit all screens",
  "- image:             en/disable image display",
  "- help:              show this list",
  "- ducks:             just duck pics",
  "~",
];

const baseStats = [
  `BASE STATS - ${shorterDate}`,
  "- Full Name:         Rodrigo Alejandro Schulz Rosas",
  "- Birth Date:        1994-09-17",
  "- Nationality:       Peruvian",
  "- Location:          Lima, Peru",
  "- Timezone:          GMT-5",
  "- Languages:         Spanish (native)",
  "                     English (fluent)",
  "~",
];

const codeStats = [
  `CODE STATS - ${shorterDate}`,
  "- Specialization:    Backend Development",
  "- Level:             Junior",
  "- Languages+:        JavaScript (proficient)",
  "                     CSS, HTML (proficient)",
  "                     Python (proficient)",
  "                     SQL (intermediate)",
  "                     Bash (intermediate)",
  "                     TypeScript (learning)",
  "                     Golang (learning)",
  "- Stack:             MongoDB",
  "                     Express",
  "                     React",
  "                     Node.js",
  "                     PostgreSQL",
  "- Other:             WebScraping, Selenium",
  "                     Pandas, Tauri",
  "                     Excel, Power BI",
  "                     Postman",
  "- Tools:             Git & GitHub",
  "                     VS Code",
  "                     Postman",
  "- Started Coding:    2023-11-22",
  "~",
];

const jobSearch = [
  `JOB SEARCH - ${shorterDate}`,
  "- Position:          Backend Developer",
  "- Modality:          Fully Remote",
  "- Availability:      Full-time",
  "- Salary:            Negotiable",
  "- Start Date:        Immediate",
  "- Relocation:        Currently Unavailable",
  "~",
];

const contact = [
  `CONTACT INFO - ${shorterDate}`,
  "- Email:             rod.schulz.rosas@gmail.com",
  "- Phone:             +51 998 376 189",
  "- Address:           Miraflores, Lima, Lima, Peru",
  "- Zip Code:          15074",
  "~",
];

const links = [
  `SOCIAL MEDIA LINKS - ${shorterDate}`,
  "https://www.linkedin.com/in/rodrigo-schulz-rosas/",
  "https://github.com/rodalschulz",
  "~",
];

const downloads = [
  `DOWNLOAD FILES - ${shorterDate}`,
  "- Resume:",
  "https://drive.google.com/just-a-test-link",
  "- CFA Lvl 1:",
  "https://drive.google.com/just-a-test-link",
  "~",
];

const invalid = ["$ Error:             Invalid command ", "~"];

const showAbout = [
  "   ABOUT",
  "► Intro",
  `
  Versatile software developer with solid experience in backend development, 
  database management, data validation, user authentication and more.
  Committed to continual learning and driven by an optimistic outlook.
  `,
  "► Exploring Finance",
  `
  Over the past few years I immersed myself in the study of finance, 
  a journey that reached a significant milestone with the successful
  completion of the CFA Level 1 exam in February 2023. 
  `,
  " ",
  `
  Scoring in the 90th percentile, this achievement stands as a testament
  to my dedication and commitment. It reinforced my unwavering belief that
  with perseverance and diligence, one can master virtually anything.
  `,
  "► A new discovery",
  `
  In my pursuit of professional growth, I explored data analysis, where my
  introduction to Python web scraping sparked an instant passion. After a 
  bunch of small coding projects, the experience allowed me to recognize that
  engineering aligns perfectly with my aptitude and character, and it's the
  path I'm committed to for the many years to come.
  `,
];

const showProjects = [
  "   PROJECTS",
  "► Activity Tracker Web/PC App (In Progress)",
  ` Full-stack web application that allows users to track their daily 
  activities and visualize their consistency & progress.
  `,
  ` Built using the MERN tech stack, it uses JWT for authentication
  and will have compatibility with iOS and android.
  `,
  ` The app is currently under development; it will also have a PC
  version built with Tauri, for MAC, Windows & Linux.
  `,
  "► Bank Data Extraction PC App - Webscraping / Python",
  ` First coding project implementing a simple GUI; built with
  python's tkinter library, it also uses selenium and pandas.
  `,
  ` A PC app for the user to download their bank data in one single
  organized format and CSV by web-scraping different peruvian bank
  websites where they maintain debit and/or credit bank accounts.
  `,
  ` Extracts data from HTML (no API access) & stores only new
  transactions; it also integrates with the model below.
  `,
  "► Excel Personal Finance Model",
  ` Multi featured excel financial model to track expenses, income,
  debt, net worth, and other metrics.
  `,
  ` It shows a variety of charts to present the monthly data using
  pivot tables and other tools
  `,
];

const showAcademic = [
  "   ACADEMIC BACKGROUND",
  "► SOFTWARE DEVELOPMENT",

  " Course Careers:",
  " Software Development Fundamentals",
  " Backend Development",

  "► FINANCE STUDIES",
  `
    Various courses on finance, accounting and valuation, including the
    free but outstanding course from LAFF and BLS Inc. & Brigham Young
    University: "Introduction to Accounting", but most notably, the
    CFA Level 1 exam, which I passed in February 2023.
  `,
  "► COLLEGE DEGREE",
  `
  Audiovisual Communication Bachelor at the Pontificia Universidad Catolica 
  del Peru (PUCP).
  `,
];

const showExperience = [
  "   WORK EXPERIENCE",
  "► Own Projects & Seeking Employment (Mar 2024 - Present)",
  ` Currently focusing on my own projects and seeking employment as a remote
  backend developer.
  `,
  ` Mainly working on a full-stack web application to track daily activities 
  and a PC version of the app built with Tauri.
  `,
  "► Project Controller — Vistanova S.A.C (Sep 2019 - Mar 2024)",
  ` Worked as a project controller for the development of a multifamily
  apartment building in Santiago de Surco, Lima.
  `,
  ` Daily tasks related to accounting and database management, constantly
  communicating with the head accountant.
  `,
  ` Managed construction worker payrolls and established an automatic
  system for pay determination.
  `,
  ` Constant error checking of accounting documents presented to the tax
  authority, resulting in 20k+ of savings.
  `,
  ` Direct contact and management of construction workers regarding
  attendance and punctuality.
  `,
  "► Real Estate Agent, Self Employed (Aug 2020 - june 2022)",
  ` Officially registered Real Estate Agent in the Peruvian’s Ministerio 
  de Vivienda, dedicated to rentals and sales.
  `,
  ` Worked independently as a realtor, in direct contact with sellers and
  buyers, aiding with decision-making, property valuation, and 3d modelling
  for home renovations.
  `,
  ` Gained experience at cold calling and handling client needs and preferences.
  `,
];

const cmd = {
  help,
  baseStats,
  codeStats,
  jobSearch,
  links,
  contact,
  downloads,
  invalid,
  showAbout,
  showAcademic,
  showExperience,
  showProjects,
};

export default cmd;
