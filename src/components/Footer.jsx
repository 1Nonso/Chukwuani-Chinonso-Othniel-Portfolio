import githubLogo from "./../assets/Images/github-logo.svg";
import upworkLogo from "./../assets/Images/upwork-svgrepo-com.svg";
import twitterLogo from "./../assets/Images/twitter-logo.jpg";
import curlyFont from "./../assets/Fonts/DancingScript-VariableFont_wght.ttf";

const Footer = () => {
  return (
    <>
      <main className="w-full bg-[#fbf8cc] h-24 lg:h-12 flex flex-col lg:flex-row justify-between items-center footer px-4">
        <p className="text-[#061280] text-2xl" style={{ fontFamily: curlyFont }}>
          Web Experiences, Thoughtfully Coded
        </p>
        <section className="flex items-end">
          <ul className="flex flex-row justify-evenly items-center w-[20rem]">
            <li>
              <a href="https://github.com/1Nonso">
                <img src={githubLogo} alt="" className="h-8" />
              </a>
            </li>
            <li>
              <a href="https://www.upwork.com/nx/find-work/best-matches">
                <img src={upworkLogo} alt="" className="h-20" />
              </a>
            </li>
            <li>
              <a href="https://x.com/COthniel45304">
                <img src={twitterLogo} alt="" className="h-8 rounded-2xl" />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Footer;
