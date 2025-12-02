import Header from "@/components/Landing/Desktop/header";
import Footer from "@/components/Landing/Desktop/footer";
import { MobileHeader } from "@/components/Landing/Mobile/MobileHeader";
import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-gray-200 pb-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter mb-4">
                The Blog.
              </h1>
              <p className="text-xl text-gray-500 max-w-xl">
                The new standard for GTM intelligence.
              </p>
            </div>
            <div className="hidden md:block pb-2">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                Latest Article
              </span>
            </div>
          </div>

          {/* Featured Blog Post */}
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block max-w-5xl mx-auto">
              <div className="relative w-full rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-gray-800 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(250,204,21,0.1)] hover:-translate-y-1">
                <div className="p-12 md:p-20 flex flex-col items-center text-center">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-4 py-1.5 bg-yellow-400 text-black text-sm font-bold uppercase tracking-wider rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm font-medium border-l border-gray-700 pl-4">
                      {post.date}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight group-hover:text-yellow-400 transition-colors max-w-4xl">
                    {post.title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                        {post.author[0]}
                      </div>
                      <div className="text-white text-left">
                        <div className="font-bold text-lg">{post.author}</div>
                        <div className="text-gray-400 text-sm">{post.role}</div>
                      </div>
                    </div>
                    
                    <div className="h-12 w-[1px] bg-gray-800 hidden md:block" />
                    
                    <div className="flex items-center text-yellow-400 font-bold text-lg group-hover:translate-x-2 transition-transform">
                      Read Article
                      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
