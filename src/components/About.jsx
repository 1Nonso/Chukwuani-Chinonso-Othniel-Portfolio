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
                <>
                  <div key={id} className="flex flex-col items-start">
                    <p className="text-4xl">{title}</p>
                    <p>{description}</p>
                  </div>
                </>
              );
            })}
          </section>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default About;
