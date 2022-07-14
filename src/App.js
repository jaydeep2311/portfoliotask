import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "../src/Components/Contact/Contact";
import Footer from "../src/Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Hero-section">
        <Hero></Hero>
      </div>
      <div className="skill-sec">
        <Skills></Skills>
      </div>
      <div>
        <Projects></Projects>
      </div>
      <div className="contact-me">
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
