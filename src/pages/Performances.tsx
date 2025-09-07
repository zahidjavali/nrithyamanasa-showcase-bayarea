
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Performances = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50">
      <Helmet>
        <title>Bharatanatyam Performances | Nrithyamanasa Academy</title>
        <meta name="description" content="Watch beautiful Bharatanatyam performances by students of Nrithyamanasa Academy. Experience the grace and beauty of classical Indian dance through our showcases and recitals." />
        <meta property="og:title" content="Bharatanatyam Performances | Nrithyamanasa Academy" />
        <meta property="og:description" content="Watch beautiful Bharatanatyam performances by students of Nrithyamanasa Academy. Experience the grace and beauty of classical Indian dance." />
        <meta property="og:image" content="/lovable-uploads/f9cfedfe-4f86-49ae-96a3-625c6e9c9b48.png" />
        <meta property="og:url" content="https://manasanagaraj.netlify.app/performances" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bharatanatyam Performances | Nrithyamanasa Academy" />
        <meta name="twitter:description" content="Watch beautiful Bharatanatyam performances by students of Nrithyamanasa Academy." />
        <meta name="twitter:image" content="/lovable-uploads/f9cfedfe-4f86-49ae-96a3-625c6e9c9b48.png" />
        <link rel="canonical" href="https://manasanagaraj.netlify.app/performances" />
      </Helmet>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/74d7bb37-cf4a-4724-a81f-71869fc277ee.png" 
                  alt="Logo" 
                  className="h-8 sm:h-10 w-auto cursor-pointer"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">HOME</Link>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">ABOUT MANASA</Link>
              <span className="text-purple-600 font-semibold text-sm lg:text-base">PERFORMANCES</span>
              <Link to="/press-gallery" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">PRESS GALLERY</Link>
              <a href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">CONTACT</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-purple-100">
                <Link 
                  to="/" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  to="/about-manasa" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT MANASA
                </Link>
                <span className="block px-3 py-2 text-purple-600 font-semibold">PERFORMANCES</span>
                <Link 
                  to="/press-gallery" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PRESS GALLERY
                </Link>
                <Link 
                  to="/#contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-amber-900/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://manasanagaraj.com/wp-content/uploads/2019/04/5D4_7134.jpg')"
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
              PERFORMANCES
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto text-white font-medium leading-relaxed drop-shadow-lg">
              Experience the beauty and grace of classical Bharatanatyam through captivating performances and student showcases
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white shadow-2xl">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-8 sm:mb-12">Recent Performances</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Deepotsava from Renowned Bay area Artists</h3>
              <p className="text-gray-700 text-sm sm:text-base">November 16th 2019</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Endaro Mahanubhavulu Performance for Sapthathi</h3>
              <p className="text-gray-700 text-sm sm:text-base">Mysore, India – November 1st and 2nd 2019</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Samarpanam – Divine offering to the Guru</h3>
              <p className="text-gray-700 text-sm sm:text-base">Mission city center for performing arts center, Santa Clara on 8/25/2019, 4 pm – 6 pm</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Global Beats Stage</h3>
              <p className="text-gray-700 text-sm sm:text-base">Sponsored by World Heritage Cultural Center – 3/23/2019</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Sri Krishnaleela Taranga</h3>
              <p className="text-gray-700 text-sm sm:text-base">09/12/2018</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Maha Shivaratri 2018 celebration</h3>
              <p className="text-gray-700 text-sm sm:text-base">SVCC, Fremont – 2/13/2018, 8:00 pm</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Sankranti Sambaralu</h3>
              <p className="text-gray-700 text-sm sm:text-base">San Ramon – 1/13/2018</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Nrithya Taranga 2017</h3>
              <p className="text-gray-700 text-sm sm:text-base">Sunnyvale – 11/26/27</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Performances on the occasion of Maha Shivaratri</h3>
              <p className="text-gray-700 text-sm sm:text-base">2/24/2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shivanandam Festival Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-8 sm:mb-12">Shivanandam - 17th Maha Shivaratri Dance Celebration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Palo Alto Arts Center</h3>
              <p className="text-gray-700 text-sm sm:text-base">7:30 pm</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">SVCC, Fremont</h3>
              <p className="text-gray-700 text-sm sm:text-base">8:30 pm</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Shiva Durga Temple</h3>
              <p className="text-gray-700 text-sm sm:text-base">10 pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Performances Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-8 sm:mb-12">Past Performances</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Performance at Apple on the occasion of Diwali</h3>
                <p className="text-gray-700 text-xs sm:text-sm">October 28, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Sankat Mochan Hanuman Temple</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Watsonville, CA – June 25, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Thyagraja Festival</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Cleveland – April 2, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Natyanjali</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Sacramento – March 19, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">SVCC Temple</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Fremont – March 6, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Maha Kaleshwar Temple</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Santa Clara – March 5, 2016</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Performance at Bangalore</h3>
                <p className="text-gray-700 text-xs sm:text-sm">2014</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Performance at Mysore</h3>
                <p className="text-gray-700 text-xs sm:text-sm">2013</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Mysore Dasara</h3>
                <p className="text-gray-700 text-xs sm:text-sm">2012</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Pallavothsava</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Mysore – 2012</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-3 sm:p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-900 text-sm sm:text-base">Ranga Pravesha / Arangetram</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Jagan Mohan Palace Auditorium, Mysore – 2012</p>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-purple-100">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-3 sm:mb-4">Festival Journey with Mentor</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">Manasa has traveled extensively and performed on various platforms with her mentor. Here are a few notable event highlights of her long and satisfying journey:</p>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Pravah Festival, Goa</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">2013</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Swathi Thirunal Festival</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Chennai, Tamil Nadu – 2013</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Pravah Festival</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Jodhpur, Rajasthan – 2011</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Brahmakumari</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Mt. Abu, Rajasthan – 2011</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Lokrang Festival</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Bhopal, Madhya Pradesh – 2010</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Brahmotsava Festival</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">ISCKON, Bangalore, Karnataka – 2008 & 2010</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Mantralaya</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Andhra Pradesh</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Mahamastakabhisheka</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Shravanabelagola, Karnataka</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Kanakajayanti</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Mysore, Karnataka</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Lakkundi Utsava</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Hubli, Karnataka – 2008</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Hampi Utsav</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Hampi, Karnataka – 2007</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Jaatra Mahotsava</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Mysore, Karnataka – 2006</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Pallavotsava</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Mysore, Karnataka – 2006 to 2013</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Mysore Dasara</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Mysore, Karnataka – 2005</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/74d7bb37-cf4a-4724-a81f-71869fc277ee.png" 
                  alt="Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Bay Area's premier Bharatanatyam academy, nurturing classical dance traditions since inception. As a proud affiliate of SAMPADA University, we offer students the opportunity to pursue formal dance examinations and certifications, ensuring authentic training rooted in traditional methodology while providing recognized academic credentials.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about-manasa" className="hover:text-white transition-colors">About Manasa</Link></li>
                <li><span className="text-white">Performances</span></li>
                <li><Link to="/press-gallery" className="hover:text-white transition-colors">Press Gallery</Link></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Programs</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Beginner Classes</li>
                <li>Intermediate Training</li>
                <li>Advanced/Pre-Arangetram</li>
                <li><a href="https://www.eshayoga.com/" className="hover:text-white transition-colors">Esha Yoga</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Connect with me on Social Media</h3>
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://www.facebook.com/nrithyamanasa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/nrithyamanasa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCjHetu8d3HAn6D3NViNLNjA/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>1078 Monroe St, Santa Clara, CA 95050</p>
                <p>858 880 4577</p>
                <p>manasanrithya@gmail.com</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 sm:my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 Nrithyamanasa Performing Arts Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Performances;
