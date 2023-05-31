import React from "react";
import logo2 from "../assets/logo2.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-secondary">
      <div className="container">
        <h1 className="text-5xl md:text-7xl text-center shad">about </h1>
        <div className="grid rounded-2xl border-2 border-primary shadow-lg shadow-primary mt-10  bg-black flex-col justify-center items-center lg:grid-cols-2 lg-[700px] p-5">
          <div className="font-Sunday">
            <p className="text-gray-300 text-2xl">
              Welcome to the world of Kung Fu Panda Coin, where memes meet
              martial arts in a frenzy of fun and excitement. This whitepaper
              outlines our vision, tokenomics, and the upcoming Kung Fu Panda
              game, designed to bring laughter, entertainment, and a dash of
              silliness to the cryptocurrency space. So, grab your virtual
              chopsticks and get ready for a meme-tacular adventure!
            </p>
            <br />
            <br />
            <p className="text-gray-300 text-2xl">
              Prepare to enter the realm of Kung Fu Panda Coin, a meme token
              that celebrates the epic success of everyone's favorite martial
              arts panda. We aim to create an ecosystem where laughter and
              community thrive, all while embracing the hilarity and charm of
              Kung Fu Panda.
            </p>
          </div>
          <img src={logo2} alt="" className="lg:ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
