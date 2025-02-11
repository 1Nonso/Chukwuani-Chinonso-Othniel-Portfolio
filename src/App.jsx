import "./App.css";
import NavBar from "./components/NavComponent/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <section>
        <Home />

        <About />

        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
