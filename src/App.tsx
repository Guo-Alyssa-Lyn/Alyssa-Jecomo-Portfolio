import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Code2, Cuboid, Palette, BarChart3, Mail, Phone, MapPin, BadgeAlert, Pen, Send, Github, ChevronDown, ChevronUp, ChevronRight, Calendar, Clock } from 'lucide-react';
import { useTypewriter } from './hooks/useTypewriter';
import { useScrollLock } from './hooks/useScrollLock';
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./Footer";
import { useEffect as reactUseEffect } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

interface TechStackItem {
  id: number;
  name: string;
  bgColor: string;
  textColor: string;
  category: string;
}

interface BlogPostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export const useScrollToSection = () => {
  const location = useLocation();

  customUseEffect(() => {
    // Check if we're on the home page and have a hash
    if (location.pathname === '/' && location.hash === '#blog') {
      // Slightly longer timeout to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const blogSection = document.getElementById('blog');
        if (blogSection) {
          // Use more aggressive scrolling method
          blogSection.scrollIntoView({ 
            behavior: 'auto', 
            block: 'start' 
          });
          window.scrollTo({
            top: blogSection.offsetTop,
            behavior: 'smooth'
          });
        }
      }, 300); // Increased timeout

      return () => clearTimeout(timer);
    }
  }, [location]);
};


function App() {

  useScrollToSection();
  // Remove unused state if not needed elsewhere
  const [isMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  useScrollLock(isMenuOpen);

  const typedText = useTypewriter({
    words: [' Developer', ' Designer'],
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenWords: 2000,
  });

  const certifications: CertificationProps[] = [
    {
      title: "Google Map API",
      issuer: "San Pedro College of Business Administration",
      date: "September 2019",
      image: "/assets/certificates/college-cert-01.jpeg"
    },
    {
      title: "Building Cross-Platform Mobile Apps using Xamarin.Forms",
      issuer: "San Pedro College of Business Administration",
      date: "September 2019",
      image: "/assets/certificates/college-cert-02.jpeg"
    },
    {
      title: "Data Visualization Workshop",
      issuer: "Zuitt",
      date: "October 2024",
      image: "/assets/certificates/certificate-1.jpg"
    },
    {
      title: "Javascript Game Development Workshop",
      issuer: "Zuitt",
      date: "February 2025",
      image: "/assets/certificates/certificate-2.png"
    },
    {
      title: "Frontend Fundamentals Bootcamp",
      issuer: "One Code Camp Academy",
      date: "October 2024",
      image: "/assets/certificates/certificate-3.png"
    },
    {
      title: "Understanding Data Topics",
      issuer: "DataCamp",
      date: "February 2025",
      image: "/assets/certificates/certificate-4.png"
    }
  ];

  const blogPosts = [
    {
      image: "/assets/blogs/blog-01.jpg",
      title: "Inside This Blog: What You’ll Discover",
      excerpt: "A overview into the insights, tips, and inspiring stories waiting for you!",
      date: "March 30, 2025",
      readTime: "3 min read",
      category: "Introduction",
      slug: "https://technologywebdev15.substack.com/p/inside-this-blog-what-youll-discover"
    },
    {
      image: "/assets/blogs/blog-02.jpg",
      title: "My Journey into Website Development: How It All Began",
      excerpt: "Humble Beginnings: Powered by Passion, Driven by Patience",
      date: "April 02, 2025",
      readTime: "10 min read",
      category: "Career",
      slug: "https://technologywebdev15.substack.com/p/my-journey-into-website-development"
    },
    {
      image: "/assets/blogs/blog-03.jpg",
      title: "Pursuing Proficiency in Web Development: Capabilities with Modern Tools (WordPress, Webflow)",
      excerpt: "Learning to Use Website Builders and Their Plugins as Tools for Website Development",
      date: "April 13, 2025",
      readTime: "8 min read",
      category: "Website Builders",
      slug: "https://technologywebdev15.substack.com/p/pursuing-proficiency-in-web-development"
    }
  ];

  interface HandleSubmitEvent extends FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: HandleSubmitEvent) => {
    e.preventDefault();

    const formEndpoint = "https://formspree.io/f/xvgkqlqw"; // Replace with your Formspree ID

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const TechStacks: React.FC = () => {
    const techStack: TechStackItem[] = [
      // Frontend
      { id: 1, name: "React", bgColor: "bg-blue-400", textColor: "text-white", category: "Frontend" },
      { id: 2, name: "TypeScript", bgColor: "bg-blue-600", textColor: "text-white", category: "Frontend" },
      { id: 3, name: "JavaScript", bgColor: "bg-yellow-300", textColor: "text-black", category: "Frontend" },
      { id: 5, name: "Next.js", bgColor: "bg-gray-300", textColor: "text-black", category: "Frontend" },
      { id: 6, name: "Tailwind", bgColor: "bg-cyan-500", textColor: "text-white", category: "Frontend" },
      { id: 10, name: "Bootstrap", bgColor: "bg-purple-500", textColor: "text-white", category: "Frontend" },
      
      // Backend
      { id: 4, name: "Node.js", bgColor: "bg-green-500", textColor: "text-white", category: "Backend" },
      { id: 7, name: "Python", bgColor: "bg-yellow-400", textColor: "text-black", category: "Backend" },
      { id: 8, name: "MySQL", bgColor: "bg-blue-500", textColor: "text-white", category: "Backend" },
      { id: 9, name: "PostgreSQL", bgColor: "bg-indigo-400", textColor: "text-white", category: "Backend" },
      { id: 15, name: "Dash", bgColor: "bg-green-400", textColor: "text-white", category: "Backend" },
      
      // Design Tools
      { id: 13, name: "Lunacy", bgColor: "bg-gray-400", textColor: "text-black", category: "Design Tools" },
      { id: 14, name: "Figma", bgColor: "bg-pink-500", textColor: "text-white", category: "Design Tools" },
      
      // Other Tools
      { id: 11, name: "Git", bgColor: "bg-orange-500", textColor: "text-white", category: "Other Tools" },
      { id: 12, name: "VS Code", bgColor: "bg-blue-400", textColor: "text-white", category: "Other Tools" },
      { id: 16, name: "Android Studio", bgColor: "bg-green-600", textColor: "text-white", category: "Other Tools" },
    ];
  
    // Use separate state for each category to avoid state conflicts
    const [expandedFrontend, setExpandedFrontend] = useState(false);
    const [expandedBackend, setExpandedBackend] = useState(false);
    const [expandedDesignTools, setExpandedDesignTools] = useState(false);
    const [expandedOtherTools, setExpandedOtherTools] = useState(false);
  
    // Get expanded state for a specific category
    const isExpanded = (category: string): boolean => {
      switch(category) {
        case "Frontend": return expandedFrontend;
        case "Backend": return expandedBackend;
        case "Design Tools": return expandedDesignTools;
        case "Other Tools": return expandedOtherTools;
        default: return false;
      }
    };
  
    // Toggle specific category
    const toggleCategory = (category: string, event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      
      switch(category) {
        case "Frontend": 
          setExpandedFrontend(!expandedFrontend);
          break;
        case "Backend": 
          setExpandedBackend(!expandedBackend);
          break;
        case "Design Tools": 
          setExpandedDesignTools(!expandedDesignTools);
          break;
        case "Other Tools": 
          setExpandedOtherTools(!expandedOtherTools);
          break;
      }
    };
  
    // Group techs by category
    const categories = ["Frontend", "Backend", "Design Tools", "Other Tools"];
    
    return (
      <section className="bg-[#1f1f1f] py-12 pb-48 flex flex-col items-center relative">
        <h3 className="text-3xl font-bold text-white mb-16 z-10 relative">Tech Stacks</h3>
        
        <div className="w-full max-w-5xl px-4 space-y-6">
          {categories.map((category) => {
            const categoryItems = techStack.filter(tech => tech.category === category);
            
            return (
              <div 
                key={category} 
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                {/* Category Header */}
                <div 
                  className="w-full flex justify-between items-center p-4 cursor-pointer bg-gray-700 hover:bg-gray-600 text-left"
                  onClick={(e) => toggleCategory(category, e)}
                >
                  <h4 className="text-2xl font-semibold text-white">{category}</h4>
                  <div className="flex items-center">
                    {isExpanded(category) ? (
                      <ChevronUp className="text-white w-6 h-6" />
                    ) : (
                      <ChevronDown className="text-white w-6 h-6" />
                    )}
                  </div>
                </div>
                
                {/* Category Content */}
                {isExpanded(category) && (
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4">
                      {categoryItems.map((tech) => (
                        <div
                          key={tech.id}
                          className={`${tech.bgColor} ${tech.textColor} p-4 rounded-lg shadow-md text-xl 
                          font-semibold w-48 flex-shrink-0 text-center`}
                        >
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
};      

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Navigation Bar Section */}
      <Navbar />

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a] pointer-events-none" />
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl mb-4 text-emerald-500 font-medium">Hello There!</h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                I am Web<span className="text-emerald-500">{typedText}</span><span className="text-emerald-500 animate-pulse">|</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                Passionate about crafting exceptional digital experiences that captivate audiences,
               enhance engagement, and drive success through innovative design and seamless functionality.
              </p>
              <a 
                href="#contact"
                className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium 
                hover:bg-emerald-600 transition-colors transform hover:scale-105 duration-200 mr-6"
              >
                Inquire Now
              </a>
              <a 
                href="#portfolio"
                className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium 
                hover:bg-emerald-600 transition-colors transform hover:scale-105 duration-200"
              >
                Portfolio
              </a>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-[300px] lg:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="/assets/profile/intro-me.png"
                  alt="Developer Portrait"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#1f1f1f]">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="/assets/profile/about-me.jpg"
                  alt="Professional shot"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent" />
              </div>
            </div>
            <div>
              <div className="space-y-4 pt-0">
                <div>
                  <h2 className="text-4xl lg:text-5xl text-emerald-500 font-bold mb-20">About Me</h2>
                  <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                  <p className="text-gray-400 leading-relaxed">
                  My web development journey began in 2016 when, driven by passion and curiosity,
                  I started exploring website development with the dream of becoming a skilled developer.
                  Through experimentation and hands-on learning, I discovered a deep appreciation for
                  building websites and software, which allowed me to develop a strong foundation in the field. 
                  In 2024, after transitioning from an office job, I took the leap into freelancing to pursue 
                  my dream career. I am thrilled to have embarked on this path and remain committed to delivering 
                  high-quality solutions while serving my clients with dedication.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 mt-6">Skills & Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Frontend Development</p>
                        <div className="h-2 bg-[#252525] rounded-full">
                          <div className="h-full w-[70%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Backend Development</p>
                        <div className="h-2 bg-[#252525] rounded-full">
                          <div className="h-full w-[50%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Database Management</p>
                        <div className="h-2 bg-[#252525] rounded-full">
                          <div className="h-full w-[50%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Website Security Practices</p>
                        <div className="h-2 bg-[#252525] rounded-full">
                          <div className="h-full w-[50%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Version Control & Deployment</p>
                        <div className="h-2 bg-[#252525] rounded-full">
                          <div className="h-full w-[70%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Problem-solving & Debugging</p>
                        <div className="h-2 bg-[#252525] rounded-full">
                          <div className="h-full w-[60%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Project Management</p>
                        <div className="h-2 bg-[#252525] rounded-full">
                          <div className="h-full w-[30%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Performance Optimization</p>
                        <div className="h-2 bg-[#252525] rounded-full">
                          <div className="h-full w-[30%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="mt-10">
                  <a 
                    href="/assets/resume/AlyssaJecomo_CV.pdf" 
                    download 
                    className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium 
                    hover:bg-emerald-600 transition-colors transform hover:scale-105 duration-200"
                  >
                    Download CV
                  </a>
                </div>
            </div>
          </div>

          {/* Certifications section */}
          <div className="mt-32">
            <h3 className="text-3xl font-bold text-center mb-16">All Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-[#252525] rounded-xl overflow-hidden hover:shadow-lg 
                    hover:shadow-emerald-500/10 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252525] via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">Issued by {cert.issuer}</p>
                    <p className="text-emerald-500 text-sm">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stacks Section */}
      <TechStacks />

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl lg:text-5xl text-emerald-500 font-bold mb-24 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Cuboid className="w-10 h-10" />}
              title="Frontend Development"
              description="Designing and developing dynamic, responsive user interfaces with modern frameworks to enhance user experience and performance."
            />
            <ServiceCard
              icon={<Pen className="w-10 h-10" />}
              title="Website Branding"
              description="Crafting visually cohesive and captivating brand identities for websites, ensuring consistency in logos, color palettes, typography, and design elements to enhance brand recognition and user experience."
            />
            <ServiceCard
              icon={<Palette className="w-10 h-10" />}
              title="UI/UX Design"
              description="Designing intuitive and visually engaging interfaces using modern design principles to enhance user experience and accessibility."
            />
            <ServiceCard
              icon={<BadgeAlert className="w-10 h-10" />}
              title="Website Maintenance & Support"
              description="Providing ongoing technical support, updates, and performance optimizations to ensure website security, functionality, and reliability."
            />
            <ServiceCard
              icon={<Code2 className="w-10 h-10" />}
              title="Backend Development"
              description="Building secure, scalable, and efficient server-side solutions to ensure seamless functionality and data management for web applications."
            />
            <ServiceCard
              icon={<BarChart3 className="w-10 h-10" />}
              title="Search Engine Optimization (SEO)"
              description="Enhancing website visibility and performance through strategic SEO practices, keyword optimization, and analytics-driven insights."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-emerald-500 font-bold mb-6">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise in web development
              and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="/assets/portfolio-works/portfolio-1.png"
              title="Clinic Management System"
              description="A modern e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard."
              tags={["Python", "Dash", "MySQL"]}
              githubUrl="https://github.com/Guo-Alyssa-Lyn/clinic_management_system"
              // No live url
            />
            <ProjectCard
              image="/assets/portfolio-works/portfolio-2.png"
              title="POS-Inventory-Billing System"
              description="A collaborative task management application with real-time updates, team chat, and project analytics."
              tags={["React", "Typescript", "TailwindCSS", "NodeJS", "PostgreSQL", "Prisma", "Neon"]}
              githubUrl="https://github.com/Guo-Alyssa-Lyn/Typescript-POS-Project"
              // No live url
            />
          </div>
          {/* <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors duration-300"
            >
              See All Projects
            </a>
          </div> */}
        </div>
      </section>


      {/* Blog Posts Section */}
    <section id="blog" className="py-32">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-emerald-500 font-bold mb-6">Latest Blog Posts</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore my latest thoughts, tutorials, and insights on web development, 
            programming, and tech industry trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              image={post.image}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              slug={post.slug}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://technologywebdev15.substack.com/" 
            className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors duration-300"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>



      {/* Announcements Section */}
      <section id="announcements" className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-emerald-500 font-bold mb-6">
              News & Highlights
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Stay updated with the recent news and updates about my projects and professional journey.
            </p>
          </div>
          
          {/* Announcement Cards Container */}
          <div className="space-y-6">

            {/* Announcement 1 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-all duration-300 hover:border-emerald-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-emerald-500">
                  Just Released: Blog Posts Are Available Now! 📖
                </h3>
                <span className="text-gray-400 text-sm">April 02, 2025</span>
              </div>
              <p className="text-gray-300">
                The latest blog posts are now available! Stay updated with fresh insights and new content.
              </p>
            </div>

            {/* Announcement 2 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-all duration-300 hover:border-emerald-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-emerald-500">
                  Seeking Exciting New Projects 🚀
                </h3>
                <span className="text-gray-400 text-sm">April 01, 2025</span>
              </div>
              <p className="text-gray-300">
                Passionate web developer available for new opportunities. Let's collaborate to build innovative and high-quality digital solutions!
              </p>
            </div>

            {/* Announcement 3 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-all duration-300 hover:border-emerald-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-emerald-500">
                  📢 Our Newsletter Has Launched!
                </h3>
                <span className="text-gray-400 text-sm">March 30, 2025</span>
              </div>
              <p className="text-gray-300">
                Stay updated with the latest web development insights, tips, and trends delivered straight to your inbox. 
                <strong> Subscribe now and never miss an update!</strong>
              </p>
            </div>

            {/* Announcement 4 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-all duration-300 hover:border-emerald-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-emerald-500">
                  Revamped Portfolio: A Sleek and Modern Experience
                </h3>
                <span className="text-gray-400 text-sm">March 28, 2025</span>
              </div>
              <p className="text-gray-300">
                Upgraded my portfolio from a basic HTML, CSS, and JavaScript site to a React-powered 
                platform with a modern design and enhanced details.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl lg:text-5xl text-emerald-500 font-bold mb-24 text-center">Let's Build Your Project Together</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <ContactInfo
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                content="guoalyssalyn201510@gmail.com"
              />
              <ContactInfo
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                content="63+ 928-721-4334"
              />
              <ContactInfo
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                content="San Pedro City, Laguna, Calabarzon, Philippines"
              />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#252525] rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#252525] rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#252525] rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#252525] rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors text-white resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-600 transition-colors transform hover:scale-105 duration-200"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>

                {status === "success" && <p className="text-green-500">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-500">Something went wrong. Try again later.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-[#1f1f1f] p-8 rounded-2xl hover:bg-[#252525] transition-all duration-300
      hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer">
      <div className="text-emerald-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({ image, title, description, tags, githubUrl }: ProjectCardProps) {
  return (
    <div className="group bg-[#1f1f1f] rounded-2xl overflow-hidden hover:shadow-lg 
      hover:shadow-emerald-500/10 transition-all duration-300">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-[#252525] text-emerald-500 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-emerald-500 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function BlogPost({ image, title, excerpt, date, readTime, category, slug }: BlogPostProps) {
  return (
    <article className="group bg-[#252525] rounded-xl overflow-hidden hover:shadow-lg 
      hover:shadow-emerald-500/10 transition-all duration-300">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-emerald-500 text-white text-sm rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          {excerpt}
        </p>
        <a
          href={slug} /* Use the slug directly as it already contains the full URL */
          className="inline-flex items-center space-x-2 text-emerald-500 hover:text-emerald-400 
            transition-colors group/link"
         
          target="_blank"
          
          rel="noopener noreferrer"
        >
          <span>Read More</span>
          <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
}

function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-[#252525] rounded-xl hover:bg-[#2a2a2a] 
      transition-colors cursor-pointer group">
      <div className="text-emerald-500 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1 group-hover:text-emerald-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
}

export default App;
// function useParams(): { slug?: string } {
//   return useRouterParams<{ slug: string }>();
// }

function customUseEffect(callback: () => void | (() => void), dependencies: any[]) {
  reactUseEffect(callback, dependencies);
}

