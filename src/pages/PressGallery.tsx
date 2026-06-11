
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const PressGallery = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pressImages = [
    "/images/press-gallery/dance-like-swan-prajavani-e1448583120986.webp",
    "/images/press-gallery/DH-1.webp",
    "/images/press-gallery/hindu-1-e1448582811410.webp",
    "/images/press-gallery/hindu2-2-e1448582889114.webp",
    "/images/press-gallery/hindu-2-e1448582838742.webp",
    "/images/press-gallery/IE-e1448583067987.webp",
    "/images/press-gallery/Kp-1.webp",
    "/images/press-gallery/mysoremitra1.webp",
    "/images/press-gallery/nritya-prathibe-e1448583165333.webp",
    "/images/press-gallery/prajanudi.webp",
    "/images/press-gallery/SOM-PAllaotsava-photo.webp",
    "/images/press-gallery/som-pallotsava-1-e1448582932181.webp",
    "/images/press-gallery/SOM-Rangapravesha-e1448582992873.webp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50">
      <Helmet>
        <title>Press Gallery & Media Coverage | Nrithyamanasa Academy</title>
        <meta name="description" content="Explore media coverage and press articles about Nrithyamanasa Academy and Manasa Nagaraj's Bharatanatyam performances in newspapers and publications." />
        <meta property="og:title" content="Press Gallery & Media Coverage | Nrithyamanasa Academy" />
        <meta property="og:description" content="Explore media coverage and press articles about Nrithyamanasa Academy and Manasa Nagaraj's Bharatanatyam performances." />
        <meta property="og:image" content="https://manasanagaraj.com/lovable-uploads/3b57576e-62d1-40fc-820e-30b6d5fb1026.png" />
        <meta property="og:url" content="https://manasanagaraj.com/press-gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Press Gallery & Media Coverage | Nrithyamanasa Academy" />
        <meta name="twitter:description" content="Explore media coverage and press articles about Nrithyamanasa Academy." />
        <meta name="twitter:image" content="https://manasanagaraj.com/lovable-uploads/3b57576e-62d1-40fc-820e-30b6d5fb1026.png" />
        <link rel="canonical" href="https://manasanagaraj.com/press-gallery" />
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
              backgroundImage: `url('${new URL('@/assets/press-gallery-banner.webp', import.meta.url).href}')`
            }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto w-full">
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
                  src={new URL('@/assets/press-gallery-banner.webp', import.meta.url).href}
                  alt="Press Coverage - Manasa Nagaraj Bharatanatyam Performance"
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
                    alt={`Press coverage of Manasa Nagaraj Bharatanatyam performance ${index + 1}`}
                    className="w-full h-auto object-contain rounded"
                    width="400"
                    height="300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressGallery;
