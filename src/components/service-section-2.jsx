import { cn } from "@/lib/utils";
import { IconActivity } from "@tabler/icons-react";
import {
  TrendingUpIcon,
  Target,
  Briefcase,
  Landmark,
  ArrowRight,
  MessageSquare,
  ClipboardCheck,
  CheckCircle,
  ListTodo,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  const cfoFeatures = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      text: "Discussions",
    },
    {
      icon: <ClipboardCheck className="h-5 w-5" />,
      text: "Feedback",
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Approvals",
    },
    {
      icon: <ListTodo className="h-5 w-5" />,
      text: "Task Management",
    },
  ];

  const testimonials = [
    {
      company: "TechFin Solutions",
      logo: "/placeholder.svg?height=32&width=120",
      quote:
        "Our team has seen an incredible boost in financial efficiency since adopting ScaleCFO services. It's a game-changer for us!",
      author: {
        name: "Sarah Williams",
        role: "Head of Finance",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      company: "GrowthCap Ventures",
      logo: "/placeholder.svg?height=32&width=120",
      quote:
        "We've reduced our financial planning cycles by 30% thanks to the strategic guidance ScaleCFO provides.",
      author: {
        name: "David Chen",
        role: "CEO",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      company: "East Africa Traders",
      logo: "/placeholder.svg?height=32&width=120",
      quote:
        "This partnership has streamlined our development process and improved team collaboration like never before.",
      author: {
        name: "Maria Omondi",
        role: "Operations Director",
        image: "/placeholder.svg?height=40&width=40",
      },
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

      {/* CFO Service Section */}
      <section className="bg-gradient-to-r from-[#005857] to-[#007c7a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                ScaleCFO: Your Dedicated Financial Leadership
              </h2>
              <p className="mt-4 text-lg text-gray-100">
                Experience top-tier CFO services tailored for growing
                businesses. ScaleCFO, our specialized division, offers strategic
                financial guidance to elevate your company's financial
                performance.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary">
                  <Link href="https://scalecfo.example.com">
                    Explore ScaleCFO
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:relative lg:h-full">
              <div className="bg-white rounded-lg shadow-xl p-6 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-5/6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose ScaleCFO?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Expert financial strategy and planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Tailored solutions for growing businesses</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Seamless integration with your team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
      <div className="mb-4 relative z-10 px-10 text-[#005857]">{icon}</div>
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
