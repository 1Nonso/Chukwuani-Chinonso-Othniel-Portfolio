import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { Transition } from "react-transition-group";
import arrowDown from "./../../assets/arrow_drop_down_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

const NavBarSmallDisplay = ({
  animationDuration = "300ms",
  animationEasing = "ease-in-out",
}) => {
  const [menu, setMenu] = useState(true);

  const dropDown = () => {
    setMenu(() => !menu);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full shadow-md">
        <section className="flex justify-between px-4 py-2">
          <p className="navName">Othniel</p>
          <div className="flex">
            <button
              className="flex flex-row items-center"
              type="button"
              onClick={dropDown}
            >
              <p>Menu</p>
              <img
                src={arrowDown}
                alt="arrow down"
                style={{
                  transform: menu ? "rotate(0deg)" : "rotate(180deg)",
                  height: "2rem",
                  transition: `transform ${animationDuration} ${animationEasing}`,
                }}
              />
            </button>
          </div>
        </section>
        {menu ? null : <DropDownMenu />}
        {/* <Transition
          show={!menu}
          enter="transition duration-300 ease-out transform"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-300 ease-in transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <DropDownMenu />
        </Transition> */}
      </nav>
    </>
  );
};

{
}
const DropDownMenu = () => {
  return (
    <>
      <BrowserRouter>
        <section className="px-4 py-2">
          <ul className="flex justify-between space-x-7 items-center h-full navContainer">
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
        </section>
      </BrowserRouter>
    </>
  );
};

export default NavBarSmallDisplay;
