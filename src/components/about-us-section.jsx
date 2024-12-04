import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import icon from "@/assets/logo-icon.svg";
import aboutImg from "@/assets/about-us-image.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };
  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="left"
            animate={isInView ? "visible" : "right"}
            variants={MULTIDIRECTION_SLIDE_VARIANTS}
            transition={{ duration: 1 }}
          >
            <div className="mb-6">
              <img src={icon} alt="DCB LLP Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-[#005857]">
              Bridging Financial Excellence to Africa's Growth Companies
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              DCB LLP is a Kenyan corporate finance consulting firm with over 35
              years of combined expertise. We provide high quality, affordable
              financial solutions to early and growth companies in Africa,
              leveraging our industry knowledge and extensive networks. Our
              agile team delivers customized strategies to bridge the gap
              between local businesses and international financial practices.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-[#005857] hover:bg-[#007F7C]">
                Learn More
              </Button>
              <Button variant="outline">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={MULTIDIRECTION_SLIDE_VARIANTS}
            transition={{ duration: 1 }}
            className="aspect-w-4 aspect-h-3"
          >
            <img
              src={aboutImg}
              alt="About DCB LLP"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
