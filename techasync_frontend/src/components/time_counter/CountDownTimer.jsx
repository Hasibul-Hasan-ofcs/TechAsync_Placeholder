import React from "react";
import Counter from "./Counter";
import moment from "moment/moment";
import "./css/time_counter.css";

const CountDownTimer = () => {
  const timeEnd = moment().add(10, "days").format("YYYY-MM-DD");

  return (
    <div className="min-h-16 theme-bg w-full py-2 relative overflow-hidden">
      <div className="container h-200per w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rotate-45 rounded-2xl"></div>

      <p className="text-center text-base text-slate-200 font-exo">
        Estimated Time Count
      </p>

      <div className="flex items-center justify-center py-8">
        <Counter timeEnd={timeEnd}></Counter>
      </div>
    </div>
  );
};

export default CountDownTimer;
