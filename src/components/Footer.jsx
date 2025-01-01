import githubLogo from "./../assets/Images/github-logo.svg";
import upworkLogo from "./../assets/Images/upwork-svgrepo-com.svg";
import twitterLogo from "./../assets/Images/twitter-logo.jpg";

const Footer = () => {
  return (
    <>
      <main className="bg-red-700 h-12">
        <p></p>
        <section>
          <ul>
            <li>
              <a href="https://github.com/1Nonso">
                <img src={githubLogo} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.upwork.com/nx/find-work/best-matches">
                <img src={upworkLogo} alt="" />
              </a>
            </li>
            <li>
              <a href="https://x.com/COthniel45304">
                <img src={twitterLogo} alt="" />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Footer;
