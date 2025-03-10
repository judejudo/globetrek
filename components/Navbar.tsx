"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" }
  ];

  return (
    <header 
      className={`flex flex-col md:flex-row rounded-md justify-between m-2 md:m-3 lg:m-5 mx-4 md:mx-8 lg:mx-12 xl:mx-48  items-center p-2 font-medium text-sm bg-white md:rounded-full relative ${
        scrolled ? "shadow-md" : ""
      } transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 py-2">
        <Link href="/">
          <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
            <Image src="/GlobeTrek.png" alt="GlobeTrek Logo" width={50} height={50} />
          </div>
        </Link>
        <span className="text-2xl font-semibold">GlobeTrek</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute right-3 top-7 ">
        <button 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
          className="transition-transform duration-200 active:scale-90"
        >
          {isMenuOpen ? (
            <RiCloseLine className="w-6 h-6 " />
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
          {navItems.map((item) => (
            <li 
              key={item.name}
              className="flex items-center justify-between border-b md:border-b-0 pb-2 md:pb-0"
            >
              <Link href={item.href} className="hover:text-blue-500 transition-colors duration-300">
                {item.name}
              </Link>
              <span className="ml-1 transition-transform duration-200 hover:rotate-180">
                <MdKeyboardArrowDown />
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button */}
      <div 
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex bg-[#83CD20] rounded-full text-white p-3 md:p-4 items-center space-x-2 mt-4 md:mt-0 justify-center transition-transform duration-200 hover:scale-105 active:scale-95`}
      >
        <button>
          Get An Appointment
        </button>
        <span className="group transition-all duration-200">
          <HiOutlineArrowRight className="transform group-hover:translate-x-1" />
        </span>
      </div>
    </header>
  );
};

export default Navbar;