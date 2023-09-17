import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-[250px] flex flex-col justify-between py-10">
      <div className="flex items-center flex-wrap gap-6 justify-center">
        <Link className="flex justify-center items-center border border-[#7561fc] h-[50px] w-[50px] rounded-full text-[#7561fc] transition-all hover:border-[#fff] hover:text-[#fff]">
          <FaFacebookF></FaFacebookF>
        </Link>
        <Link className="flex justify-center items-center border border-[#7561fc] h-[50px] w-[50px] rounded-full text-[#7561fc] transition-all hover:border-[#fff] hover:text-[#fff]">
          <FaTwitter></FaTwitter>
        </Link>
        <Link className="flex justify-center items-center border border-[#7561fc] h-[50px] w-[50px] rounded-full text-[#7561fc] transition-all hover:border-[#fff] hover:text-[#fff]">
          <FaWhatsapp></FaWhatsapp>
        </Link>
        <Link className="flex justify-center items-center border border-[#7561fc] h-[50px] w-[50px] rounded-full text-[#7561fc] transition-all hover:border-[#fff] hover:text-[#fff]">
          <FaInstagram></FaInstagram>
        </Link>
      </div>
      <div>
        <p className="text-center text-white">
          &copy; 2023, All rights are reserved. Tech
          <span className="text-[#7561fc]">Async</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
