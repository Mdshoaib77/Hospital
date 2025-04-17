import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="mt-8 text-white  bg-backgroundColor rounded-t-3xl md:mt-0">
      <div className="flex flex-col justify-between p-8 px-5 md:flex-row md:px-32">
        <div className="w-full  md:w-1/4">
          <h1 className="pb-4 text-xl font-semibold ">WellnessVista</h1>
          <p className="text-sm ">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium  md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2 ">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer  hover:text-hoverColor"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer  hover:text-hoverColor"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer  hover:text-hoverColor"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium  md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2 ">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer  hover:text-hoverColor"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer  hover:text-hoverColor"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer  hover:text-hoverColor"
            >
              Heart Health
            </Link>
          </nav>
        </div>
        <div className="w-full  md:w-1/4">
          <h1 className="pt-5 pb-4 text-xl font-medium  md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2 ">
            <Link to="/" spy={true} smooth={true} duration={500}>
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              support@care.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="py-4 text-center ">
          @copyright developed by
          <span className=" text-hoverColor"> Md Shoaib</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
