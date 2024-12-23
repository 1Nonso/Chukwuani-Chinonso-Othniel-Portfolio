import "./App.css";
import NavBar from "./components/NavComponent/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />

      <section>
        <Home />

        <About />

        <Work />

        <Contact />
      </section>
    </>
  );
}

export default App;
