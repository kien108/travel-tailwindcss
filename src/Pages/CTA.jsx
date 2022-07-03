import React from "react";
import Title from "../components/Title";
import cta from "../assets/imgs/cta/cta.svg";

const header = {
   title: "Start your trip now!",
   content:
      "Explore your suitable and dream places around the world. Here you can find your right destination.",
};

const CTA = () => {
   return (
      <section className="bg-gradient">
         <div className="container-custom  pb-[50px] lg:pb-[96px]" id="contact">
            <Title
               title={header.title}
               content={header.content}
               center={true}
            />
            <div className="cursor-pointer py-[30px] hover:opacity-75 lg:py-[55px]">
               <img src={cta} alt="video" />
            </div>
            <form
               action=""
               className="flex flex-col items-center justify-center gap-[20px] lg:gap-[38px]"
            >
               <input
                  className="border-b-[1px] border-b-primary bg-transparent px-[40px] py-[8px] text-md text-txt-main outline-none placeholder:text-txt-second  md:px-[70px] lg:py-[12px] lg:px-[100px]"
                  type="text"
                  placeholder="Enter your email to join"
               />
               <button className="btn px-[32px] py-[10px] text-md lg:px-[54px] lg:py-[17px]">
                  Get Listed
               </button>
            </form>
         </div>
      </section>
   );
};

export default CTA;
