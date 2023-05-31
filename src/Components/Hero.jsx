import React from "react";
import Logo from "../assets/logo.png";

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
          <div className="flex flex-col md:flex-row gap-4 justify-center text-center items-center md:justify-start font-primary">
            <a href="" className="bg-secondary text-black py-4 px-6">
              telegram
            </a>
            <a
              href=""
              className="bg-black text-white py-4 px-6 transition hover:shadow-inner"
            >
              twitter
            </a>{" "}
            <a href="" className="">
              dextool
            </a>{" "}
            <a
              href=""
              className="bg-primary text-white py-4 px-6 transition hover:shadow-inner"
            >
              etherscan
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
