import React from "react";

const Card = (props) => {
   const { img, title, content, link } = props;

   return (
      <div className="group mx-[4px] aspect-[185/211] cursor-pointer overflow-hidden rounded-[25px] bg-white shadow-lg dark:bg-card  md:mx-[10px] lg:mx-[15px]">
         <div className="h-full transition-all duration-300 group-hover:h-[50%]">
            <img src={img} alt="img" className="h-full w-full object-cover" />
         </div>
         <div className="mt-[10px] px-[15px] md:px-[24px] lg:mt-[24px]">
            <h3 className="text-l font-bold text-txt-main">{title}</h3>
            <p className="mt-[8px] text-sm text-txt-second lg:mt-[14px]">
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

export default Card;
