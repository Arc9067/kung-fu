import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { SiEthereum } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-[20px] w-full bg-secondary">
      <div className="container flex flex-col gap-4">
        <p className="text-black text-center">
          © 2023 PANDA- All Rights Reserved
        </p>
        <div className="flex gap-3 items-center justify-center mt-6 text-primary">
          <a
            href="https://t.me/KungfuPandaEth"
            className="text-4xl hover:text-black"
          >
            <TbBrandTelegram />
          </a>
          <a
            href="https://t.me/KungfuPandaEth"
            className="text-4xl hover:text-black"
          >
            <FaTwitter />
          </a>
          <a href="" className="text-4xl hover:text-black">
            <HiChartBar />
          </a>
          <a href="" className="text-4xl hover:text-black">
            <SiEthereum />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
