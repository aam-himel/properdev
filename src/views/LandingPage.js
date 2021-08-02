import React from "react";

import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { KeyFeatures } from "../components/KeyFeatures";
import { Navbar } from "../components/Navigation";
import { Testimonial } from "../components/Testimonial";
import { Companies } from "../components/Companies";

const LandingPage = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section*/}
      <HeroSection />

      {/* Key Features Section */}
      <KeyFeatures />

      {/* Companies */}
      <Companies />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default LandingPage;
