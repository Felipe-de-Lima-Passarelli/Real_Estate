"use client";

//Next
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [actualBanner, setActualBanner] = useState<number>(1);

  const prevBanner = () => {
    if (actualBanner === 1) {
      setActualBanner(3);
    } else {
      setActualBanner(actualBanner - 1);
    }
  };

  const nextBanner = () => {
    if (actualBanner === 3) {
      setActualBanner(1);
    } else {
      setActualBanner(actualBanner + 1);
    }
  };

  return (
    <header
      style={{ backgroundImage: `url(/img/slide${actualBanner}.jpg)` }}
      className="h-screen bg-cover bg-center bg-no-repeat duration-700"
      id="header"
    >
      <div className="bg-black/60 h-full">
        <div className="flex flex-row justify-around pt-[1%]">
          <Image
            src="/img/logo.png"
            alt="Real Estate Logo"
            width={300}
            height={80}
            className="w-42.5 h-12.5"
          />
          <ul className="flex flex-row items-start gap-8">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="text-center text-white mt-80 relative">
          <button
            className="absolute top-[4%] left-[10%] text-4xl cursor-pointer"
            onClick={() => prevBanner()}
          >
            &lt;
          </button>
          <button
            className="absolute top-[4%] right-[10%] text-4xl cursor-pointer"
            onClick={() => nextBanner()}
          >
            &gt;
          </button>
          <h1 className="text-md md:text-3xl lg:text-4xl font-black">
            The perfect place for your family
          </h1>
          <button className="mt-10 border border-[#12BB8F] py-[0.3%] px-[0.5%] text-[#12BB8F] font-semibold rounded-sm cursor-pointer">
            View more
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
