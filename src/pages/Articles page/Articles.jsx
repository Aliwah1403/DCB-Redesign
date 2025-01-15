import newsPhoto from "@/assets/blog1.jpg";
import chrisImage from "@/assets/Chris.jpg";
import PagesHeader from "@/components/pages-header-section";
import CallToAction from "@/components/call-to-action";
import articleBg from "@/assets/articles-bg.jpg";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/utils";

const posts = [
  {
    id: 1,
    imageUrl: newsPhoto,
    title: "Time hospitals in Africa raised capital through stock market",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.",
    date: "May 23, 2024",
    datetime: "2024-05-23",
    category: { title: "Business", href: "#" },
    author: {
      name: "Chris Otieno",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: chrisImage,
    },
  },
];

const Articles = () => {
  return (
    <>
      {/* Hero Section with Photo Background */}
      <PagesHeader
        title="What's New At DCB LLP"
        image={articleBg}
        description="Browse the lates news and media mentions at DCB Consulting"
      />

      {/* dummy content */}
      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-12 sm:pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg ">
                  <Link to={`/articles/${slugify(post.title)}`}>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section 1*/}
      <CallToAction />
    </>
  );
};

export default Articles;
