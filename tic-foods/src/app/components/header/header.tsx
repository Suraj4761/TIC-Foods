"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-600 to-yellow-500 text-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide font-serif">
            <Link href="">
              <span className="hover:text-gray-300 cursor-default">
                {" "}
                {/* Set cursor to default */}
                TIC
              </span>
            </Link>
            <p className="text-sm font-light italic text-gray-200">
              Tasty Indian Cuisine
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-lg font-sans">
            <Link
              href="/"
              className="hover:text-gray-300 hover:underline font-medium"
            >
              Home
            </Link>
            <Link
              href="shop"
              className="hover:text-gray-300 hover:underline font-medium"
            >
              Shop
            </Link>
            <Link
              href=""
              className="hover:text-gray-300 hover:underline font-medium"
            >
              Business
            </Link>
            <Link
              href=""
              className="hover:text-gray-300 hover:underline font-medium"
            >
              More
            </Link>
            {/* Icons for Search, Login, Wishlist, Cart */}
            <div className="flex space-x-6">
              <Link href="" className="hover:text-gray-300">
                <MagnifyingGlassIcon className="w-6 h-6" />
              </Link>
              <Link href="" className="hover:text-gray-300">
                <UserIcon className="w-6 h-6" />
              </Link>
              <Link href="" className="hover:text-gray-300">
                <HeartIcon className="w-6 h-6" />
              </Link>
              <Link href="" className="hover:text-gray-300">
                <ShoppingCartIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden ">
            <button onClick={toggleMenu} className="focus:outline-none ">
              <svg
                className="w-8 h-8"
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
          <div className="bg-gradient-to-r from-pink-600 to-yellow-600 text-white shadow-md sticky top-0 z-50">
            <nav className="p-4 space-y-4 text-lg font-serif">
              <Link href="" className="block text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="" className="block text-white hover:text-gray-300">
                Shop
              </Link>
              <Link href="" className="block text-white hover:text-gray-300">
                Business
              </Link>
              <Link href="" className="block text-white hover:text-gray-300">
                More
              </Link>
              {/* Mobile Icons for Search, Login, Wishlist, Cart */}
              <div className="flex space-x-4 pt-2">
                <Link href="" className="block text-white hover:text-gray-300">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </Link>
                <Link href="" className="block text-white hover:text-gray-300">
                  <UserIcon className="w-6 h-6" />
                </Link>
                <Link href="" className="block text-white hover:text-gray-300">
                  <HeartIcon className="w-6 h-6" />
                </Link>
                <Link href="" className="block text-white hover:text-gray-300">
                  <ShoppingCartIcon className="w-6 h-6" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Full-Screen Banner Section */}
      {/* <section className="relative w-full h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1556742400-b5c9d5d9a9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGluZGlhbiUyMGN1aXNpbmV8ZW58MHx8fHwxNjcwMzM2MDYy&ixlib=rb-4.0.3&q=80&w=1920')] flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center animate-fadeIn shadow-lg">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-serif animate-slideIn">
            Welcome to TIC
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 animate-slideIn">
            Discover the Rich Flavors of Indian Cuisine
          </p>
          <button className="bg-purple-700 hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-lg transition-all animate-bounce">
            Explore Menu
          </button>
        </div>
      </section> */}
    </>
  );
};

export default Header;
