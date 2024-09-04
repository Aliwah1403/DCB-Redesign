import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  ChartPieIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  BarChartIcon,
} from "lucide-react";

export function ServicesDemo() {
  const features = [
    {
      title: "Business Health Check",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <ChartPieIcon />,
    },
    {
      title: "Strategy",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <TrendingUpIcon />,
    },
    {
      title: "Fractional CFO Services",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Fundraising & Investor Readiness",
      description: "We just cannot be taken down by anyone.",
      icon: <BarChartIcon />,
    },
    {
      title: "Fundraising & Investor Readiness",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <>
      <div className="text-center py-16">
        <h3 className="text-sm font-semibold text-[#005857] uppercase tracking-wide mb-2">
          Services
        </h3>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Financial Management Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming business finance: Visionary strategies, world-class tools
          and unwavering support for enterpreneural success
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10  max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
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
