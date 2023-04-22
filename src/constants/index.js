import {
  mobile,
  backend,
  creator,
  web,
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
  aws,
  awscp,
  google,
  docker,
  chandarana,
  foodplus,
  emali,
  emaliStore,
  emaliAdmin,
  maskani,
  alx,
  taita,
  threejs,
  express,
  awstech,
  alxlog,
  aly,
  jack,
  mandela,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "IAM",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: " intouch",
  },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: creator,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const certificates = [
  {
    title: "AWS Cloud Practitioner",
    icon: awscp,
  },
  {
    title: "Google Cloud Developer",
    icon: google,
  },
  {
    title: "AWS Technical Accredited",
    icon: awstech,
  },
  {
    title: "Alx Software Engineer",
    icon: alxlog,
  },
];


const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "AWS",
    icon: aws,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product Manager",
    company_name: "Food Plus",
    icon: foodplus,
    iconBg: "#383E56",
    date: "Oct 2018 - Nov 2019",
    points: [
      "Identify opportunities to improve sales and profitability, and develop product strategies and roadmaps.",
	    "Conduct competitive analyses and collaborate with cross-functional teams to deliver innovative solutions.",
      "Define product requirements and features, prioritize development activities, and ensure product delivery within budget and timeline constraints.",
      "Monitor and analyze key performance metrics to identify areas for improvement and make data-driven decisions.",
    	"Work closely with other departments to ensure alignment on business objectives and support successful execution of initiatives.",
    ],
  },
  {
    title: "Custom Billing",
    company_name: "Food Plus",
    icon: chandarana,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - sep 2022",
    points: [
      "Auditing billing data to ensure accuracy and completeness.",
	    "Managing ETL systems using Retail's point-of-sale software tools to analyze and prepare reports for informed decisions.",
	    "Providing data management and pricing calculations to ensure accurate customer billing.",
	    "Addressing billing issues and gathering valuable feedback from customers.",
	    "Monitoring billing processes and making recommendations for process improvements.",
	    "Ensuring compliance with all relevant billing regulations and policies."
    ],
  },
  {
    title: "Software Engineer ",
    company_name: "Alx Africa",
    icon: alx,
    iconBg: "#383E56",
    date: "Feb 2022 - April 2023",
    points: [
      "Learning and understanding software development processes, methodologies, and programming languages.",
      "Assisting in the development, testing, and deployment of software applications.",
      "Collaborating with team members to identify and troubleshoot software issues.",
    	"Learning to write clear, concise, and well-documented code.",
	    "Keeping up-to-date with emerging technologies and industry trends.",
      "Contributing to the development of software documentation, such as user manuals, technical documentation, and system specifications.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "eMali",
    icon: emali,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Develop and maintain web applications using MERN and other related technologies.",
      "Participate in code reviews and provide constructive feedback to other developers to maintain code quality and best practices.",
    	"Ensure the scalability, reliability, and security of web applications, and identify and resolve technical issues.",
	    "Optimize application performance and actively participate in the full software development life cycle.",
      "Keep up-to-date with emerging technologies and industry trends.",
      "Collaborate with other teams, such as QA and DevOps, to ensure successful deployment and continuous improvement of web applications.",

    ],
  },
];

const education = [
  {
    school_name: "Taita Taveta University",
    course: "Mathematics and Computer Science",
    icon: taita,
    iconBg: "#383E56",
    date: "Sep 2014 - Nov 2018",
    points: [
      "Relevant Coursework: Software Engineering Fundamentals, Computer Programming, Computer Architecture, Algorithms and Data Structures, Systems Design, Machine and Assembly Language Programming, Digital Electronics, Digital Computer Design, Linear Algebra ,Fluid Mechanics ,Database Management, Computer Networks,  Numerical Analysis in Engineering, Technical Communication."
    ],
  },
  {
    school_name: "Alx-Africa",
    course: "Software Engineer Apprenticeship",
    icon: alx,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - April 2023",
    points: [
      "Completed Alx-Africa Software Engineer apprenticeship program that provided hands-on training and practical experience in software development.",
      "Worked on real projects under the guidance of experienced Software Engineers and Technical Mentors applying knowledge of programming languages, data structures, and algorithms.",
      "Collaborated with other student, Technical Mentors and project managers to deliver high-quality software products.",
      "Participated in regular evaluations to track progress and identify areas for improvement."
      
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to venture into a start-up.We build our website as beautiful as our product, but Hillary proved me wrong.",
    name: "Aly Mtsumi",
    designation: "Co-Founder",
    company: "eMali",
    image: aly,
  },
  {
    testimonial:
      "I've never met a Software Engineer who truly cares about their clients' success like Hillary does.He is extremely customer obsessed!",
    name: "Jackson Muendo",
    designation: "Customer Support",
    company: "Safaricom",
    image: jack,
  },
  {
    testimonial:
      "As someone with a non-tech background, I never thought I could become a Software developer. Hillary has been my mentor throughout my journey.",
    name: "Mandela Wilfred",
    designation: "Product Manager",
    company: "Foodplus",
    image: mandela,
  },
];

const projects = [
  {
    name: "e-Mali Online Store",
    description:
      "The e-Mali project is an online cosmetic store that enables users to easily view and purchase cosmetic products from the comfort of their homes. The term 'Mali' which means property in Swahili, colloquially refers to merchandise, which is the main focus of the project",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap 5",
        color: "white-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: emaliStore,
    source_code_link: "https://github.com/hillaryoyaro/e-Mali/",
  },
  {
    name: "e-Mali Admin App",
    description:
      "The eMali Admin project is a web-based application designed to manage products and account.It is designed to help streamline purchasing,stock and improve productivity by providing a centralized platform for product and account management",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap 5",
        color: "white-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: emaliAdmin,
    source_code_link: "https://github.com/hillaryoyaro/e-Mali/",
  },
  {
    name: "Maskani App",
    description:
      "Maskani is an online platform designed to connect skilled, unemployed individuals with potential employers who require their services. The term 'Maskani' is derived from the Swahili word for a gathering place, where individuals with technical skills come together to await job opportunities",
    tags: [
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Postgress",
        color: "blue-text-gradient",
      },
      {
        name: "PythonFlask",
        color: "green-text-gradient",
      },
    ],
    image: maskani,
    source_code_link: "https://github.com/hillaryoyaro/Maskani/",
  },
];

export { services,certificates, technologies, experiences,education, testimonials, projects };
