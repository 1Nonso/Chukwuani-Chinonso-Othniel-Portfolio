import pixelsmintsPreview from "./../assets/Images/pixelsmints-screenshot.png";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "PixelSmints | Remote",
      role: "Frontend Developer - Protech | Contract",
      screenshotImage: pixelsmintsPreview,
      stack: ["Next.js", "MongoDB", "Uploadthing"],
      highlights: [
        "A comprehensive NFT marketplace platform that enables users to mint, buy, sell, and trade digital assets.",
        "Developed responsive frontend architecture",
        "Implemented user dashboard and profile setup",
        "Enabled NFT creation and image uploads via Uploadthing",
        "Created admin management system for approvals and rejection",
        "Created admin management system for overall users",
        "Handled role-based access control and permissions",
      ],
      liveLink: "https://pixelsmints.fyi/",
    },
  ];
  return (
    <>
      <div
        id="Work"
        className="w-[90%] lg:w-[95%] mt-10 text-[#474306]"
        style={{ scrollMarginTop: "80px" }}
      >
        <h1 className="text-4xl mb-6">Work Experience</h1>
        <p className="mb-5">
          Here are some projects showcasing my skills and experience in web
          development, They demonstrate my ability to solve complex problems,
          create user-friendly interfaces, delivering results amongst others.
        </p>
        <section className="grid grid-col-1 md:grid-cols-2 gap-6 w-full">
          {projects.map((project) => {
            const {
              id,
              title,
              role,
              screenshotImage,
              stack,
              highlights,
              liveLink,
            } = project;
            return (
              <>
                <div
                  key={id}
                  className="projectBorder p-3 rounded-lg flex flex-col items-start w-[90%]"
                >
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="italic">{role}</p>
                  <img
                    src={screenshotImage}
                    alt="screenshot of pixelsmints"
                    className="w-full rounded-md"
                  />
                  <p className="text-sm mt-2">Stack: {stack.join(", ")}</p>
                  <ul className="list-disc pl-5 mt-2">
                    {highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex gap-4">
                    {liveLink && (
                      <a
                        href={project.liveLink}
                        className="underline italic"
                        target="_blank"
                      >
                        Live Link
                      </a>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Work;
