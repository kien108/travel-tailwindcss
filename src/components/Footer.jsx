import React from "react";
import facebook from "../assets/imgs/social/facebook.svg";
import instagram from "../assets/imgs/social/instagram.svg";
import twitter from "../assets/imgs/social/twitter.svg";
const Footer = () => {
   return (
      <footer
         className="bg-[#280C0C]
   text-[#C8BDBD] dark:border-t-[1px] dark:border-slate-700 dark:bg-[#0f172a]"
      >
         <div className="container mx-auto grid auto-rows-max grid-cols-1 pt-[50px] pb-[20px] lg:grid-cols-6 lg:pt-[96px] lg:pb-[38px]">
            <div className="lg:col-span-2">
               <div className="flex items-center font-sen text-[20px] font-bold md:text-[30px]">
                  <h1 className="mb-[10px] text-white">Outing</h1>
                  <span className="text-primary">.</span>
               </div>
               <p className="text-sm text-[#C8BDBD]">
                  ©2022 webdesign.gdn All Rights Reserved
               </p>
               <div className="flex w-[120px] items-center justify-between">
                  <div className="ml-[-15px] mr-[-20px] h-[70px] w-[70px]">
                     <img
                        className="h-full w-full object-cover"
                        src={facebook}
                        alt=""
                     />
                  </div>
                  <div className="mr-[-20px] h-[70px] w-[70px]">
                     <img
                        className="h-full w-full object-cover"
                        src={twitter}
                        alt=""
                     />
                  </div>
                  <div className="mr-[-20px] h-[70px] w-[70px]">
                     <img
                        className="h-full w-full object-cover"
                        src={instagram}
                        alt=""
                     />
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-y-[20px] md:grid-cols-3 lg:col-span-4 lg:grid-cols-4">
               <ul className="text-sm">
                  <li className="text-16 leading-[28px] text-white">Home</li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Home</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Featured</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#"></a>Service
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Feedback</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Contact</a>
                  </li>
               </ul>
               <ul className="text-sm">
                  <li className="text-16 leading-[28px] text-white">Home </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Company</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Service</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Contact</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Review</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">About</a>
                  </li>
               </ul>
               <ul className="text-sm">
                  <li className="text-16 leading-[28px] text-white">
                     Discover
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Trust and Security</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Terms</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">Policy</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">New trips</a>
                  </li>
               </ul>
               <ul className="text-sm">
                  <li className="text-16 leading-[28px]  text-white">
                     Contact
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">+880 1706499216</a>
                  </li>
                  <li className="leading-[28px] hover:opacity-60">
                     <a href="#">hellobesnik@gmail.com</a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
