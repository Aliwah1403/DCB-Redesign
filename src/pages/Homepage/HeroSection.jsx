import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{
        backgroundImage: "url(https://dcbconsulting.co.ke/assets/hero1.jpeg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fade-up [--animation-delay:200ms] capitalize">
            Elevate your business potential with premium CFO services
          </h1>
          <p className="text-xl sm:text-2xl mb-8 animate-fade-up [--animation-delay:400ms]">
            Leveraging 35+ years of finance experience to drive your business
            forward
          </p>

          <Button
            size="lg"
            className="animate-fade-in-up animation-delay-400 bg-[#005857] hover:bg-[#005857]/90"
          >
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
