import React from "react";
import Eth from "../assets/ETH.png";
import Uniswap from "../assets/1026px-Uniswap_Logo.svg_-1024x1022.png";
import Meta from "../assets//meta-1024x1024.png";
import main from "../assets/logo.png";

const How = () => {
  return (
    <section className="w-full bg-primary py-[50px]" id="ape">
      <div className="container">
        <h1
          className="text-5xl md:text-7xl text-center shad2"
          data-aos="fade-right"
        >
          how to ape{" "}
        </h1>

        <div className="flex flex-wrap gap-10 w-full justify-between items-center mt-10">
          <div
            className="min-h-[150px] gap-5 p-3 w-full lg:w-5/12 bg-primary/50 rounded-xl flex justify-between items-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img src={Meta} className="w-[3rem]" alt="" />
            <div className="w-full ">
              <h1 className="text-3xl">CREATE A METAMASK WALLET</h1>
              <p className="font-Sunday text-gray-300 leading-relaxed text-xl">
                Create a MetaMask Wallet using either a desktop computer or an
                iOS/Android mobile device.
              </p>
            </div>
          </div>
          <div
            className="min-h-[150px] gap-5 p-3 w-full lg:w-5/12 bg-primary/50 rounded-xl flex justify-between items-center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <img src={Eth} className="w-[3rem]" alt="" />
            <div className="w-full ">
              <h1 className="text-3xl">SEND ETH TO YOUR WALLET</h1>
              <p className="font-Sunday text-gray-300 leading-relaxed text-xl">
                ransfer ETH to your MetaMask or Trust wallet from exchanges like
                Binance etc..
              </p>
            </div>
          </div>
          <div
            className="min-h-[150px] gap-5 p-3 w-full lg:w-5/12 bg-primary/50 rounded-xl flex justify-between items-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img src={Meta} className="w-[3rem]" alt="" />
            <div className="w-full ">
              <h1 className="text-3xl">CONNECT YOUR WALLET TO UNISWAP</h1>
              <p className="font-Sunday text-gray-300 leading-relaxed text-xl">
                Open Uniswap or any other trusted Dex and connect your wallet.
              </p>
            </div>
          </div>
          <div
            className="min-h-[150px] gap-5 p-3 w-full lg:w-5/12 bg-primary/50 rounded-xl flex justify-between items-center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <img src={main} className="w-[3rem]" alt="" />
            <div className="w-full ">
              <h1 className="text-3xl">excahange</h1>
              <p className="font-Sunday text-gray-300 leading-relaxed text-xl">
                You can start swapping as soon as you have ETH available. Press
                ‘Select a Token’ and enter the $PANDA contract.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
