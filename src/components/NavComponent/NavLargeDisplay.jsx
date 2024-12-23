import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="flex justify-between p-4 fixed w-full top-0">
          <p className="navName">Othniel</p>
          <div className="navContainer ">
            <ul className="flex justify-between space-x-7 items-center h-full">
              <li>
                <Link to="#Home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#About" smooth>
                  About
                </Link>
              </li>
              <li>
                <Link to="#Work" smooth>
                  Work
                </Link>
              </li>
              <li>
                <Link to="#Contact" smooth>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </BrowserRouter>
    </>
  );
};

export default NavBar;

{
  /* <p>Home</p>
<p>About</p>
<p>Work</p>
<p>Contact</p> */
}
