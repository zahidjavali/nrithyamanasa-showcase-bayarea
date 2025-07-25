import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

const PressGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                className="h-10 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">HOME</Link>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-colors">ABOUT MANASA</Link>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-colors">PERFORMANCES</Link>
              <span className="text-purple-600 font-semibold">PRESS GALLERY</span>
              <a href="/#showcase" className="text-gray-700 hover:text-purple-600 transition-colors">SHOWCASE</a>
              <a href="/#classes" className="text-gray-700 hover:text-purple-600 transition-colors">CLASSES</a>
              <a href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://manasanagaraj.com/wp-content/uploads/2019/04/hindu-1-e1448582811410.jpg')"
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">IN THE NEWS</h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Discover the media coverage and press reviews of Manasa's exceptional performances and contributions to Bharatanatyam.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">
              In October 2012, her Ranga Pravesh or Arangetram enthralled the art aficionados and media alike. Several national and regional publications reported the event in glowing terms.
            </p>
            
            <div className="text-left space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Moving with felicity</h3>
                <p className="text-gray-600 mb-4">
                  <em>V. Nagaraj</em> from <em>The Hindu</em>, a leading Indian newspaper, commented, "<em>T.L. Manasa's performance was exemplary: one could distinctly mark neatness in presenting the numbers at all levels of the progressions of the concert</em>."
                </p>
                <p className="text-gray-600 mb-4">
                  Impressed with her liquid grace, he further commented, "<em>The young danseuse assumes postures with remarkable felicity and maintains stability for the required duration; vinyasas are complete and crisp gracefully culminating in the sprightly cadences.</em>"
                </p>
                <p className="text-gray-600 mb-8">
                  Comparing her vivacious debut with a consummate performer he added, "<em>She materialised every imagination and vision her Guru had conceived while choreographing the padavarna; whether it was nrutha or the nrithya section, the artiste's fluency and ease, combined with her expressions, elevated the sequences to such degree of accomplishment, which would exclusively be an outcome of an extempore of an accomplished dancer.</em>"
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Dancing like a swan</h3>
                <p className="text-gray-600 mb-4">
                  <em>Prajavani</em>, a leading Kannada-language newspaper from Karnataka, reported on her Arangetram: "<em>Manasa entered the stage and enacted the meaning of beauty without depending on words, just with her physical movements, foot designs, and hand movements. She made her body the medium and enacted various aspects of dance like Drushti-Mandala-Chari-Bhramari in a very attractive way. The special attraction was that she entwined dance and acting together in her expressions.</em>"
                </p>
                <p className="text-gray-600 mb-4">
                  Praising her expertise in the dance form, it was further remarked, "<em>She showed mastery in various forms of dance and maintained body balance in revolving movements, expressed radiantly through her eyes and did not show tiredness of body, which indicated commitment to her craft.</em>"
                </p>
                <p className="text-gray-600">
                  <em>Prajavani</em> also carried an exclusive piece on Manasa and her progress in Bharatanatyam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Press Coverage Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-4">
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
                <li><Link to="/performances" className="hover:text-white transition-colors">Performances</Link></li>
                <li><span className="text-white">Press Gallery</span></li>
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

export default PressGallery;
