import Header from "@/components/Landing/Desktop/header";
import Footer from "@/components/Landing/Desktop/footer";
import { MobileHeader } from "@/components/Landing/Mobile/MobileHeader";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, BLOG_POSTS } from "@/lib/blog-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-8 text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide rounded-full">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm">{post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 border-t border-b border-gray-100 py-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                {/* Placeholder avatar */}
                <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                  {post.author[0]}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3">
                  <div className="font-bold text-gray-900">{post.author}</div>
                  <a 
                    href="https://www.linkedin.com/in/ankush-nagathan-100946308/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0077b5] hover:text-[#006396] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                <div className="text-sm text-gray-500">{post.role}</div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-16 shadow-sm">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg md:prose-xl max-w-none 
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-3 prose-ul:text-gray-600
              prose-li:marker:text-blue-600
              prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
