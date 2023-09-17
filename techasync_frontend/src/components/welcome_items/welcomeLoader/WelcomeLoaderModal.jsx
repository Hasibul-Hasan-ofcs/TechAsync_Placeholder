import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const WelcomeLoaderModal = ({ classes }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 min-h-[100vh] min-w-[100vw] bg-gray-900 flex flex-col gap-6 justify-center items-center ${classes}`}
    >
      <p className="font-exo text-2xl font-bold text-center text-white">
        TechAsync
      </p>

      <CirclesWithBar
        height="50"
        width="50"
        color="#fff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="#fff"
        innerCircleColor="#fff"
        barColor="#ffffff00"
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default WelcomeLoaderModal;
