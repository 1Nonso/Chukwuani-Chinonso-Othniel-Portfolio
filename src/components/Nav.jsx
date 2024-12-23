const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between p-4">
        <p className="navName">Othniel</p>
        <div className="navContainer flex justify-between space-x-7 items-center">
          <p>Home</p>
          <p>About</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
