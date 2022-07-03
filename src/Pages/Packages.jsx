import { useState, useEffect } from "react";
import Slider from "react-slick";
import Title from "../components/Title";
import destination1 from "../assets/imgs/packages/package1.jpg";
import destination2 from "../assets/imgs/packages/package2.jpg";
import destination3 from "../assets/imgs/destinations/travel1.jpg";
import destination4 from "../assets/imgs/packages/package3.jpg";
import Package from "../components/Package";
const header = {
   title: "Best trip package",
   content:
      "Explore your suitable and dream places around the world. Here you can find your right destination.",
};

const packages = [
   {
      img: destination1,
      title: "Floating city",
      content: "Enjoy the floating city in Serbia. That’s an amazing place.",
      link: "Learn more",
      price: "$350",
   },
   {
      img: destination2,
      title: "Mountain",
      content: "Enjoy the mountain of zurich. That is so amazing for trip.",
      link: "Learn more",
      price: "$250",
   },
   {
      img: destination3,
      title: "The village",
      content: "The village is a city you will feel you are in a village.",
      link: "Learn more",
      price: "$150",
   },
   {
      img: destination4,
      title: "The red house",
      content: "The red house is the great place for anyone to visit.",
      link: "Learn more",
      price: "$750",
   },
];

const Packages = () => {
   const [settings, setSettings] = useState({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   });

   useEffect(() => {
      const handelSize = () => {
         let windowWidth = window.innerWidth;

         if (windowWidth < 430) {
            setSettings({
               ...settings,
               slidesToShow: 1,
            });
            return;
         }
         if (windowWidth < 768) {
            setSettings({
               ...settings,
               slidesToShow: 2,
            });
            return;
         }
         if (windowWidth < 900) {
            setSettings({
               ...settings,
               slidesToShow: 3,
            });
            return;
         }
         setSettings({
            ...settings,
            slidesToShow: 4,
         });
      };
      window.addEventListener("resize", handelSize);
      handelSize();

      return () => window.document.removeEventListener("resize", handelSize);
   }, []);

   return (
      <section id="pricing" className="container-custom">
         <Title title={header.title} content={header.content} center={true} />

         <Slider
            {...settings}
            className="mx-[-4px] mt-[20px] md:mx-[-10px] md:mt-[30px] lg:mx-[-15px] lg:mt-[55px]"
         >
            {packages?.length > 0 &&
               packages.map((item, index) => (
                  <Package
                     key={index}
                     img={item.img}
                     title={item.title}
                     content={item.content}
                     price={item.price}
                  />
               ))}
         </Slider>
         <button className="btn relative left-[50%] mt-[30px] mb-[50px] translate-x-[-50%] px-[32px] py-[10px] text-md text-white lg:mt-[38px] lg:mb-[96px] lg:px-[54px] lg:py-[17px]">
            View All
         </button>
      </section>
   );
};

export default Packages;
