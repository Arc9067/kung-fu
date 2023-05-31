import React from "react";

const Header = () => {
  return (
    <header className="w-full py-3 bg-black absolute top-0">
      <nav className="container flex justify-between items-center">
        <a href="" className="text-3xl hover:animate-bounce">
          kunfu <span className="text-secondary">panda</span>
        </a>
        <div className="items-center hidden md:flex gap-5">
          <a href="" className="text-3xl text-primary hover:text-white">
            telegram
          </a>
          <a href="" className="text-3xl text-secondary hover:text-white">
            twitter
          </a>
          <a href="" className="text-3xl text-primary hover:text-white">
            medium
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
