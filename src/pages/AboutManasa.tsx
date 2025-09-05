import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Menu, X, Star, Heart, Sparkles, Music, Flower, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AboutManasa = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/lovable-uploads/4a94da77-9a3e-4002-94e9-75db84e6c8ce.png",
    "/lovable-uploads/58c23e78-c86f-4d64-9e7d-9a29133a6273.png", 
    "/lovable-uploads/3b57576e-62d1-40fc-820e-30b6d5fb1026.png",
    "/lovable-uploads/19d84a2d-4f0e-4d66-b943-9cfb8dd709af.png",
    "/lovable-uploads/853fc79e-5fff-4635-9d9d-88bb107c6fae.png",
    "/lovable-uploads/8cf78aad-8881-4264-9a55-2013c1b005c3.png",
    "/lovable-uploads/f9cfedfe-4f86-49ae-96a3-625c6e9c9b48.png"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Auto-slide images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const FloatingIcon = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
      className="absolute text-amber-400 opacity-30"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );

  const SparkleEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <Helmet>
        <title>About Manasa Nagaraj - Master Bharatanatyam Instructor | Nrithyamanasa</title>
        <meta name="description" content="Learn about Manasa Nagaraj, the master instructor behind Nrithyamanasa Academy. Discover her journey, achievements, and dedication to preserving classical Bharatanatyam tradition." />
        <meta property="og:title" content="About Manasa Nagaraj - Master Bharatanatyam Instructor | Nrithyamanasa" />
        <meta property="og:description" content="Learn about Manasa Nagaraj, the master instructor behind Nrithyamanasa Academy. Discover her journey, achievements, and dedication to preserving classical Bharatanatyam tradition." />
        <meta property="og:image" content="/lovable-uploads/4a94da77-9a3e-4002-94e9-75db84e6c8ce.png" />
        <meta property="og:url" content="https://manasanagaraj.netlify.app/about-manasa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Manasa Nagaraj - Master Bharatanatyam Instructor" />
        <meta name="twitter:description" content="Learn about Manasa Nagaraj, the master instructor behind Nrithyamanasa Academy." />
        <meta name="twitter:image" content="/lovable-uploads/4a94da77-9a3e-4002-94e9-75db84e6c8ce.png" />
        <link rel="canonical" href="https://manasanagaraj.netlify.app/about-manasa" />
      </Helmet>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <motion.img 
                  src="/lovable-uploads/74d7bb37-cf4a-4724-a81f-71869fc277ee.png" 
                  alt="Nrithyamanasa Logo" 
                  className="h-8 sm:h-10 w-auto cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105">HOME</Link>
              <span className="text-purple-600 font-bold text-sm lg:text-base bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ABOUT MANASA</span>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105">PERFORMANCES</Link>
              <Link to="/press-gallery" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105">PRESS GALLERY</Link>
              <a href="/#contact" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105">CONTACT</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="Toggle mobile menu"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-purple-100">
                  <Link 
                    to="/" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                  <span className="block px-3 py-2 text-purple-600 font-semibold">ABOUT MANASA</span>
                  <Link 
                    to="/performances" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PERFORMANCES
                  </Link>
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-pink-900/90 to-amber-900/95 z-10"></div>
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${images[currentImageIndex]}')`
            }}
            key={currentImageIndex}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Floating Decorative Elements */}
          <FloatingIcon delay={0}>
            <Music className="w-8 h-8" style={{ left: '10%', top: '20%' }} />
          </FloatingIcon>
          <FloatingIcon delay={1}>
            <Flower className="w-6 h-6" style={{ right: '15%', top: '30%' }} />
          </FloatingIcon>
          <FloatingIcon delay={2}>
            <Star className="w-7 h-7" style={{ left: '20%', bottom: '25%' }} />
          </FloatingIcon>
          <FloatingIcon delay={0.5}>
            <Heart className="w-5 h-5" style={{ right: '25%', bottom: '35%' }} />
          </FloatingIcon>
          
          <SparkleEffect />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                ABOUT MANASA
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto text-white font-medium leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Discover the journey of a dedicated artist passionate about preserving and sharing the classical art of <span className="text-yellow-300 font-bold">Bharatanatyam</span>
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-white shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img 
                  src="/lovable-uploads/3b57576e-62d1-40fc-820e-30b6d5fb1026.png" 
                  alt="Manasa Nagaraj - Classical Bharatanatyam Dancer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-full blur opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Decorative elements around the image */}
              <motion.div
                className="absolute -top-4 -right-4 text-yellow-300"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section with Image Carousel */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-6">
              The <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Artistic Journey</span>
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Every time she steps on the stage, <span className="font-bold text-purple-700">Manasa leaves her audience spellbound</span> with her fluidity of movements, elegant poses and exceptionally emotive expressions. The happiness that emanates from her personality is palpable as she performs what has been her passion all her life—<span className="text-amber-600 font-semibold">Bharatanatyam</span>.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Manasa took to stage at the <span className="font-bold text-pink-600">tender age of five</span> to perform with the wondrous mind of a keen child. As an ardent disciple of the ancient Indian classical dance form, she trained formally, from the age of five, under the auspices of <span className="font-semibold text-purple-700">Karnataka Kalatilaka Dr. Vasundhara Doraswamy</span>, a proficient Bharatanatyam Dancer and well-qualified trainer.
                </motion.p>
                
                <motion.div 
                  className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-gray-700 font-medium">
                    Along with <span className="text-purple-700 font-bold">Masters in Dance-Bharatanatyam from Mysore University</span>, she also finished <span className="text-amber-600 font-bold">Vidwat conducted by Karnataka Secondary Education Examination Board for Dance (KSEEBD)</span>.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <motion.div 
                        className="relative overflow-hidden rounded-2xl shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <img 
                          src={image} 
                          alt={`Manasa Nagaraj Performance ${index + 1}`}
                          className="w-full h-[400px] object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-purple-600 hover:text-purple-800" />
                <CarouselNext className="text-purple-600 hover:text-purple-800" />
              </Carousel>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Skillful Teacher */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-orange-200 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Flower className="w-6 h-6" />
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img 
                  src="/lovable-uploads/58c23e78-c86f-4d64-9e7d-9a29133a6273.png" 
                  alt="Manasa Nagaraj Teaching"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Star className="w-4 h-4 inline mr-1" />
                Master Teacher
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                The <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Skillful Compassionate</span> Teacher
              </motion.h2>
              
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  With a <span className="font-bold text-orange-600">Ranga Pravesha performance</span>, that garnered accolades from media and the art society and numerous on-stage national performances, she has displayed her comprehensive understanding of the intricacies of this ancient dance form. This qualifies her not only as a trainer but also as a <span className="font-semibold text-purple-700">learned judge of others' performances</span>.
                </motion.p>
                
                <motion.div 
                  className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border-l-4 border-amber-500"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-gray-700">
                    Serving as an expert Bharatanatyam trainer, she worked for two years at <span className="font-bold text-amber-700">Vasundhara Performing Arts Center, Mysore, Karnataka</span>. She also tutored the hearing impaired disciples at <span className="font-semibold text-orange-600">Rotary West and Parent's Association of Deaf Children Trust</span>.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mesmerizing Audiences */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Continuing to <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">Mesmerize Audiences</span>
              </motion.h2>
              
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Having presented exemplary performances in several highly acclaimed dance festivals across India, Manasa has received <span className="font-bold text-purple-700">rave reviews from leading newspapers</span>, both national and regional, and art aficionados.
                </motion.p>
                
                <motion.div 
                  className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-gray-700 font-medium mb-4">Featured in prestigious publications:</p>
                  <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
                    <div className="text-purple-700">• The Hindu</div>
                    <div className="text-blue-700">• New Indian Express</div>
                    <div className="text-indigo-700">• Deccan Herald</div>
                    <div className="text-purple-600">• Prajavani</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-700 mb-1">Mysore Dasara</h4>
                    <p className="text-sm text-gray-600">Performed twice at this renowned cultural festival</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-700 mb-1">Lokrang 2010</h4>
                    <p className="text-sm text-gray-600">Part of "Incredible India" tourism campaign</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img 
                  src="/lovable-uploads/74d7bb37-cf4a-4724-a81f-71869fc277ee.png" 
                  alt="Manasa Nagaraj Logo Performance"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              {/* Achievement badges */}
              <motion.div
                className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🏆 National Performer
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⭐ Media Featured
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Doer - Interactive Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 relative overflow-hidden">
        <SparkleEffect />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The <span className="text-transparent bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text">Doer</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Bay Area Vision",
                desc: "Currently located in Bay Area, she aspires to utilize her knowledge gained through perseverance and hard-work."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Nrithyamanasa Center",
                desc: "She has started Nrithyamanasa Performing Arts Center for professional career-oriented classes."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Future Goals",
                desc: "She plans workshops and dance contests to showcase and encourage budding young dancers."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <motion.div 
                  className="text-pink-600 mb-4 flex justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Continues */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-pink-900 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-300/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-3 h-3" />
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            The Journey <span className="text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text">Continues...</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            With her passion and dedication, <span className="font-bold text-yellow-300">Manasa Nagaraj</span> has become an excellent Bharatanatyam dancer. Now all she desires is to <span className="font-bold text-pink-300">spread, share and utilize her knowledge</span> about the dance form in all plausible ways to benefit others.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full flex items-center justify-center shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="w-12 h-12 text-purple-900" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <motion.img 
                  src="/lovable-uploads/74d7bb37-cf4a-4724-a81f-71869fc277ee.png" 
                  alt="Nrithyamanasa Logo" 
                  className="h-8 w-auto"
                  whileHover={{ scale: 1.1 }}
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
                <li><span className="text-white">About Manasa</span></li>
                <li><Link to="/performances" className="hover:text-white transition-colors">Performances</Link></li>
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
                <motion.a 
                  href="https://www.facebook.com/nrithyamanasa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/nrithyamanasa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
                <motion.a 
                  href="https://www.youtube.com/channel/UCjHetu8d3HAn6D3NViNLNjA/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
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

export default AboutManasa;