import React from "react";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import FooterDesign1 from "@/components/footer-design-1";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterDesign1 />
    </div>
  );
};

export default RootLayout;
