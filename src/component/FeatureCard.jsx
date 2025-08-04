import React from "react";


function FeatureCard({ icon, title }) {
  return (
    <>
      <div className="  flex flex-col justify-center items-center  mt-2 md:mt-5 w-full p-1.5 md:p-10">
        <div className="text-6xl text-[#4a6cf7]">
          {icon}
        </div>
        <h1 className="text-[#090e34] text-2xl font-bold mt-6 text-center">{title} </h1>
        <p className="text-wrap text-center text-[#9fa6b9] mt-5 text-[17px]">
          Deleniti nemo temporibus minima iusto, voluptatem sint ratione eveniet
          maiores nihil maxime repellendus, dolorum dolorem atque delectus
          laborum.
        </p>
      </div>
    </>
  );
}

export default FeatureCard;
