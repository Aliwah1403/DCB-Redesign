import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { client } from "@/sanity/client";
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
  Loader2,
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
import { PortableText } from "@portabletext/react";
import PortableTextComponents from "@/components/PortableTextComponents";

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

const SINGLE_POST_QUERY = `*[_type == 'posts' && slug.current == $slug][0]{
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
  readingTime,
  body,
  image{
    asset->{
      _id,
      url
    }
  },
  "relatedPosts": *[_type == 'posts' && category == ^.category && slug.current != $slug][0...3]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    author->{
      fullName,
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
  }
}`;

const SingleArticle = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch single post
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await client.fetch(SINGLE_POST_QUERY, { slug });
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='flex flex-col items-center gap-4'>
              <Loader2 className='h-8 w-8 animate-spin' />
              <p className='text-muted-foreground'>Loading post...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='text-center'>
              <p className='text-destructive mb-4'>
                {error || "Post not found"}
              </p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!post) {
    return <NotFound />;
  }
  return (
    <>
      {/* page title */}
      <PageTitle title={`${post.title} - DCB Consulting LLP`} />

      {/* Hero Section with Photo Background */}
      <section
        className='relative bg-cover bg-center py-32'
        style={{
          backgroundImage: `url(${post.image?.asset?.url || newsPhoto})`,
        }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <Badge className='mb-4 bg-white/10 text-white hover:bg-white/20'>
              {post.category}
            </Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up [--animation-delay:200ms]'>
              {post.title}
            </h1>
            <div className='flex items-center justify-center gap-4 text-white animate-fade-up [--animation-delay:400ms]'>
              <img
                src={post.author.profileImage?.asset?.url || chrisImage}
                alt={post.author.fullName}
                className='w-12 h-12 rounded-full object-cover'
              />
              <div className='text-left'>
                <h3 className='font-medium'>{post.author.fullName}</h3>
                <p className='text-sm text-gray-300'>
                  {format(new Date(post.publishedAt), "MMM d, yyyy")} •{" "}
                  {post.readingTime} min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* content section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto'>
          {/* Breadcrumb */}
          <Breadcrumb className='mb-8'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='/articles'>Articles</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article className='max-w-none'>
            <PortableText
              value={post.body}
              components={PortableTextComponents}
            />
          </article>

          <div className='flex items-center gap-4 mt-8 pt-8 border-t'>
            <span className='text-sm text-gray-600'>Share this post:</span>
            <div className='flex gap-2'>
              <Button variant='ghost' size='icon'>
                <Linkedin className='w-5 h-5' />
              </Button>
              <Button variant='ghost' size='icon'>
                <Twitter className='w-5 h-5' />
              </Button>
              <Button variant='ghost' size='icon'>
                <Facebook className='w-5 h-5' />
              </Button>
              <Button variant='ghost' size='icon'>
                <Link2 className='w-5 h-5' />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Similar posts */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 '>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight'>
              Related Posts
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Find other articles on {post.category} you might like similar to
              this one
            </p>
          </div>

          {post.relatedPosts && post.relatedPosts.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {post.relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost._id}
                  className='relative overflow-hidden rounded-lg shadow-lg group'
                >
                  <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${
                        relatedPost.image?.asset?.url || newsPhoto
                      })`,
                    }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25 opacity-70 transition-opacity duration-300 group-hover:opacity-50' />
                  <div className='relative h-[450px] flex flex-col justify-end p-6 text-white'>
                    <div className='flex items-center mb-2 text-sm'>
                      <time className='font-medium'>
                        {format(
                          new Date(relatedPost.publishedAt),
                          "MMM d, yyyy"
                        )}
                      </time>
                      <span className='mx-2'>•</span>
                      <div className='flex items-center'>
                        <img
                          src={
                            relatedPost.author.profileImage?.asset?.url ||
                            chrisImage
                          }
                          alt={relatedPost.author.fullName}
                          className='w-6 h-6 rounded-full mr-2 object-cover'
                        />
                        <span className='font-medium'>
                          {relatedPost.author.fullName}
                        </span>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold leading-snug mb-2'>
                      {relatedPost.title}
                    </h3>
                  </div>
                  <a
                    href='#'
                    className='absolute inset-0'
                    aria-label={`Read more about ${relatedPost.title}`}
                  >
                    <span className='sr-only'>Read more</span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center text-gray-600'>
              No related posts found
            </div>
          )}
        </div>
      </section>

      {/* CTA Section 1*/}
      <CallToAction />
    </>
  );
};

export default SingleArticle;
