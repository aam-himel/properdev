import React from "react";
import manImg from "../../assets/img/man.jpg";
import quoteImg from "../../assets/img/quote.svg";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="h-screen w-full bg-blue-50 px-10 flex items-center justify-center">
      <div className="testimonial_card bg-white shadow-xl grid grid-cols-6 items-center content-center gap-3 p-8">
        <div className=" overflow-hidden col-span-2">
          <img src={manImg} alt="man" className="px-2 " />
        </div>
        <img
          src={quoteImg}
          alt="quote"
          className="h-48 col-span-1 opacity-10"
        ></img>
        <div className="col-span-2 p-4">
          <p className="leading-7 tracking-wide font-semibold">
            This is what I have been looking for a long time. I am amazed how
            good this platform is !
          </p>
        </div>
        <img
          src={quoteImg}
          alt="quote"
          className="h-48 transform rotate-180 col-span-1 my-40 opacity-10"
        ></img>
        <div className="slider-right"></div>
      </div>
    </section>
  );
};

export default Testimonial;
