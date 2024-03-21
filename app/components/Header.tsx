import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="bg-purple-400 flex align-center p-5 text-xl tracking-wider ">
        <Image width={24} height={16} src="/icons/burger.png" alt="" />
        <h1 className="text-white font-semibold m-auto">Website todo</h1>
      </nav>
    </header>
  );
};

export default Header;
