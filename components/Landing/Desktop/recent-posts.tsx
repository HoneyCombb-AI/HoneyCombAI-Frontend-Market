import BlogCard from "@/components/Blog/BlogCard";
import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";

export default function RecentPosts() {
  // Get the first 3 posts
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest from the Blog
            </h2>
            <p className="text-gray-600 max-w-xl">
              Insights, strategies, and news to help your sales team succeed.
            </p>
          </div>
          <Link 
            href="/blog"
            className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View all posts
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View all posts
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
