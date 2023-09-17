import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="container mx-auto text-white px-1 lg:px-6 py-6 flex items-center ">
      <p className={`brand-name font-bold text-xl w-2/4 lg:w-1/3`}>
        {" "}
        Tech<span className="text-[#7561fc]">Async</span>{" "}
      </p>
      <div className="lg:flex gap-3 md:gap-12 justify-between hidden lg:w-1/3">
        <Link className="">Home</Link>
        <Link className="cursor-not-allowed" disabled>
          Services
        </Link>
        <Link className="cursor-not-allowed" disabled>
          Blogs
        </Link>
        <Link className="cursor-not-allowed" disabled>
          Contact
        </Link>
      </div>
      <div className=" w-2/4 lg:w-1/3 flex justify-end">
        <div className="bg-white rounded-xl p-1 w-fit">
          <button className="text-[#252525] text-sm font-bold px-6 py-2 rounded-lg">
            SignUp
          </button>
          <button className="bg-[#7561fc] text-white text-sm font-bold px-6 py-2 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
