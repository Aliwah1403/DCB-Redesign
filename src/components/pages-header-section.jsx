import React from "react";

const PagesHeader = ({ image, title, description }) => {
  return (
    <section
      className="relative bg-cover bg-center py-40 md:py-52"
      style={{
        backgroundImage: `url(${image})`,
        minHeight: "480px",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-up [--animation-delay:200ms]">
            {title}
          </h1>
          <p className="text-xl text-gray-200 animate-fade-up [--animation-delay:400ms]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
