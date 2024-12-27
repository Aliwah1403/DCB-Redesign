import React from "react";
import { Separator } from "@/components/ui/separator";
import statsImage from "@/assets/stats-bg.jpg";
import { NumberTicker } from "./NumberTicker";

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[500px]">
            <img
              src={statsImage}
              alt="DCB Consulting Team"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          </div>

          <div className="lg:pl-8">
            <div className="max-w-xl">
              <h3 className="text-[#005857] font-semibold mb-2">
                Our track record
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Trusted by businesses across East Africa
              </h2>
              <p className="text-gray-600 mb-8">
                With over 35 years of combined experience in finance and
                business advisory, we've helped numerous businesses achieve
                their financial goals and drive sustainable growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className=" flex flex-col gap-3 border-l border-gray-900/10 pl-6">
                  <p className="text-4xl font-medium text-[#005857]">
                    <NumberTicker value={35} className="text-[#005857]" />+
                  </p>
                  <p className="text-gray-600">Years of experience</p>
                </div>
                <div className=" flex flex-col gap-3 border-l border-gray-900/10 pl-6">
                  <p className="text-4xl font-medium text-[#005857]">
                    {" "}
                    <NumberTicker value={50} className="text-[#005857]" />+
                  </p>
                  <p className="text-gray-600">Clients served</p>
                </div>
                <div className=" flex flex-col gap-3 border-l border-gray-900/10 pl-6">
                  <p className="text-4xl font-medium text-[#005857]">
                    {" "}
                    <NumberTicker value={98} className="text-[#005857]" />%
                  </p>
                  <p className="text-gray-600">Client satisfaction</p>
                </div>
                <div className=" flex flex-col gap-3 border-l border-gray-900/10 pl-6">
                  <p className="text-4xl font-medium text-[#005857]">
                    $ <NumberTicker value={100} className="text-[#005857]" />
                    M+
                  </p>
                  <p className="text-gray-600">Capital raised</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
