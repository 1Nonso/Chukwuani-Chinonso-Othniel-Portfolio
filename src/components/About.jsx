import htmlImage from "./../assets/Images/html5-logo.svg";
import cssImage from "./../assets/Images/css3-logo.svg";
import jsImage from "./../assets/Images/javascript-logo.svg";
import reactLogo from "./../assets/Images/react-svgrepo-com.svg";
import tailwindLogo from "./../assets/Images/tailwind-logo.svg";
import githubLogo from "./../assets/Images/github-logo.svg";
import vercelLogo from "./../assets/Images/logo-vercel-svgrepo-com.svg";
import mongoDBlogo from "./../assets/Images/mongoDB.png";
import uploadthinglogo from "./../assets/Images/uploadthing.png";
import { motion } from "framer-motion";
import nextjsLogo from "./../assets/Images/nextjs-icon.svg";

const About = () => {
  const projectEperience = [
    {
      id: 1,
      title: "Client-Focused",
      description: "Developer",
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
      classification: "JavaScript Library",
      description: "",
    },
    {
      id: 5,
      img: tailwindLogo,
      name: "Tailwindcss",
      classification: "User Interface",
      description: "",
    },
    {
      id: 6,
      img: nextjsLogo,
      name: "NextJS",
      classification: "React Framework",
      description:
        "A react based framework that allows client side and server side to rendered on one code base",
    },
    {
      id: 7,
      img: mongoDBlogo,
      name: "MongoDB",
      classification: "Database",
      description:
        "A flexible NoSQL database that stores data in JSON-like documents, ideal for modern applications requiring scalability and speed.",
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
    {
      id: 3,
      img: uploadthinglogo,
      name: "UploadThing",
      classification: "File Upload Tool",
    },
  ];

  return (
    <>
      <main
        id="About"
        style={{ scrollMarginTop: "80px" }}
        className="w-[90%] lg:w-[95%] text-[#474306]"
      >
        <motion.section
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          animate={{ x: [-500, 0] }}
          whileInView={{
            opacity: 1,
          }}
          className="border-2 border-[#F5EE84] p-5 rounded-lg"
        >
          <p className="mb-5 text-xl">
            Hi, I'm Othniel - a Front-end Web Developer passionate about
            transforming creative ideas into exceptional web experiences. I
            build responsive websites and applications that exceed expectations.
            Ready to collaborate on your next project.
          </p>
          <p>
            Client-Focused Developer
            <br />
            Modern Web Solutions
          </p>
        </motion.section>
        <section className="mt-4 px-1 w-full">
          <p className="text-center text-xl my-3">
            Discover the powerful tools and technologies i use to create
            exceptional, high-performing websites & applications.
          </p>
          <div className="my-6">
            <p className="mb-5 font-[atma] text-center">
              I'm proficient in modern web technologies including HTML, CSS,
              JavaScript, React, Next.js, and more. I focus on writing clean,
              maintainable code while continuously improving my skills in
              performance optimization, accessibility, and cross-browser
              compatibility.
            </p>
            <div className="techStack grid-cols-1 md:grid-cols-2 gap-8 grid-rows-2 w-full">
              {techStack.map((tech) => {
                const { id, img, name, classification } = tech;
                return (
                  <div
                    key={id}
                    className="flex flex-row items-center w-[22rem]"
                  >
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
                  <div
                    key={id}
                    className="flex flex-row items-center w-[22rem]"
                  >
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
