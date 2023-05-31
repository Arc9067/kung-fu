import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import How from "./Components/How";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: "ease-out", // Animation easing
    });

    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <div className="min-h-screen w-full bg-primary font-secondary text-white relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Token />
      <How />
      <Footer />
    </div>
  );
};

export default App;
