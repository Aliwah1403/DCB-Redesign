import { cn } from "@/lib/utils";
import { IconActivity } from "@tabler/icons-react";
import { TrendingUpIcon, Target, Briefcase, Landmark } from "lucide-react";

export function ServicesDemo() {
  const features = [
    {
      title: "Business Health Check",
      description:
        "We carry out an extensive analysis of your company's finances, operations, and tax situation in order to find areas where risks can be reduced, workflows can be improved, and value can be added.",
      icon: <IconActivity />,
    },
    {
      title: "Strategy",
      description:
        "If you already have a corporate strategy, we help you update and develop it. We also support the finance and operational strategies, making sure they are continuously reviewed and improved.",
      icon: <Target />,
    },
    {
      title: "Fractional CFO Services",
      description:
        "As a strategic finance partner, we assist businesses in achieving their full finance potential by implementing initiatives like internal investor readiness, financial health checks, and upskilling current teams and processes.",
      icon: <Briefcase />,
    },
    {
      title: "Fundraising & Investor Readiness",
      description:
        "We will utilize our networks to identify potential funders, assist in investor document development, support due diligence, and engage with funders until funding is secured.",
      icon: <TrendingUpIcon />,
    },
    {
      title: "Corporate Finance",
      description:
        "We analyze your operations to optimize working capital utilization, analyze financial accounts and projections, and provide advice on the most suitable capital structure.",
      icon: <Landmark />,
    },
  ];
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="services">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#005857] uppercase tracking-wide mb-2">
            Services
          </h3>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Financial Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming business finance: Visionary strategies, world-class
            tools and unwavering support for enterpreneural success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10  max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#005857] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
