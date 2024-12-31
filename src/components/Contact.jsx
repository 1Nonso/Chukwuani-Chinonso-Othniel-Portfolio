import call_me from "../assets/call_me.svg";
import email_me from "../assets/email_me.svg";
import headerFont from "../assets/IndieFlower-Regular.ttf";
import bodyFont from "../assets/Tangerine-Bold.ttf";

const Contact = () => {
  return (
    <>
      <main
        id="Contact"
        style={{ scrollMarginTop: "80px" }}
        className="p-4 font-[headerFont] text-[#474306]"
      >
        <h1 className="text-4xl font-[bodyFont]">Let's Connect</h1>
        <div>
          <p className="text-xl">
            I'm always excited to connect with fellow developers, potential
            collaborators, and anyone interested in web development. Whether you
            have a project in mind or just want to say hello, feel free to reach
            out!
          </p>
          <ul className="flex flex-wrap justify-evenly mt-5 w-full">
            <li className="flex items-center justify-between w-[19.5rem] my-2">
              <img
                className="bg-gray-400 p-1 rounded-md"
                src={call_me}
                alt=""
              />
              <p>Email: chukwuaniOthniel967@gmail.com</p>
            </li>
            <li className="flex items-center justify-between w-[17rem] my-3">
              <img
                className="bg-gray-400 p-1 rounded-md"
                src={email_me}
                alt=""
              />
              <p>Phone Number: +234 901 354 9361</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contact;
