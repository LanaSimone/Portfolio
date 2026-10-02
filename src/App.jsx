import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  return (
    <>
      <ScrollIndicator />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
