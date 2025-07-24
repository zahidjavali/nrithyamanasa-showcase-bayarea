import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PressGallery = () => {
  const pressImages = [
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/dance-like-swan-prajavani-e1448583120986.png",
      alt: "Prajavani newspaper article about Manasa's dance performance",
      title: "Dancing like a swan - Prajavani"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/DH-1.png",
      alt: "Deccan Herald newspaper coverage of Manasa's performance",
      title: "Deccan Herald Coverage"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/hindu-1-e1448582811410.jpg",
      alt: "The Hindu newspaper article about Manasa's Bharatanatyam performance",
      title: "The Hindu Article"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/hindu2-2-e1448582889114.png",
      alt: "The Hindu newspaper feature on Manasa's dance",
      title: "The Hindu Feature"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/hindu-2-e1448582838742.jpg",
      alt: "The Hindu newspaper review of Manasa's performance",
      title: "The Hindu Review"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/IE-e1448583067987.png",
      alt: "Indian Express newspaper coverage of Manasa's dance",
      title: "Indian Express Coverage"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/Kp-1.png",
      alt: "Newspaper article about Manasa's Bharatanatyam performance",
      title: "Press Coverage"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/mysoremitra1.png",
      alt: "Mysore Mitra newspaper article about Manasa's dance",
      title: "Mysore Mitra Article"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/nritya-prathibe-e1448583165333.png",
      alt: "Nritya Prathibe newspaper feature on Manasa",
      title: "Nritya Prathibe Feature"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/prajanudi-400x516.png",
      alt: "Praja Nudi newspaper article about Manasa's performance",
      title: "Praja Nudi Article"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/SOM-PAllaotsava-photo..png",
      alt: "Star of Mysore newspaper coverage of Pallotsava event",
      title: "Star of Mysore - Pallotsava"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/som-pallotsava-1-e1448582932181.png",
      alt: "Star of Mysore newspaper article about Pallotsava performance",
      title: "Star of Mysore - Pallotsava Coverage"
    },
    {
      url: "https://manasanagaraj.com/wp-content/uploads/2019/04/SOM-Rangapravesha-e1448582992873.png",
      alt: "Star of Mysore newspaper coverage of Manasa's Rangapravesha",
      title: "Star of Mysore - Rangapravesha"
    }
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
                alt="Nrithyamanasa Logo" 
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">IN THE NEWS</h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            In October 2012, her Ranga Pravesh or Arangetram enthralled the art aficionados and media alike. Several national and regional publications reported the event in glowing terms.
          </p>
        </div>
      </section>

      {/* Press Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Moving with Felicity</h2>
              <p className="text-lg text-gray-600 mb-4">
                V. Nagaraj from <em>The Hindu</em>, a leading Indian newspaper, commented:
              </p>
              <blockquote className="text-lg text-gray-700 italic mb-4 pl-4 border-l-4 border-purple-500">
                "T.L. Manasa's performance was exemplary: one could distinctly mark neatness in presenting the numbers at all levels of the progressions of the concert."
              </blockquote>
              <p className="text-lg text-gray-600 mb-4">
                Impressed with her liquid grace, he further commented:
              </p>
              <blockquote className="text-lg text-gray-700 italic mb-4 pl-4 border-l-4 border-purple-500">
                "The young danseuse assumes postures with remarkable felicity and maintains stability for the required duration; vinyasas are complete and crisp gracefully culminating in the sprightly cadences."
              </blockquote>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Dancing like a Swan</h2>
              <p className="text-lg text-gray-600 mb-4">
                <em>Prajavani</em>, a leading Kannada-language newspaper from Karnataka, reported on her Arangetram:
              </p>
              <blockquote className="text-lg text-gray-700 italic mb-4 pl-4 border-l-4 border-amber-500">
                "Manasa entered the stage and enacted the meaning of beauty without depending on words, just with her physical movements, foot designs, and hand movements. She made her body the medium and enacted various aspects of dance like Drushti-Mandala-Chari-Bhramari in a very attractive way."
              </blockquote>
              <p className="text-lg text-gray-600 mb-4">
                Praising her expertise in the dance form, it was further remarked:
              </p>
              <blockquote className="text-lg text-gray-700 italic pl-4 border-l-4 border-amber-500">
                "She showed mastery in various forms of dance and maintained body balance in revolving movements, expressed radiantly through her eyes and did not show tiredness of body, which indicated commitment to her craft."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Press Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Press Coverage Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pressImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                    {image.title}
                  </p>
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

export default PressGallery;
