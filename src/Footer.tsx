import { Github, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[#252525]">
            <div className="container mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <img src="/assets/logo/name-logo.png" alt="Alyssa-Jecomo-logo" className="h-8 w-8" />
                    <span className="text-2xl font-bold tracking-wider">Alyssa Jecomo</span>
                  </div>
                  <p className="text-gray-400">
                      Delivering exceptional digital experiences through innovative web development and design.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Guo-Alyssa-Lyn" target="_blank" rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/alyssa-lyn-jecomo-9186a82aa/" target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/nyleve.guo/" target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
    
                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="#home" className="text-gray-400 hover:text-emerald-500 transition-colors">Home</a>
                    </li>
                    <li>
                      <a href="#about" className="text-gray-400 hover:text-emerald-500 transition-colors">About</a>
                    </li>
                    <li>
                      <a href="#services" className="text-gray-400 hover:text-emerald-500 transition-colors">Services</a>
                    </li>
                    <li>
                      <a href="#portfolio" className="text-gray-400 hover:text-emerald-500 transition-colors">Portfolio</a>
                    </li>
                    <li>
                      <a href="#announcements" className="text-gray-400 hover:text-emerald-500 transition-colors">News</a>
                    </li>
                    <li>
                      <a href="#contact" className="text-gray-400 hover:text-emerald-500 transition-colors">Contact</a>
                    </li>
                  </ul>
                </div>
    
                {/* Services */}
                <div>
                  <h3 className="text-lg font-bold mb-6">Services</h3>
                  <ul className="space-y-4">
                    <li className="text-gray-400">Frontend Development</li>
                    <li className="text-gray-400">Website Branding</li>
                    <li className="text-gray-400">UI/UX Design</li>
                    <li className="text-gray-400">Website Maintenance & Support</li>
                    <li className="text-gray-400">Backend Development</li>
                    <li className="text-gray-400">Search Engine Optimization (SEO)</li>
                  </ul>
                </div>
    
                {/* Newsletter */}
                <div>
                  <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                  <p className="text-gray-400 mb-4">
                    Subscribe to stay updated with my latest projects and tech articles.
                  </p>
                  <form 
                    action="https://technologywebdev15.substack.com/subscribe" 
                    method="GET"
                    target="_blank"
                    className="space-y-4"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-[#252525] rounded-lg focus:ring-2 focus:ring-emerald-500 
                        focus:outline-none transition-colors text-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium 
                        hover:bg-emerald-600 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
    
              {/* Copyright */}
              <div className="mt-16 pt-8 border-t border-[#252525] text-center text-gray-400">
                <p>© {new Date().getFullYear()} Alyssa Jecomo. All rights reserved.</p>
              </div>
            </div>
          </footer>
  );
}
