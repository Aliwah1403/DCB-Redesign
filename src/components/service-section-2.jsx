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
      <section className="relative bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-[#005857]">
                  For Professionals
                </p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                  Better Team.
                  <br />
                  <span className="text-gray-500">less meetings.</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-lg">
                Experience dedicated CFO services that streamline your financial
                operations. Our expert team helps you focus on growth while we
                handle the strategic financial planning and execution.
              </p>
              <div className="space-y-4">
                {cfoFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-600"
                  >
                    <div className="flex-shrink-0 text-[#005857]">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button asChild className="bg-[#005857] hover:bg-[#005857]/90">
                  <Link href="/scale-cfo">
                    Learn more about ScaleCFO
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Client success story carousel */}
            <div className="relative lg:mt-8">
              <div className="relative h-[450px] bg-white rounded-lg shadow-lg overflow-hidden p-8">
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200" />
                      <div>
                        <h4 className="font-semibold">Sarah Johnson</h4>
                        <p className="text-sm text-gray-600">
                          CEO, Tech Innovations
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-700 italic">
                      "ScaleCFO transformed our financial operations. We've seen
                      a 40% increase in operational efficiency and better
                      strategic planning."
                    </blockquote>
                    <div className="flex space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <button
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === 0 ? "bg-[#005857]" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Service process timeline */}
            {/* <div className="relative lg:mt-8">
              <div className="relative h-[450px] bg-white rounded-lg shadow-lg overflow-hidden p-8">
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Initial Assessment",
                      desc: "Comprehensive review of your financial operations",
                    },
                    {
                      step: "2",
                      title: "Strategy Development",
                      desc: "Customized financial roadmap creation",
                    },
                    {
                      step: "3",
                      title: "Implementation",
                      desc: "Seamless integration of CFO services",
                    },
                    {
                      step: "4",
                      title: "Ongoing Support",
                      desc: "Continuous optimization and guidance",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#005857] text-white flex items-center justify-center">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* scaleCFO Logo/Icon */}
            {/* <div className="relative lg:mt-8">
              <div className="relative h-[450px] bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-32 h-32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100" height="100" rx="8" fill="#005857" />
                    <path
                      d="M30 30H70V70H30V30Z"
                      fill="white"
                      stroke="#005857"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
            </div> */}
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
