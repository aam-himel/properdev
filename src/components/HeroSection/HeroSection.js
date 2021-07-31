import React from "react";
import CareerProgress from "../../assets/img/undraw_career_progress_ivdb.svg";

const HeroSection = () => {
  return (
    <section className="h-full grid grid-cols-2 place-content-center place-items-center ">
      <div className="pl-12">
        <h1 className="text-7xl font-bold">
          Track your <span className="text-green-400 underline ">progress</span>{" "}
          and rich to the
          <span className="text-red-400 underline"> top</span>
        </h1>
        <p className="mt-8 leading-6 text-lg pr-8">
          Developer have to deal with many things at a time. But most of the
          time they don't even know wheather they are doing good or not. Here we
          will help you to keep track of your progress and Help you to become a
          proper dev
        </p>
        <div className="mt-8 text-lg font-bold">
          <a
            href="/"
            className="px-12 py-4 border-2 border-blue-800 inline-block mr-4 rounded"
          >
            Sign In
          </a>
          <a
            href="/"
            className="px-12 py-4 bg-blue-800 text-white inline-block rounded"
          >
            Sign Up
          </a>
        </div>
      </div>
      <div className=" bg-hero-img h-screen w-full bg-cover rounded"></div>
    </section>
  );
};

export default HeroSection;
