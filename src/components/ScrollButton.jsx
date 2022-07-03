import React, { useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { useState } from "react";

const ScrollButton = () => {
   const [visible, setVisible] = useState(false);

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
         setVisible(true);
      } else if (scrolled <= 300) {
         setVisible(false);
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   window.addEventListener("scroll", toggleVisible);

   return (
      <BsFillArrowUpSquareFill
         size={"40px"}
         className={`${
            visible ? "block" : "hidden"
         } fixed bottom-10 right-1 animate-bounce cursor-pointer text-primary hover:opacity-90 md:right-2 lg:right-4`}
         onClick={scrollToTop}
      />
   );
};

export default ScrollButton;
