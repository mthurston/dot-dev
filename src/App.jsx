import React from "react";
import { Navbar, Footer } from "./components";
import "./App.scss";
import { Landing, Projects, About } from "./pages";
import ParticlesBg from "particles-bg";

export const App = () => {
  return (
    <div className="App">
      <ParticlesBg
        class="particles"
        type="thick"
        num={8}
        color="#FC766A"
        bg={false}
      />
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
