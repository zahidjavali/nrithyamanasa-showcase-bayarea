
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

      {/* Recent Performances Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Recent Performances</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Deepotsava from Renowned Bay area Artists</h3>
              <p className="text-gray-700">November 16th 2019</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Endaro Mahanubhavulu Performance for Sapthathi</h3>
              <p className="text-gray-700">Mysore, India – November 1st and 2nd 2019</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Samarpanam – Divine offering to the Guru</h3>
              <p className="text-gray-700">Mission city center for performing arts center, Santa Clara on 8/25/2019, 4 pm – 6 pm</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Global Beats Stage</h3>
              <p className="text-gray-700">Sponsored by World Heritage Cultural Center – 3/23/2019</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Sri Krishnaleela Taranga</h3>
              <p className="text-gray-700">09/12/2018</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Maha Shivaratri 2018 celebration</h3>
              <p className="text-gray-700">SVCC, Fremont – 2/13/2018, 8:00 pm</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Sankranti Sambaralu</h3>
              <p className="text-gray-700">San Ramon – 1/13/2018</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Nrithya Taranga 2017</h3>
              <p className="text-gray-700">Sunnyvale – 11/26/27</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Performances on the occasion of Maha Shivaratri</h3>
              <p className="text-gray-700">2/24/2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shivanandam Festival Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Shivanandam - 17th Maha Shivaratri Dance Celebration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Palo Alto Arts Center</h3>
              <p className="text-gray-700">7:30 pm</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">SVCC, Fremont</h3>
              <p className="text-gray-700">8:30 pm</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Shiva Durga Temple</h3>
              <p className="text-gray-700">10 pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Performances Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Past Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Performance at Apple on the occasion of Diwali</h3>
                <p className="text-gray-700">October 28, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Sankat Mochan Hanuman Temple</h3>
                <p className="text-gray-700">Watsonville, CA – June 25, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Thyagraja Festival</h3>
                <p className="text-gray-700">Cleveland – April 2, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Natyanjali</h3>
                <p className="text-gray-700">Sacramento – March 19, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">SVCC Temple</h3>
                <p className="text-gray-700">Fremont – March 6, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Maha Kaleshwar Temple</h3>
                <p className="text-gray-700">Santa Clara – March 5, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Performance at Bangalore</h3>
                <p className="text-gray-700">2014</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Performance at Mysore</h3>
                <p className="text-gray-700">2013</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Mysore Dasara</h3>
                <p className="text-gray-700">2012</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Pallavothsava</h3>
                <p className="text-gray-700">Mysore – 2012</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900">Ranga Pravesha / Arangetram</h3>
                <p className="text-gray-700">Jagan Mohan Palace Auditorium, Mysore – 2012</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Festival Journey with Mentor</h3>
                <p className="text-gray-700 mb-4">Manasa has traveled extensively and performed on various platforms with her mentor. Here are a few notable event highlights of her long and satisfying journey:</p>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Pravah Festival, Goa</h4>
                    <p className="text-gray-600">2013</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Swathi Thirunal Festival</h4>
                    <p className="text-gray-600">Chennai, Tamil Nadu – 2013</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Pravah Festival</h4>
                    <p className="text-gray-600">Jodhpur, Rajasthan – 2011</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Brahmakumari</h4>
                    <p className="text-gray-600">Mt. Abu, Rajasthan – 2011</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Lokrang Festival</h4>
                    <p className="text-gray-600">Bhopal, Madhya Pradesh – 2010</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Brahmotsava Festival</h4>
                    <p className="text-gray-600">ISCKON, Bangalore, Karnataka – 2008 & 2010</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Mantralaya</h4>
                    <p className="text-gray-600">Andhra Pradesh</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Mahamastakabhisheka</h4>
                    <p className="text-gray-600">Shravanabelagola, Karnataka</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Kanakajayanti</h4>
                    <p className="text-gray-600">Mysore, Karnataka</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Lakkundi Utsava</h4>
                    <p className="text-gray-600">Hubli, Karnataka – 2008</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Hampi Utsav</h4>
                    <p className="text-gray-600">Hampi, Karnataka – 2007</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Jaatra Mahotsava</h4>
                    <p className="text-gray-600">Mysore, Karnataka – 2006</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Pallavotsava</h4>
                    <p className="text-gray-600">Mysore, Karnataka – 2006 to 2013</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h4 className="font-semibold text-purple-800">Mysore Dasara</h4>
                    <p className="text-gray-600">Mysore, Karnataka – 2005</p>
                  </div>
                </div>
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
