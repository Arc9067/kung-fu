import React from "react";
import Logo from "../assets/logo.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";

const Hero = () => {
  return (
    <section className="pt-[150px] w-full">
      <div className="container grid lg:grid-cols-2 gap-y-10 justify-between items-center">
        <article className="flex flex-col gap-8 text-center lg:text-start">
          <h1 className="text-5xl md:text-7xl font-primary  text-secondary title animate-bounce">
            Kung Fu Panda
          </h1>
          <p className="text-3xl">
            Kung Fu Panda Coin: Unleashing Meme-tastic Awesomeness Abstract
          </p>
          <div className="flex flex-wrap flex-col md:flex-row gap-4 justify-center text-center items-center lg:justify-start font-primary">
            <a
              href=""
              className="bg-secondary flex items-center gap-3 text-black py-4 px-6"
            >
              <img src={Logo3} className="w-[2rem]" alt="" /> telegram
            </a>
            <a
              href=""
              className="bg-black text-white flex items-center gap-3 py-4 px-6 transition hover:shadow-inner"
            >
              <img src={Logo3} className="w-[2rem]" alt="" /> twitter
            </a>{" "}
            <a href="" className="flex items-center gap-3">
              <img src={Logo4} className="w-[2rem]" alt="" /> dextool
            </a>{" "}
            <a
              href=""
              className="bg-primary text-white flex items-center gap-3 py-4 px-6 transition hover:shadow-inner"
            >
              <img src={Logo3} className="w-[2rem]" alt="" /> etherscan
            </a>
          </div>
        </article>
        <article>
          <img src={Logo} alt="" className="md:mx-auto" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
