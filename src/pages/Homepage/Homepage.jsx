import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";


import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Services from "@/components/service-section";
import { ServicesDemo } from "@/components/service-section-2";

import AboutSection from "@/components/about-us-section";
import TeamSection from "@/components/team-section";
import RecentNews from "@/components/recent-news-section";
import StatsSection from "@/components/stats-section";
import FooterDesign1 from "@/components/footer-design-1";
import Header from "@/components/header";
import HeroSection from "./HeroSection";
import ClientsSlider from "@/components/clients-slider";
const Homepage = () => {
  return (
    <main className="flex-grow">
      {/* Landing page hero section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutSection />

      {/* <Services /> */}
      <ServicesDemo />

      {/* stats section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Clients section */}
      <ClientsSlider />

      {/* Recent News */}
      <RecentNews />

      {/* CTA Section 1*/}
      <section className="bg-gradient-to-r from-[#005857] to-[#00857e] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-6">
            Ready to Transform your financial strategy?
          </h2>
          <p className="mx-auto max-w-[700px] text-lg mb-8 text-white">
            Let's discuss how we can help your business achieve its financial
            goals and drive sustainable growth
          </p>
          <div className="mt-8">
            <Button className="bg-white text-[#005857] hover:bg-gray-100 capitalize">
              Schedule your free consultation
              <ChevronRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer 1*/}
      <FooterDesign1 />
    </main>
  );
};

export default Homepage;
