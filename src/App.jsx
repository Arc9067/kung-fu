import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import How from "./Components/How";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-primary font-secondary text-white relative">
      <Header />
      <Hero />
      <About />
      <Token />
      <How />
    </div>
  );
};

export default App;
