/* hooks */
import React, { useState } from "react";
/* components */
import Card from "./Card";
import Cities from "./Cities";
import SelectProp from "./SelectProp";

/* animation file */
import {
  containerVariants,
  itemVariants,
  textVariant,
  scaleUp,
} from "../animation";

/* images */
import heropicture from "/heropicture.jpg";
import firstCarousel from "/Hero image.jpg";
import firstImage from "/uncompleted1.jpg";
import secondImage from "/comfy home.jpg";
import fourthImage from "/uncompleted2.jpg";
import trustImage from "/Real estate home social media banner.jpeg";
import zumaRock from "/Zuma rock.png";
import uyoStadium from "/Uyo stadium.png";
import lagosState from "/Lagos state.png";
import phCity from "/Rivers.jpg";
import parlourImage from "/parlor.jpg";
import advertImage from "/advert.jpg";

/* icons */
import { MdSecurity } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiHomeadvisor } from "react-icons/si";

/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css"; // Core Swiper styles
import "swiper/css/autoplay"; // Autoplay module styles (optional)
import "swiper/css/effect-fade"; // Effect styles (for fading transitions)

/* Framer animations */
import { motion } from "motion/react";

const lazyCity = React.lazy(() => import("./Cities"));
export default function Home() {
  /* array for swiper images */
  const swiperImages = [heropicture, firstCarousel];
  const advertSwiper = [advertImage, firstImage];
  /* property category and location for <select> items in hero section */
  const propSearch = {
    location: ["Abuja", "Lagos", "Port harcourt", "Uyo"],
  };
  /* array of objects for Card images in "Featured properties section" */
  const cardItems = [
    {
      image: firstImage,
      description: "8 rooms,carcass level",
      price: "$250,000,000",
      state: "abuja",
    },
    {
      image: secondImage,
      description: "5 rooms, Duplex",
      price: "$500,000,000",
      state: "lagos",
    },
    {
      image: fourthImage,
      description: "carcass houses and shops",
      price: "$2,000,000",
      state: "lagos",
    },
  ];
  const [filterCards, setFilter] = useState(cardItems);
  const handleChange = (changeState) => {
    if (changeState) {
      const filteredItem = cardItems.filter(
        (property) => property.state.toLowerCase() === changeState.toLowerCase()
      );
      setFilter(filteredItem);
    } else {
      setFilter(cardItems);
    }
  };

  /* array for locations images */
  const locations = [
    { state: "Abuja", image: zumaRock },
    { state: "Uyo", image: uyoStadium },
    { state: "PortHarcourt", image: phCity },
    { state: "Lagos", image: lagosState },
  ];
  /* array of objects for svgs in "why choose us div" */
  const svgDiv = [
    {
      svg: <MdSecurity />,
      h3: "Trusted Agents",
      p: "Work with highly trained and reliable agents with years of experience in the real estate industry",
    },
    {
      svg: <FaMoneyBillWave />,
      h3: "Best Deals",
      p: "Get access to exclusive listings on properties across the market",
    },
    {
      svg: <FaPeopleGroup />,
      h3: "Customers service",
      p: "Our clients are our priority, we pride ourselves in delivering excellent services",
    },
  ];

  return (
    <div className="bg-cover bg-center">
      {/* Hero section */}
      <section className="hero relative w-full h-screen z-30">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, EffectFade]} // Enable autoplay
          autoplay={{
            delay: 5000, // Delay between slides (in ms)
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          loop={true} // Enable looping
          effect="fade" // Fading effect
          className="absolute w-full h-full z-10"
        >
          {swiperImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={"w-full h-full bg-cover bg-center"}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="inset-0 bg-black opacity-85 absolute z-20"></div>

        {/* Hero Content */}
        <motion.div className="relative flex flex-col items-center justify-center gap-4 z-20 h-full">
          <div className="text">
            <motion.h1
              variants={textVariant}
              initial="hidden"
              whileInView="show"
              className="font-bold text-2xl font-heroText text-offwhite md:text-3xl lg:text-5xl"
            >
              Discover properties easily
            </motion.h1>
          </div>
          {/* Select Property */}
          <SelectProp selectState={propSearch} onFilter={handleChange} />
        </motion.div>
      </section>

      {/* properties section */}
      <section className="pt-8 flex flex-col justify-center gap-4 bg-slate-100">
        <motion.h3
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          className=" text-lg font-heroText font-bold bg-myGradient bg-clip-text text-transparent text-center md:text-2xl lg:text-3xl"
        >
          Featured properties
        </motion.h3>
        {/* cards div */}
        <div className="card relative flex flex-col justify-center items-center">
          <div className="cardItem flex flex-col justify-center gap-4 md:flex-row flex-wrap ">
            {filterCards.map((cardImage) => (
              <Card
                key={cardImage.description}
                image={cardImage.image}
                description={cardImage.description}
                price={cardImage.price}
                state={cardImage.state}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onHoverStart={(event) => {}}
            onHoverEnd={(event) => {}}
            className="button relative mt-4 self-center py-2"
          >
            <span className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex"></span>
            <span className="relative z-10">See more properties</span>
          </motion.button>
        </div>
        {/* this is about message in home page  */}
        <div className="about flex w-full flex-col mt-16 justify-center gap-4 md:flex-row lg:py-8">
          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="image-div flex max-w-lg border-spacing-0 rounded-t-3xl rounded-b-lg overflow-hidden shadow-3xl lg:max-w-md"
          >
            <img
              src={trustImage}
              alt="trust business"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="about-message flex flex-col max-w-lg rounded-3xl h-auto bg-offBlue px-8 py-4 shadow-sm lg:rounded-3xl">
            <p className="text-slate-800 font-bold leading-tight md:text-lg lg:text-xl">
              EliteDreams realty is a trusted real estate agency founded in the
              city of Abuja, Nigeria. Our mission is to provide exceptional
              service through integrity, professionalism and client focused
              solutions. <br /> <br /> Do you want to buy a property, or do you
              have a property for sale? <br />
              <button className=" text-yellow-700 rounded-lg">
                Contact
              </button>{" "}
              agent for free!
            </p>
            {/* advertisement div */}
            <div className="advertisement w-full h-36 bg-white/50 backdrop-blur-lg backdrop-brightness-90 mt-8 rounded-md lg:flex">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { ease: "easeOut", duration: 0.3 },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="imgDiv w-6/12 h-full overflow-hidden shadow-lg"
              >
                <Swiper
                  modules={[Autoplay]} // Enable autoplay
                  autoplay={{
                    delay: 5000, // Delay between slides (in ms)
                    disableOnInteraction: false, // Continue autoplay after interaction
                  }}
                  loop={true} // Enable looping
                  className=" w-full h-full z-10"
                >
                  {advertSwiper.map((adImage, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="bg-cover w-full h-full bg-center overflow-hidden rounded-md shadow-lg"
                        style={{ backgroundImage: `url(${adImage})` }}
                      ></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
              {/* advertisement text */}
              <div className="w-6/12 flex flex-col p-2 shadow-lg overflow-hidden">
                <h1 className="font-heroText text-deepblue font-bold">
                  Advertise your property
                </h1>
                <h3>
                  for
                  <span className="text-orange-700 text-transparent font-heroText text-lg font-bold mx-2">
                    free!
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* scenery */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="scenery relative w-full h-96 bg-cover object-cover bg-fixed p-16"
          style={{ backgroundImage: "url('/home topography.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="inner-content flex flex-col justify-center items-center">
              <h3 className="font-heroText text-center text-white text-lg md:text-2xl lg:text-3xl">
                Browse premium and verified properties
              </h3>
              <p className="text-white text-sm lg:text-lg">
                Buy a property in a serene environment
              </p>
              <button className="px-4 py-2 inset-0 bg-black bg-opacity-50 rounded-md text-white border border-offwhite mt-2">
                Search property
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Location/cities */}
      <div className="location text-center py-8 flex flex-col gap-1 bg-slate-100 lg:py-16">
        <h3 className="font-heroText bg-myGradient bg-clip-text text-transparent font-bold text-xl lg:text-3xl">
          We're in these cities
        </h3>
        <p>find properties in these cities</p>
        {/* cities */}
        <div className="cities flex justify-center flex-col gap-4 md:flex-row flex-wrap">
          {locations.map((location) => (
            <Cities
              key={location.state}
              images={location.image}
              state={location.state}
            />
          ))}
        </div>
      </div>
      {/* why choose us */}
      <div className="py-16 ">
        <h3 className="font-heroText font-bold bg-myGradient bg-clip-text text-transparent text-center text-xl md:text-2xl lg:text-3xl mb-4">
          Why choose us?
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="svgDiv gap-2 justify-center md:flex lg:gap-6 px-8"
        >
          {svgDiv.map((svg) => (
            <motion.div
              key={svg.h3}
              variants={itemVariants}
              className="flex flex-col my-2 gap-2 max-w-full rounded-md items-center md:max-w-80 bg-offBlue max-h-60 p-8"
            >
              <div className="text-4xl text-slate-800 lg:text-5xl">
                {svg.svg}
              </div>
              <div className="font-heroText text-sm font-bold lg:text-lg">
                {svg.h3}
              </div>
              <div className="text-center">{svg.p}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* interior */}
      <div className="interior py-4 md:flex justify-center gap-4 ">
        <div className="parlour rounded-md overflow-hidden w-full md:max-w-md lg:max-w-lg">
          <img
            src={parlourImage}
            className="object-cover w-full h-full"
            alt="parlor"
          />
        </div>
        <div className="w-full rounded-md px-4 py-8 md:max-w-md lg:max-w-lg bg-fadedBlue lg:p-16">
          {/* flex SVG and header text */}
          <div className="flex gap-2">
            <SiHomeadvisor className="text-3xl lg:text-3xl text-slate-800" />
            <h3 className="text-heroText bg-yellowGradient bg-clip-text text-transparent font-bold text-md lg:text-xl">
              Let’s discover your Ideal home
            </h3>
          </div>
          {/* writeup paragraph */}
          <p className="text-slate-800">
            With EliteDreams Realty, getting a property in a good neighborhood
            becomes easy. Discover a home from our rich portfolio that suits
            your taste and lifestyle.
          </p>
        </div>
      </div>
      {/* Get in touch */}
      <div className="relative bg-myGradient p-8 flex flex-col gap-4 justify-center  lg:p-16 items-center">
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
        <h1 className="text-white font-heroText font-bold md:text-3xl z-20">
          Ready to find your dream home?
        </h1>
        <h3 className="text-offwhite text-sm text-center md:text-lg z-20">
          Contact us today to start your journey to finding the perfect property
        </h3>
        <button className="p-2 bg-white text-yellow-700 rounded-lg font-bold border-yellow-900 z-20">
          Get in touch
        </button>
      </div>
    </div>
  );
}
