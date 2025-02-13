const PreviewPhoto = ({ url }) => {

  console.log(url)

  if (!url) {  // Handle cases where the URL isn't available yet.
    return <div>Loading preview...</div>; // Or a placeholder
  }

  return (
    <div className="projectPreview">
      <iframe
        src={url}
        className="w-full h-full aspect-square border-s-pink-950 max-w-[60rem] max-h-[60rem] rounded-3xl z-[-1] relative"
        style={{
          overflow: 'hidden',
          transform: "scale(0.25)",
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
        className="px-5"
        style={{ scrollMarginTop: "80px" }}
      >
        <h1>My Projects</h1>
        {projectData.map((project) => {
          const { name, url, id } = project;
          return (
            <div key={id} >
              <h2>{name}</h2>
              <a href={url}> Visit Preview Page</a>
              <PreviewPhoto url={url} />
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Work;
