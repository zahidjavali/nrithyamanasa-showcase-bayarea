
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const PressGallery = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pressImages = [
    "https://manasanagaraj.com/wp-content/uploads/2019/04/dance-like-swan-prajavani-e1448583120986.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/DH-1.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/hindu-1-e1448582811410.jpg",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/hindu2-2-e1448582889114.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/hindu-2-e1448582838742.jpg",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/IE-e1448583067987.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/Kp-1.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/mysoremitra1.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/nritya-prathibe-e1448583165333.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/prajanudi.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/SOM-PAllaotsava-photo..png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/som-pallotsava-1-e1448582932181.png",
    "https://manasanagaraj.com/wp-content/uploads/2019/04/SOM-Rangapravesha-e1448582992873.png"
  ];

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
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">HOME</Link>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">ABOUT MANASA</Link>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">PERFORMANCES</Link>
              <span className="text-purple-600 font-semibold text-sm lg:text-base">PRESS GALLERY</span>
              <a href="/#showcase" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">SHOWCASE</a>
              <a href="/#classes" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">CLASSES</a>
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
                <Link 
                  to="/performances" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PERFORMANCES
                </Link>
                <span className="block px-3 py-2 text-purple-600 font-semibold">PRESS GALLERY</span>
                <a 
                  href="/#showcase" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SHOWCASE
                </a>
                <a 
                  href="/#classes" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CLASSES
                </a>
                <a 
                  href="/#contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-amber-900/95 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://manasanagaraj.com/wp-content/uploads/2019/04/hindu-1-e1448582811410.jpg')"
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
              PRESS GALLERY
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto text-white font-medium leading-relaxed drop-shadow-lg">
              Discover the media coverage and press reviews of Manasa's exceptional performances and contributions to Bharatanatyam
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white shadow-2xl">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/04/hindu-1-e1448582811410.jpg" 
                  alt="Press Coverage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-amber-400 rounded-full blur opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              In October 2012, her Ranga Pravesh or Arangetram enthralled the art aficionados and media alike. Several national and regional publications reported the event in glowing terms.
            </p>
            
            <div className="text-left space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">Moving with felicity</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  <em>V. Nagaraj</em> from <em>The Hindu</em>, a leading Indian newspaper, commented, "<em>T.L. Manasa's performance was exemplary: one could distinctly mark neatness in presenting the numbers at all levels of the progressions of the concert</em>."
                </p>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Impressed with her liquid grace, he further commented, "<em>The young danseuse assumes postures with remarkable felicity and maintains stability for the required duration; vinyasas are complete and crisp gracefully culminating in the sprightly cadences.</em>"
                </p>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Comparing her vivacious debut with a consummate performer he added, "<em>She materialised every imagination and vision her Guru had conceived while choreographing the padavarna; whether it was nrutha or the nrithya section, the artiste's fluency and ease, combined with her expressions, elevated the sequences to such degree of accomplishment, which would exclusively be an outcome of an extempore of an accomplished dancer.</em>"
                </p>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">Dancing like a swan</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  <em>Prajavani</em>, a leading Kannada-language newspaper from Karnataka, reported on her Arangetram: "<em>Manasa entered the stage and enacted the meaning of beauty without depending on words, just with her physical movements, foot designs, and hand movements. She made her body the medium and enacted various aspects of dance like Drushti-Mandala-Chari-Bhramari in a very attractive way. The special attraction was that she entwined dance and acting together in her expressions.</em>"
                </p>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Praising her expertise in the dance form, it was further remarked, "<em>She showed mastery in various forms of dance and maintained body balance in revolving movements, expressed radiantly through her eyes and did not show tiredness of body, which indicated commitment to her craft.</em>"
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <em>Prajavani</em> also carried an exclusive piece on Manasa and her progress in Bharatanatyam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Gallery Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-8 sm:mb-12">Press Coverage Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {pressImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 sm:p-4">
                  <img 
                    src={image} 
                    alt={`Press coverage ${index + 1}`}
                    className="w-full h-auto object-contain rounded"
                  />
                </div>
              </div>
            ))}
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
                  src="https://manasanagaraj.com/wp-content/uploads/2019/05/aaaa.png" 
                  alt="Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Bay Area's premier Bharatanatyam academy, nurturing classical dance traditions since inception.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about-manasa" className="hover:text-white transition-colors">About Manasa</Link></li>
                <li><Link to="/performances" className="hover:text-white transition-colors">Performances</Link></li>
                <li><span className="text-white">Press Gallery</span></li>
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

export default PressGallery;
