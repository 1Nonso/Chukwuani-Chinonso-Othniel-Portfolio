import call_me from "../assets/Images/call_me.svg";
import email_me from "../assets/Images/email_me.svg";


const Contact = () => {
  return (
    <>
      <main
        id="Contact"
        style={{ scrollMarginTop: "80px" }}
        className="p-4 text-[#474306] font-[atma]"
      >
        <h1 className="text-3xl font-[poppinsMedium] mb-2">Let's Connect</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <p className="text-xl lg:w-[60%]">
            I'm always excited to connect with fellow developers, potential
            collaborators, and anyone interested in web development. Whether you
            have a project in mind or just want to say hello, feel free to reach
            out!
          </p>
          <ul className="flex flex-col justify-evenly lg:ml-6 mt-5 lg:w-[40%]">
            <li className="flex items-center justify-between w-[19.5rem] my-3">
              <img
                className="bg-gray-400 p-1 rounded-md"
                src={call_me}
                alt=""
              />
              <p>Email: chukwuaniothniel967@gmail.com</p>
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
