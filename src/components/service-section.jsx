import {
  ChartPieIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  BarChartIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const services = [
  {
    title: "Business Health Check",
    description:
      "A thorough review of business operations, finances, and tax status is conducted to mitigate risks and optimize processes.",
    icon: ChartPieIcon,
  },
  {
    title: "Strategy",
    description:
      "Expert guidance on investment opportunities to maximize returns and minimize risks.",
    icon: TrendingUpIcon,
  },
  {
    title: "Fractional CFO Services",
    description:
      "Thorough analysis and mitigation strategies to protect your business from financial risks.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Fundraising & Investor Readiness",
    description:
      "In-depth financial reporting and analytics to drive data-informed business decisions.",
    icon: BarChartIcon,
  },
  {
    title: "Fundraising & Investor Readiness",
    description:
      "In-depth financial reporting and analytics to drive data-informed business decisions.",
    icon: BarChartIcon,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#005857] uppercase tracking-wide mb-2">
            Services
          </h3>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
           Financial Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming business finance: Visionary strategies, world-class
            tools and unwavering support for enterpreneural success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg border-none bg-transparent"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-[#005857] rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
