import React from "react";

import { Footer } from "../components/ui/Footer";
import { HeroSection } from "../components/ui/HeroSection";
import { KeyFeatures } from "../components/ui/KeyFeatures";
import { Navbar } from "../components/ui/Navigation";
import { Testimonial } from "../components/ui/Testimonial";
import { Companies } from "../components/ui/Companies";

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
