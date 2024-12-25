import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const NavBarSmallDisplay = () => {
  const [menu, setMenu] = useState(true);

  const dropDown = () => {
    setMenu(() => !menu);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full shadow-md">
        <section className="flex justify-between px-4 py-2">
          <p className="navName">Othniel</p>
          <div className="flex items-center">
            <button type="button" onClick={dropDown}>
              Menu
            </button>
          </div>
        </section>
        {menu ? null : <DropDownMenu />}
      </nav>
    </>
  );
};

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
