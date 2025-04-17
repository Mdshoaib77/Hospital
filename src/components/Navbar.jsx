import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed z-10 w-full text-white ">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer ">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold ">WellnessVista.</h1>
            </Link>
          </div>

          <nav className="flex-row items-center hidden gap-8 text-lg font-medium lg:flex">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
              Doctors
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <button
              className="px-4 py-2 text-white transition duration-300 ease-in-out rounded-md bg-brightColor hover:bg-hoverColor"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="flex items-center lg:hidden">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-hoverColor"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-hoverColor"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-hoverColor"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-hoverColor"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-hoverColor"
            onClick={closeMenu}
          >
            Blog
          </Link>

          <div className=" lg:hidden">
            <button
              className="px-4 py-2 text-white transition duration-300 ease-in-out rounded-md bg-brightColor hover:bg-hoverColor"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
