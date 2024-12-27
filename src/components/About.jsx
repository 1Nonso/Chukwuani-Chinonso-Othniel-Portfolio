import htmlImage from "./../assets/html5-logo.svg";
import cssImage from "./../assets/css3-logo.svg";
import jsImage from "./../assets/javascript-logo.svg";
import reactLogo from "./../assets/react-svgrepo-com.svg";
import tailwindLogo from "./../assets/tailwind-logo.svg";

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
      description: "This is web-based technology used in adding elements on to the browser",
    },
    {
      id: 2,
      img: cssImage,
      name: "CSS (Cascading Style Sheet)",
      classification: "User Interface",
      description: "",
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
      classification: "User Experience",
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

  return (
    <>
      <main
        id="About"
        style={{ scrollMarginTop: "80px" }}
        className=" px-5 py-5 text-[#474306]"
      >
        <section className="border-2 border-[#F5EE84] p-5 rounded-lg">
          <p className="mb-5 text-xl">
            Welcome! I'm Chukwuani Chinonso Othniel, a highly motivated and
            result-oriented Front-end Web developer with an ability to translate
            creative concepts into functional and engaging web experiences. I'm
            a results-oriented with a focus on delivering high-quality Websites
            and Web-Apps that meet client needs and exceed expectations. I'm
            always eager to collaborate and contribute to successful web
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
        </section>
        <section className="mt-4 px-1 w-full">
          <p className="text-xl">Powered By</p>
          <div className="my-6">
            <p className="my-1">My Tech Stack:</p>
            <div className="techStack grid-cols-1 md:grid-cols-2 gap-8 grid-rows-2 w-full">
              {techStack.map((tech) => {
                const { id, img, name, classification } = tech;
                return (
                  <div
                    key={id}
                    className="flex flex-row items-center w-[22rem]"
                  >
                    <img src={img} alt="" className="w-[10%] mx-1" />
                    <div className="w-[90%]">
                      <p>
                        <strong>{name}</strong>
                      </p>
                      <p>{classification}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p>Other Tools:</p>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
