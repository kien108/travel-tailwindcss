import Header from "../components/Header";
import watch from "../assets/imgs/hero/watch.svg";
import { BsFillPlayFill } from "react-icons/bs";
import hero1 from "../assets/imgs/hero/hero1.svg";
import hero2 from "../assets/imgs/hero/hero2.svg";
import hero3 from "../assets/imgs/hero/hero3.svg";
const Hero = () => {
   return (
      <section className="bg-gradient" id="home">
         <Header />

         <div className="content container mx-auto flex flex-col items-center justify-center gap-[30px] py-[50px] md:flex-row md:justify-between md:gap-[20px] lg:gap-[130px] lg:py-[100px]">
            <div className="grid max-w-[100%] grow grid-cols-2 gap-[10px] md:h-auto md:w-[50%] md:max-w-[570px] md:gap-[15px] lg:h-[496px] lg:gap-[30px]">
               <div className="grid grid-rows-6 gap-[10px] md:gap-[15px] lg:gap-[30px]">
                  <div className="row-span-2">
                     <img src={hero1} alt="" />
                  </div>
                  <div className="row-span-3 row-start-3">
                     <img src={hero2} alt="" />
                  </div>
               </div>
               <div className="grid grid-rows-6">
                  <div className="row-span-5 row-start-2">
                     <img src={hero3} alt="" className="" />
                  </div>
               </div>
            </div>
            <div className="md:w-[50%] lg:w-auto">
               <h1 className="max-w-[470px] font-sen text-xxl font-bold leading-[47px] text-txt-main lg:leading-[68px]">
                  The perfect partner of your best trip.
               </h1>
               <p className="mt-[18px] max-w-[470px] text-md">
                  Make your travel more enjoyable with us. We are the best
                  travel agency and we are providing the best travel services
                  for our clients.
               </p>

               <div className="mt-[22px] flex items-center gap-[26px] font-semibold md:mt-[46px]">
                  <button className="btn min-w-max">Plan a Trip</button>
                  <div className=" flex items-center gap-[20px] md:gap-[46px]">
                     <div className="relative h-[50px] w-[50px] cursor-pointer transition-all hover:opacity-[0.9] md:h-[80px] md:w-[80px]">
                        <img src={watch} alt="watch-me" />
                        <span className="absolute right-0 top-[50%] flex h-[25px] w-[25px]  translate-y-[-50%] translate-x-[40%] items-center justify-center rounded-full bg-white md:h-[40px] md:w-[40px]">
                           <BsFillPlayFill
                              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-black"
                              size={"15px"}
                           />
                        </span>
                     </div>
                     <span className="text-md font-bold text-txt-main lg:min-w-max">
                        Watch our Story
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
