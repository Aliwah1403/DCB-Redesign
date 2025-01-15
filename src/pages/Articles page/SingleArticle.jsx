import { useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageTitle from "@/page-title";

import {
  Menu,
  X,
  ChevronRight,
  Linkedin,
  Twitter,
  Facebook,
  Link2,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import chrisImage from "@/assets/Chris.jpg";
import denisImage from "@/assets/Denis.jpg";
import newsPhoto from "@/assets/blog1.jpg";
import news2 from "@/assets/blog2.jpg";
import news3 from "@/assets/blog3.jpg";
import { format } from "date-fns";
import CallToAction from "@/components/call-to-action";
import { slugify } from "@/lib/utils";
import NotFound from "@/not-found";

const news = [
  {
    date: "May 23, 2024",
    author: "Chris Otieno",
    authorProfile: chrisImage,
    title: "Time hospitals in Africa raised capital through stock market",
    slug: "time-hospitals-in-africa-raised-capital-through-stock-market",
    bgPhoto: newsPhoto,
  },
  {
    date: "June 15, 2024",
    author: "Denis Nyanja",
    authorProfile: denisImage,
    title: "The impact of fintech on African economies",
    slug: "the-impact-of-fintech-on-african-economies",
    bgPhoto: news2,
  },
  {
    date: "July 2, 2024",
    author: "Denis Nyanja",
    authorProfile: denisImage,
    title: "Sustainable investing: The future of finance in Africa",
    slug: "sustainable-investing-the-future-of-finance-in-africa",
    bgPhoto: news3,
  },
];

const blogPost = {
  category: "Financial Strategy",
  title: "Time hospitals in Africa raised capital through stock market",
  author: {
    name: "Chris Otieno",
    image: chrisImage,
    role: "Financial Analyst",
  },
  date: "May 23, 2024",
  readTime: "5 min read",
  content: `
 Healthcare is a basic need. Quality, affordable, and accessible healthcare is a priority for everyone.

Over the last few months, we have had a standoff between the Ministry of Health and the doctors, allegedly over a collective bargaining agreement (CBA) issue that appeared to be minor—Sh206,000—that applied to 112 interns in four Nairobi-based hospitals, yet the crisis affected millions of Kenyans across the country.

The standoff appeared mainly to be a remuneration issue, one of many challenges of operating healthcare businesses. We are yet to see the details of the meeting that ended the strike; hopefully, the impasse will not reappear in the coming years.

To operate a successful healthcare venture, you need good infrastructure (patient- journey incorporated facility, medical equipment, & ICT systems), adequate human capital (doctors & support staff), working capital, and adequate corporate governance structures.

Fully fledged hospitals with inpatient and outpatient sections are capital- and cash- intensive businesses that have the potential for growth through expansion with deliberate and significant investments to reduce the quality gap in various parts of the country. With adequate funding, the prerequisites mentioned can easily be met.

The attempt to fill the investment gap has seen the entry of alternative investment channels such as private equity from the Western world to support the local entrepreneurs who have bootstrapped their investments with support from insufficient debt capital by the local banks.

The few PE investments have been overly concentrated in Nairobi County, which supports only 4.5 million Kenyans, with a few now starting to penetrate other regions. The outcome is that we have an enormous, underserved population in different parts of Kenya, and indeed across rural Africa.

Because we have established that capital follows returns, and we have seen a wave of PE funds coming into the African healthcare space, it, therefore, follows that healthcare, especially hospitals, can generate adequate returns to compensate for the capital risk incurred but with a caveat: patience or in other words longer holding period.

This argument is supported by the fact that investment in quality healthcare, as a basic need, has the potential in the long run to compensate for default, liquidity, and maturity risk premiums.

Given the significant capital investment and longer holding period required to operate hospitals, it is time to consider alternative funding options, involving the larger public, and one such option is listing hospitals on the stock exchange.

It baffles me why no hospital in Africa is listed on any stock exchange.

This move, which is already a common practice in many foreign countries, especially in the developed world and India can bring numerous benefits, including access to Capital, enhanced visibility, expansion of business strategy, and attraction of competent human Capital. These advantages can significantly improve the healthcare landscape in Kenya.

To be listed in the Nairobi stock exchange under the Main Investment Market Segment (MIMS) includes, an entity needs a minimum authorized issued and paid-up ordinary share capital of Sh50 million, have net assets of Sh100 million before the public offering.

Involving the larger public in healthcare operations will deepen the access of quality healthcare in Africa. Listing and enhancing access to more capital will ensure that quality hospital infrastructure is adequately distributed across the country, attracting high-quality human capital for better remuneration and absorbing the currently unemployed medical personnel.

We should never have a standoff in the life-saving industries like healthcare, so the recent crisis in Kenya and indeed across Africa speaks to the high level of negligence by various stakeholders.

Benefits to the investors in healthcare stocks include steady returns- healthcare being a defensive stock, resilience of the healthcare industry as seen during the Covid-19 pandemic, and robust, sustained growth in healthcare spending.
    `,
};

const SingleArticle = () => {
  const { title: slugParam } = useParams();
  const article = news.find((item) => item.slug === slugParam);

  if (!article) {
    return <NotFound />;
  }
  return (
    <>
      {/* page title */}
      <PageTitle title={`${blogPost.title} - DCB Consulting LLP`} />

      {/* Hero Section with Photo Background */}
      <section
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: `url(${newsPhoto})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
              {blogPost.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up [--animation-delay:200ms]">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white animate-fade-up [--animation-delay:400ms]">
              <img
                src={blogPost.author.image}
                alt={blogPost.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="font-medium">{blogPost.author.name}</h3>
                <p className="text-sm text-gray-300">
                  {format(new Date(blogPost.date), "MMM d, yyyy")} •{" "}
                  {blogPost.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* content section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{blogPost.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            {blogPost.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-600">
                {paragraph}
              </p>
            ))}
          </article>

          <div className="flex items-center gap-4 mt-8 pt-8 border-t">
            <span className="text-sm text-gray-600">Share this post:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Link2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1*/}
      <CallToAction />

      {/* Similar posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Related Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sut amet, consectur adispinsing elit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.bgPhoto})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25 opacity-70 transition-opacity duration-300 group-hover:opacity-50" />
                <div className="relative h-[450px] flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center mb-2 text-sm">
                    <time className="font-medium">
                      {format(new Date(item.date), "MMM d, yyyy")}
                    </time>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <img
                        src={item.authorProfile}
                        alt={item.author}
                        className="w-6 h-6 rounded-full mr-2 object-cover"
                      />
                      <span className="font-medium">{item.author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold leading-snug mb-2">
                    {item.title}
                  </h3>
                </div>
                <a
                  href="#"
                  className="absolute inset-0"
                  aria-label={`Read more about ${item.title}`}
                >
                  <span className="sr-only">Read more</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleArticle;
