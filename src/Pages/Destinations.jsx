import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import Slider from "react-slick";
import destination1 from "../assets/imgs/destinations/destination1.svg";
import destination2 from "../assets/imgs/destinations/destination2.svg";
import destination3 from "../assets/imgs/destinations/destination3.svg";

const header = {
   title: "Explore top destinations",
   content:
      "Explore your suitable and dream places around the world. Here you can find your right destination.",
};

const destinations = [
   {
      img: destination1,
      title: "Mountain",
      content:
         "It is one of the amazing place to trip and you will enjoy most to travelling there. Such beautiful place.",
      link: "Learn more",
   },
   {
      img: destination2,
      title: "Building",
      content:
         "It is one of the amazing place to trip and you will enjoy most to travelling there. Such beautiful place.",
      link: "Learn more",
   },
   {
      img: destination3,
      title: "Beach",
      content:
         "It is one of the amazing place to trip and you will enjoy most to travelling there. Such beautiful place.",
      link: "Learn more",
   },
];

const Destinations = () => {
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

         setSettings({
            ...settings,
            slidesToShow: 3,
         });
      };
      window.addEventListener("resize", handelSize);
      handelSize();

      return () => window.document.removeEventListener("resize", handelSize);
   }, []);

   return (
      <section id="destinations" className="container-custom">
         <Title title={header.title} content={header.content} />

         <Slider
            {...settings}
            className="mx-[-4px] mt-[20px] md:mx-[-10px] md:mt-[30px] lg:mx-[-15px] lg:mt-[55px]"
         >
            {destinations?.length > 0 &&
               destinations.map((item, index) => (
                  <Card
                     key={index}
                     img={item.img}
                     title={item.title}
                     content={item.content}
                     link={item.link}
                  />
               ))}
         </Slider>
      </section>
   );
};

export default Destinations;
