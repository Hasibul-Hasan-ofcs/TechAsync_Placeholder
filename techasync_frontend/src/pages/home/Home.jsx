import React, { useContext, useEffect } from "react";
import { MainContext } from "../../context/MainContextProvider";
import WelcomeLoaderModal from "../../components/welcome_items/welcomeLoader/WelcomeLoaderModal";
import UnderDevelopmentModal from "../../components/modals/under_development/UnderDevelopmentModal";
import Header from "../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import OurServices from "./../../components/services/OurServices";
import style from "./css/home.module.css";

const Home = () => {
  const { welcomeLoader, setWelcomeLoader } = useContext(MainContext);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeLoader(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`min-h-[100vh] relative flex flex-col justify-between bg-[#040308]`}
    >
      {welcomeLoader && <WelcomeLoaderModal></WelcomeLoaderModal>}
      <UnderDevelopmentModal></UnderDevelopmentModal>
      <Header></Header>
      <OurServices></OurServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
