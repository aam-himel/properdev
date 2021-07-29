import React from "react";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { KeyFeatures } from "../components/KeyFeatures";
import { Navbar } from "../components/Navigation";
import { Testimonial } from "../components/Testimonial";

const LandingPage = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section*/}
      <HeroSection />

      {/* Key Features Section */}
      <KeyFeatures />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default LandingPage;
