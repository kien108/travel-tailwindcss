import React from "react";
import Title from "../components/Title";
import Blog from "../components/Blog";
import destination1 from "../assets/imgs/destinations/travel1.jpg";
import destination2 from "../assets/imgs/destinations/travel2.jpg";
import destination3 from "../assets/imgs/destinations/travel3.jpg";
import ava1 from "../assets/imgs/blogs/people1.jpg";
import ava2 from "../assets/imgs/blogs/people2.jpg";
import ava3 from "../assets/imgs/blogs/people3.jpg";
import Slider from "react-slick";
import { useState, useEffect } from "react";

const header = {
   title: "Our blog",
   content:
      "Read our regular travel blog and know the latest update of tour and travel",
};

const blogs = [
   {
      img: destination1,
      title: "The proper guidelines of going the red house",
      link: "Learn more",
      avatar: ava1,
      name: "Ben Stokes",
   },
   {
      img: destination2,
      title: "The proper guidelines of going the red house",
      link: "Learn more",
      avatar: ava2,
      name: "Ben Cooper",
   },
   {
      img: destination3,
      title: "The proper guidelines of going the red house",
      link: "Read more",
      avatar: ava3,
      name: "Kevin Peter",
   },
];

const Blogs = () => {
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
      <section
         className="container-custom pb-[50px] lg:pb-[170px]"
         id="reviews"
      >
         <div className="flex items-center justify-between gap-4">
            <Title
               title={header.title}
               content={header.content}
               className="max-w-[339px]"
            />
            <a
               href="#"
               className="inline-block min-w-max cursor-pointer text-md font-bold text-primary transition-all hover:opacity-70"
            >
               Read All Blog
            </a>
         </div>

         <Slider
            {...settings}
            className="mx-[-4px] mt-[20px] md:mx-[-10px] md:mt-[30px] lg:mx-[-15px] lg:mt-[55px]"
         >
            {blogs?.length > 0 &&
               blogs.map((item, index) => (
                  <Blog
                     key={index}
                     img={item.img}
                     content={item.content}
                     title={item.title}
                     link={item.link}
                     avatar={item.avatar}
                     name={item.name}
                  />
               ))}
         </Slider>
      </section>
   );
};

export default Blogs;
