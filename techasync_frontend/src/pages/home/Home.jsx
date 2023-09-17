import React, { useContext, useEffect } from "react";
import { MainContext } from "../../context/MainContextProvider";
import WelcomeLoaderModal from "../../components/welcome_items/welcomeLoader/WelcomeLoaderModal";
import UnderDevelopmentModal from "../../components/modals/under_development/UnderDevelopmentModal";

const Home = () => {
  const { welcomeLoader, setWelcomeLoader } = useContext(MainContext);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeLoader(false);
    }, 3000);
  }, []);

  return (
    <div className="min-h-[100vh] relative">
      {welcomeLoader && <WelcomeLoaderModal></WelcomeLoaderModal>}
      <UnderDevelopmentModal></UnderDevelopmentModal>
    </div>
  );
};

export default Home;
