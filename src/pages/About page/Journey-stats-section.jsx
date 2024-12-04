import React from "react";

const milestones = [
  {
    date: "Aug 2021",
    title: "Founded company",
    description:
      "We carry out an extensive analysis of your company's finances, operations, and tax situation in order to find areas where risks can be reduced, workflows can be improved, and value can be added.",
  },
  {
    date: "Dec 2021",
    title: "Secured $20M in funding",
    description:
      "If you already have a corporate strategy, we help you update and develop it. We also support the finance and operational strategies, making sure they are continuously reviewed and improved.",
  },
  {
    date: "Feb 2022",
    title: "Reached 100 business",
    description:
      "As a strategic finance partner, we assist businesses in achieving their full finance potential by implementing initiatives like internal investor readiness, financial health checks, and upskilling current teams and processes.",
  },
  {
    date: "Dec 2022",
    title: "Global launch of business",
    description:
      "We will utilize our networks to identify potential funders, assist in investor document development, support due diligence, and engage with funders until funding is secured.",
  },
];

const stats = [
  {
    number: "35+",
    label: "Years of Experience",
    description:
      "Combined expertise in financial consulting and business advisory.",
  },
  {
    number: "50+",
    label: "Clients Served",
    description: "Trusted by businesses across diverse industries.",
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
    description: "Consistently exceeding client expectations.",
  },
  {
    number: "$100M+",
    label: "Capital Raised",
    description: "Successfully secured funding for our clients.",
  },
];

const JourneyStats = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Journey Description */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005857] mb-6">
              Our Journey: From Startup to Industry Powerhouse
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              At DCB Consulting, our mission is to empower businesses across
              East Africa with expert financial guidance and innovative
              solutions. We are committed to driving sustainable growth and
              operational excellence for our clients, leveraging our deep
              industry knowledge and tailored approach to meet each
              organization's unique needs.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-medium  mb-10">{stat.number}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section  */}
        <div className="mt-16">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 flex items-center">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#005857]"></span>
                  <span className="text-[#005857] font-medium ml-2">
                    {milestone.date}
                  </span>
                  {index < milestones.length - 1 && (
                    <div className="flex-1 h-[1px] border-t border-solid border-gray-200 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
            {milestones.map((milestone, index) => (
              <div key={`content-${index}`} className="mt-4">
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyStats;
