import React, { useEffect, useState } from "react";
import { DesktopNavigation } from "@/components/DesktopNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FooterDesign1 from "@/components/footer-design-1";

import logo5 from "@/assets/logoipsum-330.svg";
import { Menu, X } from "lucide-react";

const ContactUs = () => {
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
  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all bg-[#005857] duration-300 `}
        // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        //   scrollPosition > 50 ? "bg-white shadow-md" : "bg-transparent"
        // }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src={logo5} alt="FinConsult Logo" />
              </a>
            </div>

            <DesktopNavigation isScrolled={isScrolled} />

            <Button
              variant="ghost"
              className={`${scrollPosition > 50 ? "text-black" : "text-white"}`}
            >
              Get in touch
            </Button>
            {/* <Button className="bg-[#009793] hover:bg-[#009793]/90">
              Get in touch
            </Button> */}

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

      {/* Mobile menu nav */}
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
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help. Chat to our friendly team and get set up and
                ready to go in just 5 minutes.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex">
                    <Select>
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="US" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">US</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                        <SelectItem value="ca">CA</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="flex-1 ml-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Services</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Financial Planning",
                      "Investment Management",
                      "Risk Assessment",
                      "Corporate Finance",
                      "Fundraising",
                      "Other",
                    ].map((service) => (
                      <div
                        key={service}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={service.toLowerCase().replace(" ", "-")}
                        />
                        <Label
                          htmlFor={service.toLowerCase().replace(" ", "-")}
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send message
                </Button>
              </form>
            </div>

            <div className="hidden md:block">
              {/* Map placeholder */}
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map goes here</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterDesign1 />
    </div>
  );
};

export default ContactUs;
