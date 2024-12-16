import { ServicesDemo } from "@/components/service-section-2";
import AboutSection from "@/components/about-us-section";
import TeamSection from "@/components/team-section";
import RecentNews from "@/components/recent-news-section";
import StatsSection from "@/components/stats-section";
import FooterDesign1 from "@/components/footer-design-1";
import HeroSection from "./HeroSection";
import ClientsSlider from "@/components/clients-slider";
import CallToAction from "@/components/call-to-action";

const Homepage = () => {
  return (
    <>
      {/* Hero section */}
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
      <CallToAction />
    </>
  );
};

export default Homepage;
