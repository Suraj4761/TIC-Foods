"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Flag from 'react-world-flags';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false); // for language dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageOpen(!languageOpen);
  };

  const languages = [
    { code: 'US', name: 'English' },
    { code: 'FR', name: 'French' },
    { code: 'IN', name: 'Hindi' },
    { code: 'ES', name: 'Spanish' }
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r text-orange shadow-md sticky top-0 z-50" style={{backgroundColor:'#fff',opacity:1}}>
        <nav className="container mx-auto flex items-center justify-between p-2">
          {/* Logo */}
          <div className="text-2x1 tracking-wide font-serif">
            <Link href="/">
              <span className="hover:text-orange-600 text-orange-600 cursor-default font-bold">
                TIC
              </span>
            </Link>
            <p className="text-sm italic text-orange-700">Tasty Indian Cuisine</p>
          </div>

          {/* Desktop Menu (center aligned) */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-8 text-lg font-sans">
            {["Home", "Shop", "Business", "More"].map((menu, index) => (
              <Link
                key={index}
                href={`/${menu.toLowerCase()}`}
                className="hover:text-orange-600 hover:underline hover:font-bold font-medium"
              >
                {menu}
              </Link>
            ))}
          </div>

          {/* Icons and Language Dropdown */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Language Dropdown */}
            <div className="relative">
              <button onClick={toggleLanguageMenu} className="flex items-center space-x-2 hover:text-orange-600">
                <Flag code="US" className="w-5 h-5" />
                {/* Dropdown arrow */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {languageOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg py-2">
                  {languages.map((lang, index) => (
                    <li key={index} className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200">
                      <Flag code={lang.code} className="w-5 h-5" />
                      <span>{lang.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Icons for Search, Login, Wishlist, Cart */}
            <Link href="javascript:void(0)" className="hover:text-orange-600">
              <MagnifyingGlassIcon className="w-5 h-5 hover:stroke-[2.5] cursor-pointer" />
            </Link>
            <Link href="javascript:void(0)" className="hover:text-orange-600">
              <UserIcon className="w-5 h-5 hover:stroke-[2.5] cursor-pointer" />
            </Link>
            <Link href="javascript:void(0)" className="hover:text-orange-600">
              <HeartIcon className="w-5 h-5 hover:stroke-[2.5] cursor-pointer" />
            </Link>
            <Link href="javascript:void(0)" className="hover:text-orange-600">
              <ShoppingCartIcon className="w-5 h-5 hover:stroke-[2.5] cursor-pointer" />
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-8 h-8 text-orange-600" // Added text-orange-600 to set the color
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-gradient-to-r text-black shadow-md sticky top-0 z-50">
            <nav className="p-4 space-y-4 text-lg font-serif">
              {["Home", "Shop", "Business", "More"].map((menu, index) => (
                <Link
                  key={index}
                  href={""}
                  className="block text-orange hover:text-orange-600 hover:font-bold hover:underline"
                >
                  {menu}
                </Link>
              ))}

              {/* Mobile Language Dropdown */}
             

              {/* Mobile Icons for Search, Login, Wishlist, Cart */}
              <div className="flex space-x-4 pt-2">
                <Link href="" className="block text-orange hover:text-orange-600">
                  <MagnifyingGlassIcon className="w-6 h-6 hover:stroke-[2.5] cursor-pointer" />
                </Link>
                <Link href="" className="block text-orange hover:text-orange-600">
                  <UserIcon className="w-6 h-6 hover:stroke-[2.5] cursor-pointer" />
                </Link>
                <Link href="" className="block text-orange hover:text-orange-600">
                  <HeartIcon className="w-6 h-6 hover:stroke-[2.5] cursor-pointer" />
                </Link>
                <Link href="" className="block text-orange hover:text-orange-600">
                  <ShoppingCartIcon className="w-6 h-6 hover:stroke-[2.5] cursor-pointer" />
                </Link>
                <div className="relative">
                <button onClick={toggleLanguageMenu} className="flex items-center space-x-2 text-orange hover:text-orange-600">
                  <Flag code="US" className="w-6 h-6" />
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {languageOpen && (
                  <ul className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg py-2">
                    {languages.map((lang, index) => (
                      <li key={index} className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200">
                        <Flag code={lang.code} className="w-5 h-5" />
                        <span>{lang.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
