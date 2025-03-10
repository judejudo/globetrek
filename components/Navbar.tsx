"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between m-2 md:m-3 lg:m-5 mx-4 md:mx-8 lg:mx-12 xl:mx-48 items-center p-2 font-medium text-sm bg-white md:rounded-full relative">
      {/* Logo */}
      <div className="flex items-center space-x-2 py-2">
        <Link href="/">
          <Image src="/GlobeTrek.png" alt="GlobeTrek Logo" width={50} height={50} />
        </Link>
        <span className="text-2xl font-semibold">GlobeTrek</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute right-4 top-4">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <RiCloseLine className="w-6 h-6" />
          ) : (
            <RiMenu3Line className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Navigation - Mobile & Desktop */}
      <nav
        aria-label="Main Navigation"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full md:w-auto">
          <li className="flex items-center justify-between border-b md:border-b-0 pb-2 md:pb-0">
            <Link href="/" className="hover:text-blue-500">HOME</Link>
            <MdKeyboardArrowDown className="ml-1" />
          </li>
          <li className="flex items-center justify-between border-b md:border-b-0 pb-2 md:pb-0">
            <Link href="/about" className="hover:text-blue-500">ABOUT US</Link>
            <MdKeyboardArrowDown className="ml-1" />
          </li>
          <li className="flex items-center justify-between border-b md:border-b-0 pb-2 md:pb-0">
            <Link href="/services" className="hover:text-blue-500">SERVICES</Link>
            <MdKeyboardArrowDown className="ml-1" />
          </li>
          <li className="flex items-center justify-between border-b md:border-b-0 pb-2 md:pb-0">
            <Link href="/projects" className="hover:text-blue-500">PROJECTS</Link>
            <MdKeyboardArrowDown className="ml-1" />
          </li>
          <li className="flex items-center justify-between border-b md:border-b-0 pb-2 md:pb-0">
            <Link href="/blog" className="hover:text-blue-500">BLOG</Link>
            <MdKeyboardArrowDown className="ml-1" />
          </li>
          <li className="flex items-center justify-between pb-2 md:pb-0">
            <Link href="/contact" className="hover:text-blue-500">CONTACT</Link>
            <MdKeyboardArrowDown className="ml-1" />
          </li>
        </ul>
      </nav>

      {/* CTA Button */}
      <div className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex bg-[#83CD20] rounded-full text-white p-3 md:p-4 items-center space-x-2 mt-4 md:mt-0 justify-center`}>
        <button>
          Get An Appointment
        </button>
        <HiOutlineArrowRight />
      </div>
    </header>
  );
};

export default Navbar;