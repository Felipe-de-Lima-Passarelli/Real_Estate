"use client";

//Next
import Image from "next/image";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [actualTestimonials, setActualTestimonials] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActualTestimonials((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4" id="testimonials">
      <div
        style={{ backgroundImage: `url(/img/testimonials.jpg)` }}
        className="h-100 bg-cover bg-center bg-no-repeat duration-700"
      >
        <div
          className="bg-black/75 h-full flex flex-col justify-center items-center gap-5"
          key={actualTestimonials}
        >
          <div className="flex flex-col items-center gap-2" id="imgText-entry">
            <h1 className="text-white text-4xl font-semibold">
              What&apos;s Our Customer Say
            </h1>
            <p className="border-2 inline-block w-10 border-[#0FCA98]"></p>
            <p></p>
          </div>
          <div
            className="flex flex-row gap-8 w-[43%] text-white"
            id="imgText-entry"
          >
            <Image
              src={`/img/parent${actualTestimonials}.png`}
              alt="Profile Image"
              width={1000}
              height={1000}
              className="w-25 h-25 shrink-0 hover:scale-110 duration-300"
            />
            <div className="flex flex-col gap-5">
              <p className="font-semibold opacity-80">
                Lorem ipsum gravida nibh vel velit actor aliquetn sollicitudirem
                quibibendum auci elit cons equat ipsutis sem nibh id elit.
              </p>
              <div className="flex flex-col gap-2">
                <h1 className="font-black text-xl">Alex Schmidt</h1>
                <p className="font-semibold opacity-80">CEO Netflix</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
