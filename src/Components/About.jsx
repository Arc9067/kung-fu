import React, { useEffect, useRef } from "react";
import logo2 from "../assets/logo2.png";
import Typed from "typed.js";

const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["about"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 400,
      backSpeed: 300,
      backDelay: 400,
      showCursor: false,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="py-[50px] w-full bg-secondary">
      <div className="container">
        <h1 className="text-5xl md:text-7xl text-center shad" ref={el}>
          about{" "}
        </h1>
        <div className="grid rounded-2xl border-2 border-primary shadow-lg shadow-primary mt-10  bg-black flex-col justify-center items-center lg:grid-cols-2 lg-[700px] p-5">
          <div className="font-Sunday overflow-hidden">
            <p className="text-gray-300 text-2xl" data-aos="fade-down">
              Welcome to the world of Kung Fu Panda Coin, where memes meet
              martial arts in a frenzy of fun and excitement. This whitepaper
              outlines our vision, tokenomics, and the upcoming Kung Fu Panda
              game, designed to bring laughter, entertainment, and a dash of
              silliness to the cryptocurrency space. So, grab your virtual
              chopsticks and get ready for a meme-tacular adventure!
            </p>
            <br />
            <br />
            <p className="text-gray-300 text-2xl" data-aos="fade-right">
              Prepare to enter the realm of Kung Fu Panda Coin, a meme token
              that celebrates the epic success of everyone's favorite martial
              arts panda. We aim to create an ecosystem where laughter and
              community thrive, all while embracing the hilarity and charm of
              Kung Fu Panda.
            </p>
          </div>
          <img src={logo2} alt="" className="lg:ml-auto" data-aos="zoom-in" />
        </div>
      </div>
    </section>
  );
};

export default About;
