import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Performances = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/05/aaaa.png" 
                alt="Nrithyamanasa Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">HOME</Link>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-colors">ABOUT MANASA</Link>
              <span className="text-purple-600 font-semibold">PERFORMANCES</span>
              <Link to="/press-gallery" className="text-gray-700 hover:text-purple-600 transition-colors">PRESS GALLERY</Link>
              <a href="/#showcase" className="text-gray-700 hover:text-purple-600 transition-colors">SHOWCASE</a>
              <a href="/#classes" className="text-gray-700 hover:text-purple-600 transition-colors">CLASSES</a>
              <a href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">PERFORMANCES</h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Explore the captivating world of Bharatanatyam through Nrithyamanasa's mesmerizing performances.
          </p>
        </div>
      </section>

      {/* Performance Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Nrithya Taranga</h2>
              <p className="text-lg text-gray-600 mb-4">
                An annual Bharatanatyam event showcasing the talent and dedication of Nrithyamanasa's students.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Classical Bharatanatyam recitals</li>
                <li>Thematic dance productions</li>
                <li>Student showcases</li>
              </ul>
              <Link to="/" className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn more about upcoming performances
              </Link>
            </div>
            
            <div>
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/05/s2.jpg" 
                alt="Nrithya Taranga Performance"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Performance Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Performance Images - Replace with actual images */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/400x300" 
                alt="Performance 1"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 px-4">
                  Performance Title 1
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/400x300" 
                alt="Performance 2"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 px-4">
                  Performance Title 2
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://via.placeholder.com/400x300" 
                alt="Performance 3"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 px-4">
                  Performance Title 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/05/aaaa.png" 
                  alt="Nrithyamanasa Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Bay Area's premier Bharatanatyam academy, nurturing classical dance traditions since inception.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about-manasa" className="hover:text-white transition-colors">About Manasa</Link></li>
                <li><span className="text-white">Performances</span></li>
                <li><Link to="/press-gallery" className="hover:text-white transition-colors">Press Gallery</Link></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Beginner Classes</li>
                <li>Intermediate Training</li>
                <li>Advanced/Pre-Arangetram</li>
                <li>Esha Yoga</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect with me on Social Media</h3>
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://www.facebook.com/nrithyamanasa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/nrithyamanasa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCjHetu8d3HAn6D3NViNLNjA/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
              <div className="space-y-2 text-gray-400">
                <p>1078 Monroe St, Santa Clara, CA 95050</p>
                <p>858 880 4577</p>
                <p>manasanrithya@gmail.com</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Nrithyamanasa Performing Arts Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Performances;
