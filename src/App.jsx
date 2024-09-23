import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import logo1 from "./assets/logoipsum-265.svg";
import logo2 from "./assets/logoipsum-285.svg";
import logo3 from "./assets/logoipsum-317.svg";
import logo4 from "./assets/logoipsum-325.svg";
import logo5 from "./assets/logoipsum-330.svg";
import icon from "./assets/logo-icon.svg";
import { Button } from "./components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import { DesktopNavigation } from "./DesktopNavigation";
import Services from "./service-section";
import { ServicesDemo } from "./service-section-2";
import ContactPage from "./contact";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import AboutSection from "./about-us-section";
import TeamSection from "./team-section";
import RecentNews from "./recent-news-section";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > 50;

  const clientLogos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollPosition > 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src={logo5} alt="FinConsult Logo" />
                {/* <span
                  className={`ml-2 text-xl font-bold ${
                    scrollPosition > 50 ? "text-gray-900" : "text-white"
                  }`}
                >
                  DCB Consulting
                </span> */}
              </a>
            </div>

            {/* <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className={`${
                  scrollPosition > 50
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Services
              </a>
              <a
                href="#"
                className={`${
                  scrollPosition > 50
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
              >
                About
              </a>
              <a
                href="#"
                className={`${
                  scrollPosition > 50
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Case Studies
              </a>
              <a
                href="#"
                className={`${
                  scrollPosition > 50
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Contact
              </a>
            </nav> */}
            <DesktopNavigation isScrolled={isScrolled} />
            {/* 
            <div className="hidden md:block">
              <Button
                variant={scrollPosition > 50 ? "outline" : "secondary"}
              >
                Get in Touch
              </Button>
            </div> */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-8" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <div className="pt-20 pb-3 px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Articles
            </a>

            <div className="px-3 py-2">
              <Button className="w-full bg-[#005857] hover:bg-[#005857]/90">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <section
          className="relative bg-cover bg-center min-h-screen flex items-center"
          style={{
            backgroundImage:
              "url(https://dcbconsulting.co.ke/assets/hero1.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fade-up [--animation-delay:200ms] capitalize">
                Elevate your business potential with premium CFO services
              </h1>
              <p className="text-xl sm:text-2xl mb-8 animate-fade-up [--animation-delay:400ms]">
                Leveraging 35+ years of finance experience to drive your
                business forward
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

        {/* About Us Section */}
        <AboutSection />

        {/* <Services /> */}
        <ServicesDemo />

        {/* Clients section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Our Esteemed Clients{" "}
            </h2>
            <div className="flex overflow-hidden space-x-16 group">
              <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
                {clientLogos.concat(clientLogos).map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={160}
                    height={80}
                    className="max-w-none"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

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
        {/* <footer className="bg-white text-gray-600 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <img
                  src={icon}
                  alt="Company Logo"
                  className="h-8 w-auto mb-4"
                />
                <p className="text-sm">
                  We're growing up your business with personal AI manager.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      News and PR
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm">
                &copy; 2024 DCB Consulting LLP. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </footer> */}

        {/* Footer 2 */}
        <footer className="bg-white text-gray-600 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <img
                src={logo5}
                alt="DCB Consulting"
                className="h-8 w-auto mb-6"
              />
              <nav className="flex flex-wrap justify-center gap-6">
                <a href="#" className="hover:text-gray-900">
                  Overview
                </a>
                <a href="#" className="hover:text-gray-900">
                  Features
                </a>
                <a href="#" className="hover:text-gray-900">
                  Pricing
                </a>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
                <a href="#" className="hover:text-gray-900">
                  Help
                </a>
                <a href="#" className="hover:text-gray-900">
                  Privacy
                </a>
              </nav>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm mb-4 sm:mb-0">
                  © 2024 DCB Consulting LLP. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
