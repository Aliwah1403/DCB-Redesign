import TeamSection from "@/components/team-section";
import RecentNews from "@/components/recent-news-section";
import JourneyStats from "./Journey-stats-section";
import ClientsSlider from "@/components/clients-slider";
import CallToAction from "@/components/call-to-action";
import PagesHeader from "@/components/pages-header-section";

const About = () => {
  return (
    <>
      {/* Hero Section with Photo Background */}
      <PagesHeader />

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
