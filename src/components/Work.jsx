const PreviewPhoto = ({ url }) => {
  console.log(url);

  if (!url) {
    return <div>Loading preview...</div>;
  }

  return (
    <div className="projectPreview flex justify-center w-full">
      <iframe
        src={url}
        className=" aspect-square w-[90%] md:w-[20rem] lg:w-[25rem] h-[10rem] rounded-3xl z-[-1] relative"
        style={{
          overflow: "hidden",
          transform: "scale(1.0)",
          transformOrigin: "0 0",
        }}
        title="Project Preview"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "PixelSmints | Remote",
      role: "Contract work for Protech",
      screenshotImage: "/pixelsmints-screenshot.png",
      stack: ["Next.js", "MongoDB", "Uploadthing"],
      highlights: [
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
        className="w-[90%] lg:w-[95%] text-[#474306]"
        style={{ scrollMarginTop: "80px" }}
      >
        <h1 className="text-4xl mb-6">My Projects</h1>
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
                      <a href={project.liveLink} target="_blank">
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
