import React from "react";

const PagesHeader = ({ image, title, description }) => {
  return (
    <section
      className="relative bg-cover bg-fixed bg-no-repeat bg-center py-28"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-200">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
