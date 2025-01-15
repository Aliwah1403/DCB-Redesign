import chrisImage from "@/assets/Chris.jpg";
import denisImage from "@/assets/Denis.jpg";
import newsPhoto from "@/assets/blog1.jpg";
import news2 from "@/assets/blog2.jpg";
import news3 from "@/assets/blog3.jpg";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

const news = [
  {
    date: "May 23, 2024",
    link: "articles/single-article",
    author: "Chris Otieno",
    authorProfile: chrisImage,
    title: "Time hospitals in Africa raised capital through stock market",
    bgPhoto: newsPhoto,
  },
];

const RecentNews = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#005857] uppercase tracking-wide mb-2">
            News
          </h3>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            What's New At DCB LLP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse the latest news and media mentions about DCB Consulting LLP.
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
                href={item.link}
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
  );
};

export default RecentNews;
