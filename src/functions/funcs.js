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
  "- show programming:  coding journey",
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
  "- Level:             Entry-Level",
  "- Languages+:        JavaScript (proficient)",
  "                     CSS, HTML (proficient)",
  "                     Python (proficient)",
  "                     SQL (intermediate)",
  "                     Java (intermediate)",
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
  "https://twitter.com/RodSR19",
  "~",
];

const downloads = [
  `DOWNLOAD FILES - ${shorterDate}`,
  "- Resume:",
  "https://drive.google.com/file/d",
  "- CFA Lvl 1:",
  "https://drive.google.com/file/d",
  "~",
];

const invalid = ["$ Error:             Invalid command ", "~"];

const showAbout = [
  "                             ABOUT",
  " INTRO:",
  `
  Hey there, I'm Rod! An enthusiastic and optimistic software developer 
  driven by a passion for continuous learning and productivity. My
  moderate finance background has helped me understand the importance
  of contributing to shareholder value, and I'm excited to bring that
  efficiency mindset to the world of software; along with, of course,
  an abundant dose of innovation, creativity and problem-solving skills.
  `,

  " EXPLORING FINANCE:",
  `
  Over the past few years, I dedicated myself to studying finance, 
  culminating in my successful completion of the CFA Level 1 exam in
  February 2023, where I achieved a commendable score in the 90th 
  percentile. I mention this, because this accomplishment instilled 
  in me a profound belief that with dedication and effort, one can
  learn almost anything.
  `,
  " A NEW BEGINNING:",
  `
  During my journey to enhance my professional skills, I delved into 
  data analysis, and it was there that I had my first encounter with 
  Python web scraping: I immediately fell in love with it.
  So, upon deeper reflection, I realized that the field of engineering
  has always resonated with my mind and personality, and it's where I 
  envision dedicating myself for the many years to come.
  `,
];

const showProjects = [
  "                          PROJECTS",
  " ",
  " ACTIVITY TRACKER - MERN STACK WEB APP (IN PROGRESS)",
  `
  A full-stack web application that allows users to track their daily
  activities and visualize their progress. The app is built with the
  MERN stack and uses JWT for authentication. The frontend is built
  with React and the backend with Node.js and Express. The database
  is MongoDB. The app is currently in the development stage.
  There will also be a PC version of the app built with Tauri.
  `,
  " BANK DATA EXTRACTION - PYTHON WEB SCRAPING PC APP",
  `
  My first coding project, a Python web scraping application with a GUI
  that extracts bank data from a 5 local bank websites. The app is built
  with Python, tkinter and Selenium and extracts data from the bank's
  website and stores it in a CSV file. It also has a feature that integrates
  with the model below.
  `,
  " PERSONAL FINANCE MODEL - EXCEL",
  `
  A personal finance model built with Excel that allows users to
  track their income, expenses, investments, net worth and more. The model
  is built entirely in Excel.
  `,
];

const showAcademic = [
  "                      ACADEMIC BACKGROUND",
  " ",
  " SOFTWARE DEVELOPMENT",

  "Course Careers:                                     ",
  "- Software Development Fundamentals (scored 84% in the final exam)",
  "- Backend Development (scored 82% in the final exam)",

  " FINANCE STUDIES",
  `
    Various courses on finance, accounting and valuation, including the
    free but outstanding course from LAFF and BLS Inc. & Brigham Young
    University: "Introduction to Accounting", but most notably, the
    CFA Level 1 exam, which I passed in February 2023 (90th percentile).
  `,
  " COLLEGE DEGREE",
  `
  Audiovisual Communication Bachelor at the Pontificia Universidad Catolica 
  del Peru (PUCP).
  `,
];

const showExperience = [
  "                      WORK EXPERIENCE",
  " ",
  " Own Projects & Seeking Employment (Mar 2024 - Present)",
  `
  Currently focusing on my own projects and seeking employment as a remote
  backend developer. I'm working on a full-stack web application to track
  daily activities and a PC version of the app built with Tauri. I'm also
  learning TypeScript and Golang to expand my skillset.
  `,
  " Real Estate Agent, Self Employed (Aug 2020 - june 2022)",
  `
  As a side hustle, I worked as a Real Estate Agent in Lima working with
  different home sellers. I earned my Real Estate Agent official permit
  and closed a few rentals and selling operations. Eventually I ceased
  this occupation due to the state of the real estate market in Lima and
  also to dedicate my self more to my education in finance.
  `,
  " Project Controller — Vistanova S.A.C (Sep 2019 - Mar 2024)",
  `
  Worked as a project controller for the construction of a multi apartment
  building in Lima, Peru. My daily tasks were related to accounting,
  constantly communicating with the head accountant of the company
  and managing construction workers payroll. I also provided financial
  forecasts and reports on the project's profitability. I used Microsoft Excel
  as my main work tool.
  `,
];

const showProgramming = [
  "                    PROGRAMMING JOURNEY",
  " ",
  " FOUND THE WAY",
  `
  My journey into the world of programming began in November 22nd, 2023, when
  I decided to learn Python for data analysis. I started doing some web scraping
  projects and immediately fell in love.
  I love the idea of making websites, apps and software that can help people
  in their daily lives.
  `,
  " ",
  ` MY PASSION`,
  `
  I'm passionate about the advancements in AI, LLMs, deep learning, and also 
  the potential integration of this in the realm of VR game development, which 
  intend to also learn in the future.
  `,
  "~",
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
  showProgramming,
  showProjects,
};

export default cmd;
