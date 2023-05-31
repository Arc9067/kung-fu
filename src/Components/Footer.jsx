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
          <a href="" className="text-4xl">
            <TbBrandTelegram />
          </a>
          <a href="" className="text-4xl">
            <FaTwitter />
          </a>
          <a href="" className="text-4xl">
            <HiChartBar />
          </a>
          <a href="" className="text-4xl">
            <SiEthereum />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
