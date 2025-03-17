import plusSigns from "./../assets/Design/Design-1.svg";
import profilePhoto from "./../assets/Images/Also_a_picture_of_me.jpg";

const Home = () => {
  return (
    <>
      <main
        id="Home"
        style={{ scrollMarginTop: "80px" }}
        className="flex flex-col justify-between items-center px-7 pt-3"
      >
        <p className="text-5xl md:text-6xl welcome w-20s">Welcome</p>
        <section className="flex flex-col-reverse justify-between items-center lg:flex-row px-7 pt-8 w-full">
          <div>
            <p className="text-1xl lg:text-2xl">
              Hello, I am
              <strong> Othniel,</strong>
            </p>
            <h1 className="text-3xl lg:text-7xl">Front-end Web Developer</h1>
            <p className=" text-1xl lg:text-2xl mt-1 lg:mt-5">
              +1 Year Experience.
            </p>
          </div>
          <div className="mb-7 sm:mb-0 w-[90%] md:w-[50%] lg:w-96">
            <img
              src={profilePhoto}
              alt="Image of Myself"
              className="profilePhoto h-[19rem] w-[15rem] mb-3 -z-50 relative left-6 sm:left-14 lg:right-6"
            />
            <img
              src={plusSigns}
              alt="plus Signs"
              className="-z-50 relative bottom-6 sm:right-0  right-4 lg:right-9"
            />
          </div>
        </section>
        <p className="mt-10 mb-7 text-2xl welcome">
          Web Experiences, Thoughtfully Coded
        </p>
      </main>
    </>
  );
};

export default Home;
