import React from "react";
import logo1 from "@/assets/logoipsum-265.svg";
import logo2 from "@/assets/logoipsum-285.svg";
import logo3 from "@/assets/logoipsum-317.svg";
import logo4 from "@/assets/logoipsum-325.svg";
import logo5 from "@/assets/logoipsum-330.svg";

const ClientsSlider = () => {
  const clientLogos = [logo1, logo2, logo3, logo4, logo5];
  return (
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
  );
};

export default ClientsSlider;
