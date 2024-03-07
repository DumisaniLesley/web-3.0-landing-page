"use client";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Links = [
  {
    id: 1,
    url: "#products",
    name: "products",
  },
  {
    id: 2,
    url: "#solutions",
    name: "solutions",
  },
  {
    id: 3,
    url: "#customer",
    name: "customer",
  },
  {
    id: 4,
    url: "#pricing",
    name: "pricing",
  },
  {
    id: 5,
    url: "#resources",
    name: "resources",
  },
];

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflowY = "hidden";
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    document.body.style.overflowY = "visible";
  };

  return (
    <nav className="py-4 px-6 md:px-10 flex justify-between items-center lg:max-w-[1200px] mx-auto text-gray-400">
      <Link href="/">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
          WEB 3.0
        </h1>
      </Link>
      <div className="hidden md:flex">
        {Links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="px-4 uppercase font-light text-md hover:text-yellow-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div
        onClick={toggleMobileNav}
        className="text-3xl cursor-pointer md:hidden"
      >
        <HiMenuAlt3 />
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden absolute top-0 right-0 h-full w-[95%] bg-transparent backdrop-blur-lg z-10 shadow-lg transition-all ease-in duration-600 transform translate-x-0 px-4 ">
          <div className="mt-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent uppercase">
              Web 3.0
            </h1>
            <AiOutlineClose
              className="text-3xl cursor-pointer mr-8 text-white"
              onClick={closeMobileNav}
            />
          </div>
          {Links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeMobileNav} // Close mobile nav when a link is clicked
              className="block py-2 uppercase font-light text-md my-4 text-white hover:text-yellow-500"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/" className="flex items-center text-white">
            <span className="block uppercase">register now </span>
            <GoArrowUpRight className="text-2xl ml-1" />
          </Link>
          <p className="fixed bottom-2 text-center text-yellow-500 uppercase font-bold">To Get Better, You Have To Start!!</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
