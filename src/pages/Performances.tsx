
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

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
      <Navigation 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background with Blur */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-pink-900/90 to-amber-900/95 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${new URL('@/assets/manasa-performance-banner.webp', import.meta.url).href}')`
            }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto w-full">
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
                  src={new URL('@/assets/manasa-performance-banner.webp', import.meta.url).href}
                  alt="Bharatanatyam Performance by Manasa Nagaraj"
                  className="w-full h-full object-cover"
                  width="192"
                  height="192"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-full blur opacity-30"></div>
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
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Nrithya Taranga</h3>
              <p className="text-gray-700 text-sm sm:text-base">September 2025</p>
              <p className="text-gray-700 text-sm sm:text-base">Mission City Center For Performing Arts, Santa Clara</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Purandara Vaibhava</h3>
              <p className="text-gray-700 text-sm sm:text-base">March 2025</p>
              <p className="text-gray-700 text-sm sm:text-base">Sri Krishna Vrindavana Temple, Bay Area</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Maha Shivaratri Naatyarchana</h3>
              <p className="text-gray-700 text-sm sm:text-base">February 2025</p>
              <p className="text-gray-700 text-sm sm:text-base">Sanatana Dharma Kendra, Bay Area</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Karnataka Composers Day</h3>
              <p className="text-gray-700 text-sm sm:text-base">October 2024</p>
              <p className="text-gray-700 text-sm sm:text-base">Organized by Namah Foundation, Bay Area</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-4 sm:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Nrithya Taranga</h3>
              <p className="text-gray-700 text-sm sm:text-base">September 2024</p>
              <p className="text-gray-700 text-sm sm:text-base">Mission City Center For Performing Arts, Santa Clara</p>
            </div>
            
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

      <Footer />
    </div>
  );
};

export default Performances;
