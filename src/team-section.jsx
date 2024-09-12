import React from "react";
import { Phone, Mail, Linkedin } from "lucide-react";
import chrisImage from "./assets/Chris.jpg";
import denisImage from "./assets/Denis.jpg";

const teamMembers = [
  {
    name: "Chrispinus Otieno",
    position: "Managing Partner",
    description: "Chris is a visionary leader with extensive experience",
    imageSrc: chrisImage,
    phone: "+254712345678",
    linkedin: "https://www.linkedin.com/",
    email: "chris.otieno@example.com",
  },
  {
    name: "Denis Nyanja",
    position: "Founding Partner",
    description: "Denis is a visionary leader with extensive experience",
    imageSrc: denisImage,
    phone: "+254712345678",
    linkedin: "https://www.linkedin.com/",
    email: "denis.nyanja@example.com",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#005857] uppercase tracking-wide mb-2">
            Expertise
          </h3>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the leadership team and key members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
           
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{member.position}</p>
              <p className="text-center mb-6">{member.description}</p>

              <div className="flex space-x-4">
                <a
                  href={`tel:${member.phone}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Phone size={24} />
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
