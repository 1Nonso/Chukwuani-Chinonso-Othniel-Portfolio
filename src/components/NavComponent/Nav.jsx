import NavBarLarge from "./NavLargeDisplay";
import NavBarSmall from "./NavSmallDisplay";
import { useMedia } from "react-use";

const NavBar = () => {
  const isSmallScreen = useMedia("(max-width:1024px )");

  return (
    <>
      {isSmallScreen ? null : <NavBarLarge />}

      <NavBarSmall />
    </>
  );
};

export default NavBar;
