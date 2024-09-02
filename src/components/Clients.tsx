import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

export const Clients = () => {
  return (
    <div className=" py-20" id="testimonials">
      <h1 className="  text-balance  max-w-prose font-bold  text-center text-[40px] md:text-5xl lg:text-6xl ">
        Kind words from
        <span className="text-purple-700"> satisfied clients</span>
      </h1>
      <div
        className="flex 
      max-lg:mt-10
      flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 ">
          {companies.map(({ id, img, name, nameImg }) => (
            <div
              key={id}
              className="flex md:max-w-60
                max-w-32 gap-2
                "
            >
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div> */}

        {/* <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        /> */}
      </div>
    </div>
  );
};
