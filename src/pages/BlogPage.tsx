import { useParams } from "react-router-dom";

const blogPosts = [
  {
    image: "/assets/blogs/blog-01.png",
    title: "Zuitt: Data Visualization Bootcamp Experience",
    content: "Full content of the Data Visualization Bootcamp Experience...",
    date: "Oct 05, 2024",
    readTime: "5 min read",
    category: "Data Visualization",
    slug: "data-visualization-bootcamp-experience",
  },
  {
    image: "/assets/blogs/blog-02.png",
    title: "Javascript Game Development Bootcamp Experience",
    content: "Full content of the JavaScript Game Development Bootcamp...",
    date: "February 08, 2025",
    readTime: "8 min read",
    category: "Game Development",
    slug: "game-development-bootcamp-experience",
  },
  {
    image: "/assets/blogs/blog-03.png",
    title: "Closing a Chapter: Saying Goodbye to My First Website Portfolio",
    content: "Full content of Saying Goodbye to My First Website Portfolio...",
    date: "Mar 28, 2025",
    readTime: "6 min read",
    category: "Website Development",
    slug: "first-website-portfolio",
  },
];

const BlogPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <p className="text-center text-white">Post not found.</p>;
  }

  return (
    <div className="container mx-auto px-8 py-16 text-white">
      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-500 text-sm">{post.date} • {post.readTime} • {post.category}</p>
      <p className="text-lg text-gray-400 mt-6">{post.content}</p>
    </div>
  );
};

export default BlogPage;
