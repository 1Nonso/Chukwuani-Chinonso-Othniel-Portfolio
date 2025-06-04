import htmlImage from "./../assets/Images/html5-logo.svg";
import cssImage from "./../assets/Images/css3-logo.svg";
import jsImage from "./../assets/Images/javascript-logo.svg";
import reactLogo from "./../assets/Images/react-svgrepo-com.svg";
import tailwindLogo from "./../assets/Images/tailwind-logo.svg";
import githubLogo from "./../assets/Images/github-logo.svg";
import vercelLogo from "./../assets/Images/logo-vercel-svgrepo-com.svg";
import { motion } from "framer-motion";
// import { frame } from "framer-motion";

const About = () => {
  const projectEperience = [
    {
      id: 1,
      title: "+25",
      description: "Project",
    },
    {
      id: 2,
      title: "+1",
      description: "Year Experience",
    },
  ];

  const techStack = [
    {
      id: 1,
      img: htmlImage,
      name: "HTML (HyerText Markup Language)",
      classification: "User Interface",
      description:
        "This is web-based technology used in adding elements on to the browser",
    },
    {
      id: 2,
      img: cssImage,
      name: "CSS (Cascading Style Sheet)",
      classification: "User Interface",
      description:
        "A style sheet used for styling elements in the browser that goes hand in hand with html",
    },
    {
      id: 3,
      img: jsImage,
      name: "Javascript",
      classification: "User Experience/ Interactivity",
      description: "",
    },
    {
      id: 4,
      img: reactLogo,
      name: "React",
      classification: "User Experience / Interactivity",
      description: "",
    },
    {
      id: 5,
      img: tailwindLogo,
      name: "Tailwindcss",
      classification: "User Interface",
      description: "",
    },
  ];

  const otherTools = [
    {
      id: 1,
      img: githubLogo,
      name: "Github",
      classification: "Version Control",
    },
    {
      id: 2,
      img: vercelLogo,
      name: "Vercel",
      classification: "Hosting Platform",
    },
  ];

  return (
    <>
      <main id="About" style={{ scrollMarginTop: "80px" }} className=" px-5 py-5 text-[#474306]">
        <motion.section initial={{ opacity: 0 }} transition={{ duration: 2 }} animate={{ x: [-500, 0] }} whileInView={{
          opacity: 1
        }} className="border-2 border-[#F5EE84] p-5 rounded-lg">
          <p className="mb-5 text-xl">
            Welcome! I`m Chukwuani Chinonso Othniel, a Front-end Web Developer
            who delves in transforming creative concepts into functional and
            engaging web experiences. With a keen eye for detail and a focus on
            quality, I specialize in building responsive websites and web
            applications that not only meet client requirements but exceed their
            expectations. My expertise in modern web technologies over the years
            have allowed me to create seamless user experiences while
            maintaining clean, efficient code. I`m always eager to collaborate
            on innovative projects and contribute my skills to impactful web
            development initiatives.
          </p>
          <section className="flex justify-between w-64">
            {projectEperience.map((project) => {
              const { id, title, description } = project;
              return (
                <div key={id} className="flex flex-col items-start">
                  <p className="text-4xl">{title}</p>
                  <p>{description}</p>
                </div>
              );
            })}
          </section>
        </motion.section>
        <section className="mt-4 px-1 w-full">
          <p className="text-xl mt-11">Powered By</p>
          <p className="text-center my-3 font-[atma]">
            Discover the powerful tools and technologies i use to create
            exceptional, high-performing websites & applications.
          </p>
          <div className="my-6">
            <p className="mb-5 font-[atma] text-center">
              I am proficient in the following technologies & tools: HTML, CSS,
              JavaScript, the React library, and Tailwind library, Github, and
              Vercel. With the help of these technologies, i am able to write
              high-quality, maintainable code, whiles always striving to improve
              my skills in areas such as performance optimization,
              accessibility, and cross-browser compatibility.
            </p>
            <div className="techStack grid-cols-1 md:grid-cols-2 gap-8 grid-rows-2 w-full">
              {techStack.map((tech) => {
                const { id, img, name, classification } = tech;
                return (
                  <div key={id} className="flex flex-row items-center w-[22rem]">
                    <img src={img} alt="" className="w-[10%] mr-5" />
                    <div className="w-[90%]">
                      <p>
                        <strong>{name}</strong>
                      </p>
                      <p className="class">{classification}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="mb-3">
              <u>Other Tools:</u>
            </p>
            <div className="techStack grid-cols-1 md:grid-cols-2 gap-8 grid-rows-2 md:grid-rows-1 w-full">
              {otherTools.map((tool) => {
                const { id, img, name, classification } = tool;
                return (
                  <div key={id} className="flex flex-row items-center w-[22rem]">
                    <img src={img} alt="" className="w-[10%] mr-5" />
                    <div className="w-[90%]">
                      <p>
                        <strong>{name}</strong>
                      </p>
                      <p className="class">{classification}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
