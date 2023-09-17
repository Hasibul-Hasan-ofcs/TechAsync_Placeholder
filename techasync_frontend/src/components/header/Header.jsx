import React from "react";
import style from "./css/header.module.css";
import NavigationBar from "./navbar/NavigationBar";
import Hero from "./hero/Hero";

const header = () => {
  return (
    <div
      className={`min-h-[140vh] md:min-h-[100vh] overflow-hidden ${style.neonic_background_main}`}
    >
      <div className={`h-[100vh] ${style.neonic_background_secondary}`}>
        <NavigationBar></NavigationBar>
        <Hero></Hero>
      </div>
    </div>
  );
};

export default header;
