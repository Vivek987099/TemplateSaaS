import React from "react";
import Button from "../../component/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
   useGSAP(()=>{
      gsap.from('#homeContent', {
        y: 30,
        opacity: 0,
        duration: 0.9, } )
    },[])
  return (
    <>
      <div id="home" className="mt-20 mb-5 md:mb-10 lg:mb-20 ">
        <div id="homeContent" className="my-container h-auto  pt-10 py-2">
          {/* Home content */}
            <h1 className="lg:text-5xl text-2xl font-bold text-[#090e34] text-center lg:mt-15">Complete Tailwind CSS <br /> Template for SaaS Website</h1>
            <p className="text-center text-[#9fa6b9] text-[16px] mt-5 lg:mt-8 lg:text-[22px] font-semibold">SaaS Tailwind is a complete Tailwind CSS template crafted specially for <br /> SaaS, Software Mobile App and Web App Sites. Comes with all essential <br /> components and pages you need to kickstart your SaaS websites.</p>
          
            {/* feature button */}
           <div className="text-center mt-10">
             <Button title='Explore Features'></Button>
           </div>
            <div className="flex justify-center items-center mt-10 ">
                <img src="/public/hero-image.png" alt="hero-img" className="w-200 shadow-xl"/>
            </div>
        </div>
        

      </div>
    </>
  );
}

export default Home;
