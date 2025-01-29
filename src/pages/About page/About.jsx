import TeamSection from "@/components/team-section";
import RecentNews from "@/components/recent-news-section";
import JourneyStats from "./Journey-stats-section";
import ClientsSlider from "@/components/clients-slider";
import CallToAction from "@/components/call-to-action";
import PagesHeader from "@/components/pages-header-section";
import aboutBg from "@/assets/about-page-bg.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section with Photo Background */}
      <PagesHeader
        title="Your Financial Future"
        image={"about-page-bg_lgohut"}
        description="Guiding businesses towards financial clarity and strategic growth through expert consultancy and tailored solutions"
      />

      {/* Stats section */}
      <JourneyStats />

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

export default About;
