import Destinations from "./Pages/Destinations";
import Hero from "./Pages/Hero";
import Packages from "./Pages/Packages";
import CTA from "./Pages/CTA";
import Blogs from "./Pages/Blogs";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import { useEffect, useRef } from "react";
function App() {
   const appRef = useRef(null);

   useEffect(() => {
      const handelSize = () => {
         let windowWidth = window.innerWidth;

         if (windowWidth < 430) {
            appRef.current.classList.remove("lg");
            appRef.current.classList.remove("md");
            return;
         }
         if (windowWidth < 768) {
            appRef.current.classList.remove("lg");
            appRef.current.classList.add("md");
            return;
         }
         appRef.current.classList.add("lg");
      };
      window.addEventListener("resize", handelSize);
      handelSize();

      return () => window.document.removeEventListener("resize", handelSize);
   }, []);

   return (
      <div
         className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth bg-main font-pop text-txt-second"
         ref={appRef}
      >
         <Hero />
         <Destinations />
         <Packages />
         <CTA />
         <Blogs />
         <Footer />

         <ScrollButton />
      </div>
   );
}

export default App;
