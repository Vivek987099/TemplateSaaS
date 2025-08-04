
import FeatureCard from "../../component/FeatureCard";
import { RiDownload2Line } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { BiBarChartAlt } from "react-icons/bi";

import { BiWindowOpen } from "react-icons/bi";
import { TbIndentIncrease } from "react-icons/tb";

import { BiBook } from "react-icons/bi";

function Feature() {
  return (
    <>
      <div  className="mt-7 md:mt-15 lg:mt-30 ">
        <div className="my-container">
          <p className="text-[#4a6cf7] text-center font-semibold text-[18px]">
            Our Software's Core Features
          </p>
          <h1 className="text-5xl font-bold text-center text-[#090e34]">
            SaaS Features
          </h1>
          <div className=" flex justify-center items-center">
            <p className="text-[#9fa6b9] mt-5 text-center text-[18px] font-semibold w-160">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-container mt-10">
          <div>
            <FeatureCard
              icon={<RiDownload2Line />}
              title={"SaaS Focused"}
            ></FeatureCard>{" "}
          </div>
          <div>
            {" "}
            <FeatureCard
              icon={<FaBookOpen />}
              title={"Developer Friendly"}
            ></FeatureCard>
          </div>
          <div>
            {" "}
            <FeatureCard
              icon={<BiWindowOpen />}
              title={"Essential Components"}
            ></FeatureCard>
          </div>
          <div>
            {" "}
            <FeatureCard
              icon={<TbIndentIncrease />}
              title={"Easy to Customize"}
            ></FeatureCard>
          </div>
          <div>
            {" "}
            <FeatureCard
              icon={<BiBook />}
              title={"High-quality Design"}
            ></FeatureCard>
          </div>
          <div>
            {" "}
            <FeatureCard
              icon={<BiBarChartAlt />}
              title={"Regular Updates"}
            ></FeatureCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
