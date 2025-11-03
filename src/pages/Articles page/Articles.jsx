import { useState, useEffect } from "react";
import newsPhoto from "@/assets/blog1.jpg";
import chrisImage from "@/assets/Chris.jpg";
import PagesHeader from "@/components/pages-header-section";
import CallToAction from "@/components/call-to-action";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/utils";
import { client } from "@/sanity/client";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS_QUERY = `*[_type == 'posts'] | order(publishedAt desc){
   _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  author->{
    fullName,
    role,
    profileImage{
      asset->{
        _id,
        url
      }
    }
  },
  publishedAt,
  image{
    asset->{
      _id,
      url
    }
  }
}`;

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(POSTS_QUERY);
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='flex flex-col items-center gap-4'>
              <Loader2 className='h-8 w-8 animate-spin' />
              <p className='text-muted-foreground'>Loading posts...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='text-center'>
              <p className='text-destructive mb-4'>{error}</p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section with Photo Background */}
      <PagesHeader
        title="What's New At DCB LLP"
        image={"articles-bg_edeajb"}
        description='Browse the lates news and media mentions at DCB Consulting'
      />

      <div className='bg-white py-12 sm:py-12'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-12 sm:pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {posts.map((post) => (
              <article
                key={post.id}
                className='flex max-w-xl flex-col items-start justify-between'
              >
                <div className='w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg '>
                  <Link to={`/articles/${post.slug}`}>
                    <img
                      src={post.image?.asset?.url || PostCover}
                      alt={post.title}
                      className='w-full h-full object-cover'
                    />
                  </Link>
                </div>
                <div className='flex items-center gap-x-4 text-xs'>
                  <time dateTime={post.publishedAt} className='text-gray-500'>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                  </time>
                  <a
                    href={`/articles?category=${post.category}`}
                    className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                  >
                    {post.category}
                  </a>
                </div>
                <div className='group relative'>
                  <h3 className='mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600'>
                    <a href={`/articles/${post.slug}`}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h3>
                  <p className='mt-5 line-clamp-3 text-sm text-gray-600'>
                    {post.excerpt}
                  </p>
                </div>
                <div className='relative mt-8 flex items-center gap-x-4'>
                  <img
                    src={post.author.profileImage?.asset?.url || PostCover}
                    alt={post.author.fullName}
                    className='size-10 rounded-full bg-gray-50'
                  />
                  <div className='text-sm'>
                    <p className='font-semibold text-gray-900'>
                      <a href={post.author.href}>
                        <span className='absolute inset-0' />
                        {post.author.fullName}
                      </a>
                    </p>
                    <p className='text-gray-600'>{post.author.role}</p>
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
