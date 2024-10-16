import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 bg-gradient-to-br from-red-100 via-gray-100 to-teal-100">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={"/assets/images/zlogo.jpeg"}  
              alt="It Mate"
              width={65}  
              height={65} 
              className="w-[65px] h-full shadow-lg rounded-full "
            />
            <span className="ml-3 text-xl p-2 rounded-full bg-gradient-to-br from-pink-200 via-gray-200 to-teal-200">ZAKIA BASHIR</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center bg-gradient-to-br from-pink-50 via-gray-50 to-teal-50">
            <Link href={"/"} className="mr-5 hover:text-blue-600 p-2 bg-gradient-to-br from-red-150 via-gray-150 to-teal-150 ">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-600 p-2 bg-gradient-to-br from-red-150 via-gray-150 to-teal-150">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-blue-600 p-2 bg-gradient-to-br from-red-150 via-gray-150 to-teal-150">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-blue-600 p-2 bg-gradient-to-br from-red-150 via-gray-150 to-teal-150">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-600 p-2 bg-gradient-to-br from-red-150 via-gray-150 to-teal-150">
              Contact
            </Link>
          </nav>
          <a href="/assets/nextjs/zakia-resume.pdf">
            <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
