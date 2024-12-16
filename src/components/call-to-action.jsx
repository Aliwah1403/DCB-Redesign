import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-[#005857] to-[#00857e] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-6">
          Ready to Transform your financial strategy?
        </h2>
        <p className="mx-auto max-w-[700px] text-lg mb-8 text-white">
          Let's discuss how we can help your business achieve its financial
          goals and drive sustainable growth
        </p>
        <div className="mt-8">
          <Button className="bg-white text-[#005857] hover:bg-gray-100 capitalize">
            Schedule your free consultation
            <ChevronRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
