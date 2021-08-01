import React from "react";
import googleIcon from "../../../assets/icons/google.svg";
import slackIcon from "../../../assets/icons/slack.svg";
import uberIcon from "../../../assets/icons/uber.svg";
import samsungIcon from "../../../assets/icons/samsung.svg";
const Companies = () => {
  return (
    <section className="h-96 w-full bg-gray-900 flex flex-col items-center justify-center -mt-3 overflow-hidden ">
      <h1 className="text-gray-400 font-bold py-8 text-2xl uppercase">
        trusted by 100+ companies all over the world
      </h1>
      {/* <h1>Company 1</h1> */}
      <div className="flex items-center justify-center space-x-44 py-10">
        <img src={slackIcon} alt="slack " />
        <img src={samsungIcon} alt="samsung " />
        <img src={googleIcon} alt="google" />
        <img src={uberIcon} alt="uber" />
      </div>
    </section>
  );
};

export default Companies;
