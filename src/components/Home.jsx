import plusSigns from "./../assets/Image-Design/Design-1.svg";
import profilePhoto from "./../assets/Image-Design/Profile-Photo.png";

const Home = () => {
  return (
    <>
      <main
        id="Home"
        style={{ scrollMarginTop: "80px" }}
        className="flex flex-col-reverse justify-between items-center lg:flex-row px-7 pt-8"
      >
        <section>
          <p className="text-1xl lg:text-2xl">
            Hello, I am
            <strong> Chukwuani Chinonso Othniel</strong>
          </p>
          <h1 className="text-3xl lg:text-8xl">
            Front-end <br /> Web Developer
          </h1>
          <p className=" text-1xl lg:text-2xl mt-1 lg:mt-5">
            +1 Year Experience. Based in Enugu City, Nigeria.
          </p>
        </section>
        <section className=" w-[80%] lg:w-96">
          <img
            src={profilePhoto}
            alt=""
            className="rounded-full relative left-0 lg:right-6"
          />
          <img
            src={plusSigns}
            alt=""
            className="relative bottom-6 right-9 lg:right-9"
          />
        </section>
      </main>
    </>
  );
};

export default Home;
