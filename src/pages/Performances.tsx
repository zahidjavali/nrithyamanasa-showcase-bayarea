import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

const Performances = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/05/aaaa.png" 
                alt="Logo" 
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-amber-600/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://manasanagaraj.com/wp-content/uploads/2019/04/5D4_7134.jpg')"
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">PERFORMANCES</h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-amber-100">
            Experience the beauty and grace of classical Bharatanatyam through our captivating performances and student showcases.
          </p>
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
              <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white/30">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/04/5D4_7134.jpg" 
                  alt="Bharatanatyam Performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance List Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Past Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Performance Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-143858.jpg" 
                alt="Performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Day Performance 2023</h3>
                <p className="text-gray-600">A showcase of our students' hard work and dedication throughout the year.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-144620.png" 
                alt="Performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nrithya Taranga 2022</h3>
                <p className="text-gray-600">A grand performance featuring advanced students and guest artists.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-151857.png" 
                alt="Performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Diwali Special Performance</h3>
                <p className="text-gray-600">A festive performance celebrating the festival of lights with traditional dances.</p>
              </div>
            </div>
            {/* Add more performance cards here */}
          </div>
        </div>
      </section>

      {/* Upcoming Performances Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Upcoming Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example Upcoming Performance Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nrithya Taranga 2024</h3>
                <p className="text-gray-600 mb-4">
                  Join us for our annual event showcasing the talent and dedication of our students.
                </p>
                <p className="text-gray-700">
                  <strong>Date:</strong> September 22, 2024
                </p>
                <p className="text-gray-700">
                  <strong>Time:</strong> 4:00 PM - 6:00 PM
                </p>
                <p className="text-gray-700">
                  <strong>Venue:</strong> Mission City Center For Performing Arts, Santa Clara, CA
                </p>
              </div>
            </div>

            {/* Add more upcoming performance cards here */}
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
                  alt="Logo" 
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
                <li><a href="https://www.eshayoga.com/" className="hover:text-white transition-colors">Esha Yoga</a></li>
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
