import plusSigns from "./../assets/Image-Design/Design-1.svg";
import profilePhoto from "./../assets/Image-Design/Profile-Photo.png";

const Home = () => {
  return (
    <>
      <main
        id="Home"
        style={{ scrollMarginTop: "80px" }}
        className="flex flex-col justify-between items-center lg:flex-col px-7 pt-8"
      >
        <p className=" text-2xl md:text-5xl mb-5 welcome">Welcome</p>
        <section className="flex flex-col-reverse justify-between items-center lg:flex-row px-7 pt-8 w-full">
          <div>
            <p className="text-1xl lg:text-2xl">
              Hello, I'm
              <strong> Chukwuani Chinonso Othniel,</strong>
            </p>
            <h1 className="text-3xl lg:text-8xl">
              Front-end <br /> Web Developer
            </h1>
            <p className=" text-1xl lg:text-2xl mt-1 lg:mt-5">
              +1 Year Experience. Based in Enugu City, Nigeria.
            </p>
          </div>
          <div className="mb-4 sm:mb-0 w-[80%] md:w-[50%] lg:w-96">
            <img
              src={profilePhoto}
              alt="Image of Myself"
              className="rounded-full -z-50 relative left-0 lg:right-6"
            />
            <img
              src={plusSigns}
              alt="plus Signs"
              className="-z-50 relative bottom-6 right-9 lg:right-9"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
