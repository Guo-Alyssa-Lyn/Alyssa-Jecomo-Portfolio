import { useParams, useNavigate } from 'react-router-dom';
import blogPosts from './BlogList'; // Ensure BlogList exports an array of posts, not a function

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = Array.isArray(blogPosts) ? blogPosts.find((post) => post.slug === slug) : null;

  if (!post) {
    return <p className="text-center text-white">Post not found.</p>;
  }

  return (
    <div className="container mx-auto px-8 py-16 text-white">
      <button 
        onClick={() => {
          // Navigate with blog hash
          navigate('blog');
        }}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center mb-8"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
            clipRule="evenodd" 
          />
        </svg>
        Back to Blog Section
      </button>

      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-500 text-sm">{post.date} • {post.readTime} • {post.category}</p>
      <p className="text-lg text-gray-400 mt-6">{post.content}</p>
    </div>
  );
};

export default BlogPage;