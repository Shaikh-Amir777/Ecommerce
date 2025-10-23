import React from "react";
import { ShoppingBag, Heart, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top black bar */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between">
        <span>WELCOME TO METRO</span>
        <span>
          Enjoy An Extra 5% Off On Prepaid Orders.{" "}
          <a href="#" className="underline">
            Store Locator
          </a>
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="d-flex align-items-center justify-between px-10 py-4">
        <h1 className="text-2xl font-bold text-red-600 tracking-wide">METRO</h1>

        <ul className="d-flex align-items-center gap-8 text-gray-800 font-medium" style={{gap:"30px"}}>
          <li className="cursor-pointer hover:text-red-600">MEN</li>
          <li className="cursor-pointer hover:text-red-600">WOMEN</li>
          <li className="cursor-pointer hover:text-red-600">KIDS</li>
          <li className="cursor-pointer hover:text-red-600">ACCESSORIES</li>
          <li className="cursor-pointer hover:text-red-600">BAGS</li>
          <li className="cursor-pointer hover:text-red-600">BRANDS</li>
          <li className="cursor-pointer hover:text-red-600 text-red-600">SALE</li>
          <li className="cursor-pointer hover:text-red-600">NEW</li>
          <li className="cursor-pointer hover:text-red-600">CROSSOVER</li>
        </ul>

        <div className="flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full px-4 py-1 outline-none"
            />
            <Search className="absolute right-2 top-1.5 text-gray-600" size={18} />
          </div>
          <Heart className="text-gray-700 cursor-pointer" />
          <div className="relative">
            <ShoppingBag className="text-gray-700 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
