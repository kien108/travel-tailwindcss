import React from "react";

const Package = (props) => {
   const { img, title, content, link, price } = props;

   return (
      <div className="group mx-[4px] aspect-[135/176] cursor-pointer overflow-hidden rounded-[25px] bg-white shadow-lg dark:bg-card md:mx-[10px] lg:mx-[15px]">
         <div className="relative aspect-[45/37] w-full transition-all duration-300">
            <img src={img} alt="img" className="h-full w-full object-cover" />
            <div className="absolute bottom-0 right-0 rounded-tl-[14px] border-b-[1px] border-b-black/30 bg-[#fffcfc] p-[14px] text-center text-md font-semibold leading-[100%] text-primary transition-all hover:text-white group-hover:bg-primary group-hover:text-white dark:bg-card md:p-[18px] lg:p-[22px]">
               {price}
            </div>
         </div>
         <div className="mt-[4px] px-[10px] md:px-[20px] lg:mt-[15px]">
            <h3 className="font-sen text-[15px] font-bold text-txt-main md:text-[18px] lg:text-[20px]">
               {title}
            </h3>
            <p className="mt-[4px] text-sm text-txt-second lg:mt-[10px]">
               {content}
            </p>
            <a
               href="#"
               className="mt-[8px] block text-sm text-primary hover:opacity-80 lg:mt-[10px]"
            >
               {link}
            </a>
         </div>
      </div>
   );
};

export default Package;
