import "./App.css";
import NavBar from "./components/NavComponent/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <NavBar />

      <section className="flex flex-col items-center justify-evenly w-dvw">
        <Home />

        <About />

        <Work />

        <Resume />

        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
