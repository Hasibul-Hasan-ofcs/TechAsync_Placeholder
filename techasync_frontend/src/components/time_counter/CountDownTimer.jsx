import React from "react";
import Counter from "./Counter";
import moment from "moment/moment";
import "./css/time_counter.css";

const CountDownTimer = ({ t }) => {
  const timeEnd = moment().add(10, "days").format("YYYY-MM-DD");

  return (
    <div className="min-h-16 theme-bg w-full py-2 relative overflow-hidden">
      <p className="text-center text-base text-slate-200 font-exo text-gray-500">
        Estimated launch Time Count
      </p>

      <div className="flex items-center justify-center py-8">
        <Counter timeEnd={timeEnd} t={t}></Counter>
      </div>
    </div>
  );
};

export default CountDownTimer;
