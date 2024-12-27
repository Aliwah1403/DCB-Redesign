import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import icon from "@/assets/logo-icon.svg";

const FooterWBg = () => {
  return (
    <footer className="bg-gradient-to-r from-[#005857] to-[#00857e] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src={icon} alt="Company Logo" className="h-8 w-auto mb-4" />
            <p className="text-sm">
              We're growing up your business with personal AI manager.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-900">
                  About us
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a href="/#team" className="hover:text-gray-900">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact-us" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:text-gray-900">
                  Articles
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:text-gray-900">
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
            <a href="#" className="text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWBg;
