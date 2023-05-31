import React from "react";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";

const Token = () => {
  return (
    <section className="py-[50px] w-full bg-black">
      <div className="container">
        <h1 className="text-5xl md:text-7xl text-center shad2">tokenomics </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-20 mt-16 gap-y-10">
          <div className="h-[400px]  rounded-lg bg-primary/60 flex relative flex-col justify-between">
            <div className="">
              <img src={Logo3} alt="" />
            </div>
            <footer className="h-2/5 w-full bg-secondary rounded-b flex justify-center items-center">
              <h1 className=" text-center text-3xl font-primary text-primary">
                1M Supply
              </h1>
            </footer>
          </div>
          <div className="h-[400px]  rounded-lg bg-primary/60 flex relative flex-col justify-between">
            <div className="">
              <img src={Logo4} alt="" />
            </div>
            <footer className="h-2/5 w-full rounded-b flex justify-center items-center">
              <h1 className=" text-center text-3xl font-primary text-white">
                0% tax
              </h1>
            </footer>
          </div>{" "}
          <div className="h-[400px]  rounded-lg bg-black border ring-1 ring-primary flex relative flex-col justify-between">
            <div className="">
              <img src={Logo3} alt="" />
            </div>
            <footer className="h-2/5 w-full rounded-b flex justify-center items-center">
              <h1 className=" text-center text-3xl font-primary text-primary">
                ownership renounced
              </h1>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
