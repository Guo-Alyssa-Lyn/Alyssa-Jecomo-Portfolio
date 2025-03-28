import BlogPost from "../pages/BlogPost";

export interface BlogPostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export const blogPosts: BlogPostProps[] = [
  {
    image: "/assets/blogs/blog-01.png",
    title: "Zuitt: Data Visualization Bootcamp Experience",
    excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to WebAssembly.",
    date: "Oct 05, 2024",
    readTime: "5 min read",
    category: "Data Visualization",
    slug: "data-visualization-bootcamp-experience",
  },
  {
    image: "/assets/blogs/blog-02.png",
    title: "Javascript Game Development Bootcamp Experience",
    excerpt: "Learn how to design and implement scalable applications using microservices architecture and cloud-native technologies.",
    date: "February 08, 2025",
    readTime: "8 min read",
    category: "Game Development",
    slug: "game-development-bootcamp-experience",
  },
  {
    image: "/assets/blogs/blog-03.png",
    title: "Closing a Chapter: Saying Goodbye to My First Website Portfolio",
    excerpt: "Discover key TypeScript features that can improve your code quality and development workflow.",
    date: "Mar 28, 2025",
    readTime: "6 min read",
    category: "Website Development",
    slug: "first-website-portfolio",
  },
];

const BlogList = () => {
  return (
    <section id="blog" className="py-32 bg-[#1f1f1f] text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-6 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;