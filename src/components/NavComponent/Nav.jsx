import NavBarLarge from "./NavLargeDisplay";
import NavBarSmall from "./NavSmallDisplay";
import { useMedia } from "react-use";

const NavBar = () => {
  const isSmallScreen = useMedia("(max-width:768px )");

  return (
    <>
      {isSmallScreen ? null : <NavBarLarge />}

      {isSmallScreen ? <NavBarSmall /> : null}
    </>
  );
};

export default NavBar;
