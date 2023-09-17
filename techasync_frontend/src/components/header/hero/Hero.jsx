import { Button } from "@material-tailwind/react";
import React from "react";
import CountDownTimer from "./../../time_counter/CountDownTimer";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <div className="pt-10">
        <CountDownTimer t={true}></CountDownTimer>
      </div>

      <p className="text-center text-5xl text-white font-bold pt-9">
        Grow Your Business with{" "}
        <span className="border-b border-[#7561fc]">
          Tech<span className="text-[#7561fc]">Async</span>{" "}
        </span>
      </p>
      <p className="text-[#9799a6] text-center py-5">
        Unlock Rapid Growth and Achieve Unprecedented Success with <br /> Our
        Cutting-Edge Technology and Expertise.
      </p>

      <div className="flex items-center justify-center gap-5">
        <Button variant="filled" className="bg-[#7561fc] w-[130px]">
          SignUp
        </Button>
        <Button
          variant="outlined"
          className="text-[#7561fc] border-[#7561fc] w-[130px]"
        >
          Contact US
        </Button>
      </div>
    </div>
  );
};

export default Hero;
