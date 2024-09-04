import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import logo1 from "./assets/logoipsum-265.svg";
import logo2 from "./assets/logoipsum-285.svg";
import logo3 from "./assets/logoipsum-317.svg";
import logo4 from "./assets/logoipsum-325.svg";
import logo5 from "./assets/logoipsum-330.svg";
import { Button } from "./components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import { DesktopNavigation } from "./DesktopNavigation";
import Services from "./service-section";

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
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
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
              Services
            </a>
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
              Case Studies
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

        <Services />
      </main>
    </div>
  );
}

export default App;
