import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  return (
    <div className="w-full h-[120px] flex justify-center items-center flex-col">
      <div className="w-[92%] h-full flex items-center justify-between ">
        <div className="flex gap-8 w-[45%] ">
          <nav>Home</nav>
          <nav>Pages</nav>
          <nav>Portfolio</nav>
          <nav>Blog</nav>
          <nav>Shop</nav>
        </div>
        <div className="text-[30px] font-bold w-[50%] ">
          <h1>NEXIO</h1>
        </div>
        <div className=" flex gap-5 text-[30px]  ">
          <div>
            <MdOutlineShoppingBag />
          </div>
          <div>
            <IoSearchOutline />
          </div>
          <div>
            <CgMenuGridO />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#8080806a] " />
    </div>
  );
};

export default Header;
