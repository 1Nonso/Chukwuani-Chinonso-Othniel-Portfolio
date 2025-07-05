const Resume = () => {
  return (
    <section className="my-10 text-[#474306] text-center">
      <p className="font-[atma] text-2xl">Click here to checkout my Resume</p>
      <p className="text-3xl">👇</p>
      <button onClick={() => window.open("/Resume.pdf", "_blank")}>
        📄
        <span className="underline italic mx-3">Download Resume</span>
        🙃
      </button>
    </section>
  );
};

export default Resume;
