import React, { useEffect, useState } from "react";

const OurServices = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("https://techasync-placeholder.vercel.app/services")
      .then((result) => result.json())
      .then((data) => {
        setAllServices(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto min-h-[300px] py-20">
      <h1 className="text-3xl font-bold text-white text-center">
        Our Services
      </h1>
      <p className="text-[#7561fc] text-center">
        We provide technical support to make business strategies smoother
      </p>

      <div className="flex flex-wrap pt-20">
        {allServices.map((el) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center pb-6"
            key={el._id}
          >
            <div className="rounded-xl neon_common_effect bg-[#040308] p-4 w-[350px] overflow-hidden flex flex-col gap-3 border border-white">
              <img src={`/svg/${el.image}`} className="h-[60px] w-[60px]" />
              <h1 className="text-xl text-white">{el.title}</h1>
              <p className="text-gray-500">{el.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
