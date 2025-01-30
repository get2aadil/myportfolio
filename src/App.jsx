import "./App.css";
import Resume from "./assets/documents/Resume.pdf";
import Profile from "./assets/Photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import ChangingRolesCompononet from "./roles";
import Particles from "./particles";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const skills = {
    Programming: ["Dart"],
    DevOps: [
      "Docker",
      "Kubernetes",
      "Jenkins CI/CD",
      "Ansible",
      "GitLab CI/CD",
    ],
    WebDevelopment: [
      "ASP.NET",
      "MVC",
      "RESTful API",
      "SOAP API",
      "PHP",
      "Spring Boot",
    ],
    Databases: ["MS SQL", "MySQL", "MongoDB"],
    Tools: [
      "Visual Studio",
      "VS Code",
      "Postman",
      "Git",
      "SVN",
      "Redmine",
      "MS Teams",
      "RabbitMQ",
      "AD",
      "LDAP",
      "Jira",
      "Kibana",
      "Azure Boards",
    ],
    Cloudplatforms: [
      "Azure",
      "AWS",
      "Oracle",
      "GCP",
      "VMware [ESXi, vCenter, vSphere]",
      "Nutanix",
    ],
  };

  return (
    <body className="relative">
      <Particles className="absolute w-full h-full inset-0 z-0" />
      <div className="max-w-4xl m-auto relative min-h-screen">
        <header
          className={`${
            scrolling ? "border-b border-gray-900" : ""
          }  fixed left-0 right-0 top-0 z-20`}
          id="home"
        >
          <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
              <div>
                <h1 className="font-bold text-2xl">My Portfolio</h1>
              </div>
              <div>
                <ul className="flex gap-4">
                  <li>
                    <a
                      href="#aboutme"
                      className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      About me
                    </a>
                  </li>
                  <li>
                    <a
                      href="#technologies"
                      className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main className="relative mt-28">
          {/* Intro/Banner section */}
          <section>
            <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <div>
                <h2 className="font-bold text-4xl">Hi !! I'm Aadil</h2>
                <div>
                  <h2 className="font-bold text-4xl mt-1 text-type">
                    <ChangingRolesCompononet />
                  </h2>
                </div>
                <div>
                  <p
                    className="mt-4 text-gray-400"
                    style={{ textAlign: "justify" }}
                  >
                    With over 2 years of getting my hands dirty with all things
                    in tech, from developing robust software solutions to
                    streamlining system operations. My toolbox is filled with a
                    variety of skills, whatever gets the job done right.
                    Currently, I'm leveling up with a Master's in Computer
                    Science at California State University Chico, diving deep
                    into advanced tech topics. I love tackling tough problems,
                    always with a clear focus on making things work better. My
                    journey is about making impactful contributions, one line of
                    code at a time.
                  </p>
                  <button
                    onClick={() => {
                      // Opens the resume in a different tab
                      window.open(Resume, "_blank");
                      // Commented code is to Download
                      // const anchor = document.createElement("a");
                      // anchor.href = Resume;
                      // anchor.download = "Rutvik's Resume.pdf";
                      // anchor.click();
                    }}
                    className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Resume
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-20">
                  <img
                    src={Profile}
                    className="relative z-10 w-[280px] m-auto sm:w-[600px]"
                  />
                </div>
                {/* <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Profile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div> */}
              </div>
            </div>
          </section>

          {/* Technoglies section */}
          <section className="py-10" id="technologies">
            <div className="container m-auto px-4">
              <h2 className="text-2xl font-semibold">Technologies</h2>
              <div className="mt-14">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C#, .NET, Java, C++ </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    HTML, CSS, Bootstrap, JavaScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python, SQL </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </section>
          {/* Additional skills section */}
          <section>
            <div className="container m-auto px-4 py-14">
              <h2 className="text-2xl font-semibold">
                Additional technologies and skills
              </h2>
              <div className="skills-grid mt-2">
                {Object.keys(skills).map((category) => (
                  <div key={category} className="skill-category">
                    <div className="category-header">
                      <span className="dot"></span>
                      <h3 className="category-title">{category}</h3>
                    </div>
                    <div className="skill-details">
                      {skills[category].map((skill, index) => (
                        <div key={index} className="skill-item">
                          <p className="skill-name">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* About Me Section */}
          <section className="py-8" id="aboutme">
            <div className="container m-auto px-4">
              <h2 className="text-2xl font-semibold">About me</h2>
              <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">
                    2024
                  </h3>
                  <p>
                    <b>Software Engineer Intern - Summer 2024</b>
                    <br />
                    <div className="block mt-5 mb-5 justified-text">
                      I am currently pursuing a role as a Software Engineer
                      Intern at Customized Energy Solutions in Philadelphia,
                      USA. My responsibilities include implementing
                    </div>
                    <span className="block ml-5 mb-5 justified-text">
                      &#8226; Implementing RAG architecture with OpenAI's vector
                      store and Files, reducing support queries to engineers by
                      60%
                      <br />
                      &#8226; Developing MongoDB Triggers to fetch data,
                      generate JSON files, and push them using a custom
                      multi-part form approach
                      <br />
                      &#8226; Applying AI and ML techniques to optimize data
                      retrieval and augmentation, enhancing assistant accuracy
                      and user experience
                      <br />
                      &#8226;Developed an automated web scraping service using Scrapy, 
                      integrating with Amazon S3 and AWS Lambda to process and store data efficiently. 
                      Designed the architecture to scrape data in parallel for each spider, enabling seamless scaling with minimal manual intervention.
                      As the sole architect, designer, and developer, optimized the implementation process, 
                      reducing team effort by 80%, making it a key component of the project.
                      <br />
                    </span>
                  </p>
                </div>
                <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">
                    2023
                  </h3>
                  <p>
                    <b>
                      California State University, Chico - M.S Computer Science
                    </b>
                    <br />
                    <div className="block mt-5 mb-5 justified-text">
                      After gaining 2.8 years of experience as a Software
                      Engineer, I was ready to up my game by learning more
                      advanced concepts related to Advanced Software and
                      Artificial Intelligence. The coursework I am taking is a
                      blend of these two fields.
                    </div>
                    <span className="block ml-5">
                      &#8226; Applied Machine Learning
                      <br />
                      &#8226; Applied Computer Vision
                      <br />
                      &#8226; Artificial Intelligence
                      <br />
                      &#8226; Robotics and Machine Intelligence
                      <br />
                      &#8226; Software Design and Maintenance
                      <br />
                      &#8226; Mobile and Web Development
                      <br />
                      &#8226; Algorithms and Computability
                      <br />
                      &#8226; Advanced Data Structures and Algorithms
                      <br />
                      &#8226; Scalable Software Systems
                      <br />
                      &#8226; Cybersecurity
                    </span>
                  </p>
                </div>

                <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">
                    2021
                  </h3>
                  <p>
                    <b>Accops Systems - Software Engineer</b>
                    <div className="block mt-5 mb-5 justified-text">
                      As a Software Engineer at Accops Systems, I developed and
                      integrated multiple features and services, led a team, and
                      significantly improved processes and tools, particularly
                      in the realms of VDI.
                    </div>
                  </p>
                </div>

                <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">
                    2020
                  </h3>
                  <p>
                    <b>
                      Centre for Development of Advanced Computing (C-DAC) -
                      Post Graduate Diploma in Advanced Computing
                    </b>
                    <br />
                    <div className="block mt-5 mb-5 justified-text">
                      Joined CDAC after my bachelor's to equip myself with
                      essential coding skills. CDAC prepared me for the IT
                      industry, covering fundamentals and modern concepts like
                      Data Structures and Algorithms, Web Technologies, DevOps,
                      and various programming languages.
                    </div>
                  </p>
                </div>

                <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">
                    2019
                  </h3>
                  <p>Graduated as a Mechanical Engineer</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects section */}
          <section id="projects">
            <div className="container m-auto px-4 sm:py-12">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <div className="flex flex-col sm:flex-row gap-10 mt-11">
                {/* Project 1: ConsoleSysMonitor */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img
                    src={Project1}
                    className="w-full h-auto"
                    alt="ConsoleSysMonitor"
                  />
                  <h3 className="text-2xl font-semibold mt-8">
                    ConsoleSysMonitor
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 justified-text">
                    ConsoleSysMonitor is a command-line application for
                    monitoring system processes and services. It allows you to
                    list all running processes and services and provides
                    detailed CPU and memory utilization metrics for a selected
                    process.
                  </p>
                  <div className="flex mt-12 gap-2">
                    <button
                      className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                      onClick={() =>
                        window.open(
                          "https://github.com/get2aadil/ConsoleSysMonitor",
                          "_blank"
                        )
                      }
                    >
                      Checkout GitHub
                    </button>
                  </div>
                </div>

                {/* Project 2: Enhanced Vision-Based Detection System for Urban Crosswalks */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img
                    src={Project2}
                    className="w-full h-auto"
                    alt="Enhanced Vision-Based Detection System for Urban Crosswalks"
                  />
                  <h3 className="text-2xl font-semibold mt-8">
                    Enhanced Vision-Based Detection System for Urban Crosswalks
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 justified-text">
                    This project aims to enhance pedestrian and cyclist safety
                    at urban crosswalks through the use of advanced machine
                    vision technologies. By implementing real-time detection and
                    identification, the system improves driver awareness, aids
                    traffic management systems in preventing accidents, and
                    streamlines traffic flow.
                  </p>
                  <div className="flex mt-12 gap-2">
                    <button
                      className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                      onClick={() =>
                        window.open(
                          "https://github.com/raymardi27/Crosswalk-pedestrian-detection.git",
                          "_blank"
                        )
                      }
                    >
                      Checkout GitHub
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-10 mt-11">
                {/* Project 3: Moments Capture */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img
                    src={Project3}
                    className="w-full h-auto"
                    alt="Moments Capture"
                  />
                  <h3 className="text-2xl font-semibold mt-8">
                    Moments Capture
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 justified-text">
                    Moments Capture is a mini social media application for
                    Android, designed to allow users to capture and share their
                    moments through videos. The app includes functionalities for
                    liking, commenting, following, and more.
                  </p>
                  <div className="flex mt-12 gap-2">
                    <button
                      className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                      onClick={() =>
                        window.open(
                          "https://github.com/get2aadil/moments_capture",
                          "_blank"
                        )
                      }
                    >
                      Checkout GitHub
                    </button>
                  </div>
                </div>

                {/* Project 4: Chess Master */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img
                    src={Project4}
                    className="w-full h-auto"
                    alt="Chess Master"
                  />
                  <h3 className="text-2xl font-semibold mt-8">
                    Chess Master
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 justified-text">
                    Chess Master is an online multiplayer chess game that allows players to compete against each other in real-time. The game features a robust matchmaking system and a user-friendly interface. For more details, visit the GitHub repository.
                  </p>
                  <div className="flex mt-12 gap-2">
                    <button
                      className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                      onClick={() =>
                        window.open(
                          "https://github.com/get2aadil/chess_project",
                          "_blank"
                        )
                      }
                    >
                      Checkout GitHub
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-10 mt-11">
                {/* Project 5: Voice-Activated Object Navigation Robot */}
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img
                    src={Project5}
                    className="w-full h-auto"
                    alt="Voice-Activated Object Navigation Robot"
                  />
                  <h3 className="text-2xl font-semibold mt-8">
                    Voice-Activated Object Navigation Robot
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 justified-text">
                    This project, developed as part of CSCI 585 Robotics and Machine Intelligence at California State University, Chico, focuses on building a voice-activated robot that detects and navigates toward specified objects based on voice commands. The system integrates speech recognition, natural language processing (NLP), object detection, and navigation using ROS2 on a TurtleBot3 Waffle Pi.
                  </p>
                  <div className="flex mt-12 gap-2">
                    <button
                      className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                      onClick={() =>
                        window.open(
                          "https://github.com/get2aadil/robotics",
                          "_blank"
                        )
                      }
                    >
                      Checkout GitHub
                    </button>
                    <button
                      className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/drive/folders/1-5WzHlL9R6ly-ihHBvyknELdV5FMCE2Y?usp=drive_link", // Replace with your actual Google Drive link
                          "_blank"
                        )
                      }
                    >
                      Watch Videos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container m-auto flex items-center justify-between px-4 py-6">
            <div>
              <p className="text-gray-300 text-sm">Copyright @ 2024</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/aadil-shaikh-a28a28156/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} className="w-5" alt="LinkedIn" />
              </a>
              <a
                href="mailto:get2aadilshaikh@gmail.com"
                className="text-sm py-3 px-4 border rounded-full hover:border-blue-500 hover:text-blue-500"
              >
                Email: get2aadilshaikh@gmail.com
              </a>
            </div>
          </div>
        </footer>

        {scrolling && (
          <button
            className="fixed block right-8 bottom-0 w-24"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={ArrowDown} />
          </button>
        )}
      </div>
    </body>
  );
}

export default App;
