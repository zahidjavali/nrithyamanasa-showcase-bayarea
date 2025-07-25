
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-amber-900/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://manasanagaraj.com/wp-content/uploads/2019/04/5D4_7134.jpg')"
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              PERFORMANCES
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white font-medium leading-relaxed drop-shadow-lg">
              Experience the beauty and grace of classical Bharatanatyam through captivating performances and student showcases
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white shadow-2xl">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/04/5D4_7134.jpg" 
                  alt="Bharatanatyam Performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-amber-400 rounded-full blur opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance List Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Past Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-152456.png" 
                alt="Performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Spring Showcase 2022</h3>
                <p className="text-gray-600">A beautiful display of seasonal dances and traditional stories.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-153201.png" 
                alt="Performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Heritage Event</h3>
                <p className="text-gray-600">Celebrating Indian culture through classical dance performances.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-154133.png" 
                alt="Performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Youth Festival 2021</h3>
                <p className="text-gray-600">Young dancers showcasing their skills and passion for Bharatanatyam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Performances Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Upcoming Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nrithya Taranga 2024</h3>
                <p className="text-gray-600 mb-4">
                  Join us for our annual event showcasing the talent and dedication of our students.
                </p>
                <div className="space-y-2">
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
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Summer Recital 2024</h3>
                <p className="text-gray-600 mb-4">
                  A special summer presentation featuring intermediate and advanced students.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Date:</strong> August 15, 2024
                  </p>
                  <p className="text-gray-700">
                    <strong>Time:</strong> 5:00 PM - 7:00 PM
                  </p>
                  <p className="text-gray-700">
                    <strong>Venue:</strong> Community Hall, Sunnyvale, CA
                  </p>
                </div>
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
