const PreviewPhoto = ({ url }) => {

  console.log(url)

  if (!url) {  // Handle cases where the URL isn't available yet.
    return <div>Loading preview...</div>; // Or a placeholder
  }

  return (
    <div className="projectPreview flex justify-center">
      <iframe
        src={url}
        className=" aspect-square w-[18rem] md:w-[20rem] lg:w-[25rem] h-[30rem] rounded-3xl z-[-1] relative"
        style={{
          overflow: 'hidden',
          transform: "scale(1.0)",
          transformOrigin: "0 0"
        }}
        title="Project Preview"
        sandbox="allow-scripts allow-same-origin" // Important for security
        scrolling="no"
      />
    </div>
  );
};

const Work = () => {
  const projectData = [
    {
      name: "Calculator App",
      url: "https://calculator-app-beta-ebon.vercel.app/",
      id: 1
    },
  ];
  return (
    <>
      <main
        id="Work"
        className="px-5 py-14 text-[#474306]"
        style={{ scrollMarginTop: "80px" }}
      >
        <h1 className="text-4xl mb-8">My Projects</h1>
        <p className="mb-5">
          Here are some projects showcasing my skills and experience in web
          development, They demonstrate my ability to solve complex problems,
          create user-friendly interfaces, delivering results amongst others.
        </p>
        <section className="grid grid-col-1 md:grid-cols-2 gap-6">
          {projectData.map((project) => {
            const { name, url, id } = project;
            return (
              <div key={id} className="projectBorder lg:w-[30rem] rounded-3xl pt-4">
                <PreviewPhoto url={url} />
                <div className="flex flex-col ml-6 my-4">
                  <h2 className="text-2xl">{name}</h2>
                  <a href={url} className="url font-[atma]"> Visit Preview Page</a>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Work;
