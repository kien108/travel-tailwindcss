import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import useDarkMode from "../hooks/useDarkMode";

const menuOptions = [
   {
      to: "#home",
      label: "Home",
   },
   {
      to: "#destinations",
      label: "Destinations",
   },
   {
      to: "#pricing",
      label: "Pricing",
   },
   {
      to: "#reviews",
      label: "Reviews",
   },
   {
      to: "#contact",
      label: "Contact us",
   },
];

const $$ = document.querySelectorAll.bind(document);

const Header = () => {
   const [query, setQuery] = useState("");
   const menuRef = useRef(null);
   const [isDarkMode, toggleDarkMode] = useDarkMode();

   const openMenu = () => {
      menuRef.current.classList.toggle("translate-x-full");
      menuRef.current.classList.toggle("translate-x-0");
   };

   const resetOptions = () => {
      const listOptions = $$("li");
      listOptions.forEach((value, index) => {
         value.classList.remove("menu--active");
      });
   };
   const handelClickMenu = (e) => {
      resetOptions();
      e.target.closest("li").classList.add("menu--active");
   };

   return (
      <header className="container mx-auto flex py-[10px] md:py-[36px]">
         <div className="flex items-center font-sen text-[20px] font-semibold text-txt-main md:text-[30px]">
            <h1 className="">Outing</h1>
            <span className="text-primary">.</span>
            {isDarkMode ? (
               <BsMoonFill
                  onClick={toggleDarkMode}
                  className="ml-2 hidden cursor-pointer text-yellow-500 md:block"
                  size={"32px"}
               />
            ) : (
               <BsSunFill
                  onClick={toggleDarkMode}
                  className="ml-2 hidden cursor-pointer text-yellow-500 md:block"
                  size={"32px"}
               />
            )}
         </div>

         <div
            className={`ml-[10px] flex items-center gap-1 rounded-[25px] border-[2px] px-[10px] py-[8px] md:w-[250px] md:py-[10px] lg:ml-[30px] lg:w-[300px] ${
               query ? "border-primary" : "border-[#ccc]"
            }`}
         >
            <AiOutlineSearch size="18px" className="text-primary" />
            <input
               className="block bg-transparent text-md text-txt-main outline-none"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               type="text"
               name=""
               id=""
               placeholder="Search for destinations..."
            />
         </div>

         <div className="menu ml-auto flex items-center">
            <AiOutlineMenu
               size={"24px"}
               className="cursor-pointer  text-black transition-all hover:text-primary dark:text-white md:hidden"
               onClick={openMenu}
            />

            <nav
               className="fixed right-0 top-0 bottom-0 z-10 w-[230px] translate-x-full select-none list-none rounded-l-[15px] border-[1px] border-[#ccc] bg-white shadow-md transition-all duration-300 dark:bg-card"
               ref={menuRef}
            >
               <AiOutlineClose
                  size={"24px"}
                  className="absolute top-[10px] right-[10px] cursor-pointer font-extrabold text-black transition-all hover:text-primary dark:text-white md:hidden"
                  onClick={openMenu}
               />
               {isDarkMode ? (
                  <BsMoonFill
                     onClick={toggleDarkMode}
                     className="mx-auto my-8 cursor-pointer text-yellow-500"
                     size={"32px"}
                  />
               ) : (
                  <BsSunFill
                     onClick={toggleDarkMode}
                     className="mx-auto  my-8  cursor-pointer text-yellow-500"
                     size={"32px"}
                  />
               )}
               {menuOptions?.length > 0 &&
                  menuOptions.map((option, index) => (
                     <li
                        key={index}
                        className="block cursor-pointer rounded-[10px] text-center text-md transition-all  hover:bg-primary"
                     >
                        <a
                           href={option.to}
                           className="block px-[10px] py-[10px]"
                        >
                           {option.label}
                        </a>
                     </li>
                  ))}
            </nav>

            {/* Menu laptop */}
            <nav className="hidden gap-[40px] md:flex">
               {menuOptions?.length > 0 &&
                  menuOptions.map((option, index) => (
                     <li
                        key={index}
                        className="group-before:block group-text-primary relative block cursor-pointer rounded-[10px] text-center text-md transition-all before:absolute before:bottom-0 before:left-[1px] before:block before:w-0 before:border-b-[2px] before:border-b-primary last:rounded-[25px] last:bg-primary last:px-[22px] last:py-[1px] last:text-white last:before:hidden hover:text-primary hover:before:w-[12px] last:hover:text-white last:hover:opacity-75"
                        onClick={(e) => handelClickMenu(e)}
                     >
                        <a href={option.to} className="block py-[10px]">
                           {option.label}
                        </a>
                     </li>
                  ))}
            </nav>
         </div>
      </header>
   );
};

export default Header;
