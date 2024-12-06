import React, { useEffect, useState } from "react";
import { DesktopNavigation } from "@/components/DesktopNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FooterDesign1 from "@/components/footer-design-1";

import logo5 from "@/assets/logoipsum-330.svg";
import { Menu, X, Building, Mail, Phone, Clock, MapPin } from "lucide-react";
import FooterWBg from "@/components/footer-w-bg";

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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 723 543 401",
      action: "Call us",
      link: "tel:+254723543401",
    },
    {
      icon: Mail,
      title: "Email",
      details: "company@dcbconsulting.co.ke",
      action: "Write to us",
      link: "mailto:company@dcbconsulting.co.ke",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Nairobi, Kenya",
      action: "Get directions",
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday, 9AM - 5PM",
      action: "View calendar",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header
        // className={`fixed top-0 left-0 right-0 z-50 transition-all bg-[#005857] duration-300 `}

        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollPosition > 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
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

      {/* Contact Us Form - 1 */}
      {/* <main className="flex-grow">
        
        <section className="relative bg-cover bg-[#005857] py-28 ">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Let's Start a Conversation
              </h1>
              <p className="text-xl text-gray-200">
                Connect with our expert team to discuss how we can help
                transform your business's financial future.
              </p>
            </div>
          </div>
        </section>

        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <item.icon className="h-6 w-6 text-[#005857] mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.details}</p>
                    <a
                      href={item.link}
                      className="text-[#005857] hover:text-[#005857]/80 font-medium"
                    >
                      {item.action} →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                          <SelectValue placeholder="KE" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ke">KE</SelectItem>
                          <SelectItem value="ug">UG</SelectItem>
                          <SelectItem value="tz">TZ</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        className="flex-1 ml-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Services of Interest</Label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        "Business Health Check",
                        "Strategy",
                        "Fractional CFO Services",
                        "Fundraising",
                        "Corporate Finance",
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
                      placeholder="Tell us about your business needs..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#005857] hover:bg-[#005857]/90"
                  >
                    Send message
                  </Button>
                </form>
              </div>

              <div className="lg:pl-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    What happens next?
                  </h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-none w-8 h-8 rounded-full bg-[#005857] text-white flex items-center justify-center">
                        1
                      </span>
                      <div>
                        <h4 className="font-medium">Initial Response</h4>
                        <p className="text-gray-600">
                          We'll contact you within 24 hours to acknowledge your
                          inquiry.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-none w-8 h-8 rounded-full bg-[#005857] text-white flex items-center justify-center">
                        2
                      </span>
                      <div>
                        <h4 className="font-medium">Discovery Call</h4>
                        <p className="text-gray-600">
                          Schedule a call to discuss your business needs in
                          detail.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-none w-8 h-8 rounded-full bg-[#005857] text-white flex items-center justify-center">
                        3
                      </span>
                      <div>
                        <h4 className="font-medium">Proposal</h4>
                        <p className="text-gray-600">
                          Receive a tailored proposal based on your
                          requirements.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> */}

      {/* Contact Us Form - 2 */}
      <main className="flex-grow">
        {/* Hero Section with Photo Background */}
        <section
          className="relative bg-cover bg-center py-28"
          style={{
            backgroundImage:
              'url("https://dcbconsulting.co.ke/assets/hero1.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl ">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Let's Start a Conversation
              </h1>
              <p className="text-xl text-gray-200">
                Connect with our expert team to discuss how we can help
                transform your business's financial future.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <item.icon className="h-6 w-6 text-[#005857] mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.details}</p>
                    <a
                      href={item.link}
                      className="text-[#005857] hover:text-[#005857]/80 font-medium"
                    >
                      {item.action} →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Centered Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Send us a message
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
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
                        <SelectValue placeholder="KE" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ke">KE</SelectItem>
                        <SelectItem value="ug">UG</SelectItem>
                        <SelectItem value="tz">TZ</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      className="flex-1 ml-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Services of Interest</Label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "Business Health Check",
                      "Strategy",
                      "Fractional CFO Services",
                      "Fundraising",
                      "Corporate Finance",
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
                    placeholder="Tell us about your business needs..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#005857] hover:bg-[#005857]/90"
                >
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <FooterWBg />
    </div>
  );
};

export default ContactUs;
