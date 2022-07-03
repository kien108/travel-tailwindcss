import React from "react";

const Blog = (props) => {
   const { img, title, link, avatar, name } = props;

   return (
      <div className="group mx-[4px] aspect-[185/211] cursor-pointer overflow-hidden rounded-[25px] bg-white shadow-lg dark:bg-card md:mx-[10px] lg:mx-[15px]">
         <div className="relative aspect-[37/25] w-full">
            <img src={img} alt="img" className="h-full w-full object-cover" />
         </div>
         <h3 className="px-[10px] py-[12px] font-sen text-[15px] font-bold text-txt-main md:py-[18px] md:px-[22px] md:text-[18px] lg:mt-[15px] lg:py-[18px] lg:text-[20px]">
            {title}
         </h3>
         <div className="my-[4px] flex items-center justify-between gap-4 px-[10px] md:px-[20px] lg:mt-[10px]">
            <div className="flex items-center gap-3 md:gap-4">
               <div className="h-[30px] w-[30px] overflow-hidden rounded-full lg:h-[42px] lg:w-[42px]">
                  <img
                     className="h-full w-full object-cover"
                     src={avatar}
                     alt="avatar "
                  />
               </div>
               <span className="text-sm">{name}</span>
            </div>
            <a
               href="#"
               className="block min-w-max text-sm font-bold text-primary hover:opacity-80 lg:mt-[10px]"
            >
               {link}
            </a>
         </div>
      </div>
   );
};

export default Blog;
