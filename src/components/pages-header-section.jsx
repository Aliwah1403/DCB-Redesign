import React from "react";

const PagesHeader = () => {
  return (
    <section
      className="relative bg-cover bg-center py-28"
      style={{
        backgroundImage: 'url("https://dcbconsulting.co.ke/assets/hero1.jpeg")',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Your Financial Future
          </h1>
          <p className="text-xl text-gray-200">
            Guiding businesses towards financial clarity and strategic growth
            through expert consultancy and tailored solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
