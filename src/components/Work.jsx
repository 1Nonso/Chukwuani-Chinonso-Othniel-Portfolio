import { useEffect, useRef } from "react";
import iframeResizer from "iframe-resizer";

const PreviewPhoto = (url) => {
  const iframeRef = useRef(null);
  useEffect(() => {
    if (iframeRef.current) {
      iframeResizer({}, iframeRef.current);
    }
  }, []);
  return (
    <div className="projectPreview">
      <iframe
        src={url}
        ref={iframeRef}
        style={{ width: "10rem", height: "10rem" }}
        title="Project Preview"
      />
    </div>
  );
};

const Work = () => {
  const projectData = [
    {
      name: "Calculator App",
      url: "https://calculator-app-beta-ebon.vercel.app/",
    },
  ];
  return (
    <>
      <main
        id="Work"
        className=""
        style={{ scrollMarginTop: "80px" }}
      >
        <h1>My Projects</h1>
        {projectData.map((project) => {
          const { name, url } = project;
          <div>
            <h2>{name}</h2>
            <p>{url}</p>
           /* <PreviewPhoto url={url} /> */
          </div>;
        })}
      </main>
    </>
  );
};

export default Work;
