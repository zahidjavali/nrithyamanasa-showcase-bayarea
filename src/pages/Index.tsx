
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Star, MapPin, Phone, Mail, Award, Calendar, Users, Facebook, Instagram, Youtube, Clock, Music, Menu, X, Heart, Sparkles, Flower } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/lovable-uploads/3b57576e-62d1-40fc-820e-30b6d5fb1026.png",
    "/lovable-uploads/58c23e78-c86f-4d64-9e7d-9a29133a6273.png", 
    "/lovable-uploads/19d84a2d-4f0e-4d66-b943-9cfb8dd709af.png",
    "/lovable-uploads/853fc79e-5fff-4635-9d9d-88bb107c6fae.png"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Auto-slide hero images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const FloatingIcon = ({ children, delay = 0, style }: { children: React.ReactNode, delay?: number, style?: React.CSSProperties }) => (
    <motion.div
      className="absolute text-amber-400 opacity-30"
      style={style}
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
      {[...Array(15)].map((_, i) => (
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
          <Sparkles className="w-3 h-3" />
        </motion.div>
      ))}
    </div>
  );

  // SEO Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Bharatanatyam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bharatanatyam is a classical dance form from South India that evolved over centuries in temples and royal courts. It uses beautiful body movements, hand gestures, and facial expressions to tell stories."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum age to start learning Bharatanatyam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best age to start is 5 years and above. We teach children using fun and easy methods to help them learn the rhythms, music, and movements of Bharatanatyam."
        }
      },
      {
        "@type": "Question",
        "name": "How long and how many times a week are the classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classes are one hour long and held once or twice a week based on what students prefer. Please check our Classes page for the schedule."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    "name": "Nrithyamanasa Performing Arts Center",
    "description": "Bay Area's premier Bharatanatyam dance academy offering classes for all age groups",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1078 Monroe St",
      "addressLocality": "Santa Clara",
      "addressRegion": "CA",
      "postalCode": "95050",
      "addressCountry": "US"
    },
    "telephone": "858-880-4577",
    "email": "manasanrithya@gmail.com",
    "url": "https://manasanagaraj.com",
    "founder": {
      "@type": "Person",
      "name": "Manasa Nagaraj"
    },
    "offers": [
      {
        "@type": "Service",
        "name": "Beginner Bharatanatyam Classes",
        "description": "Foundation classes for students aged 5 and above"
      },
      {
        "@type": "Service",
        "name": "Intermediate Bharatanatyam Classes",
        "description": "Classes for students who have learned basic steps"
      },
      {
        "@type": "Service",
        "name": "Advanced Bharatanatyam Classes",
        "description": "Pre-Arangetram training for advanced students"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Manasa",
        "item": "/about-manasa"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Performances",
        "item": "/performances"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Press Gallery",
        "item": "/press-gallery"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50">
      <Helmet>
        <title>Nrithyamanasa - Premier Bharatanatyam Academy in Santa Clara</title>
        <meta name="description" content="Learn classical Indian dance Bharatanatyam with master instructor Manasa Nagaraj at Santa Clara's premier dance academy. Classes for all levels from beginner to advanced." />
        <meta property="og:title" content="Nrithyamanasa - Premier Bharatanatyam Academy in Santa Clara" />
        <meta property="og:description" content="Learn classical Indian dance Bharatanatyam with master instructor Manasa Nagaraj at Santa Clara's premier dance academy. Classes for all levels from beginner to advanced." />
        <meta property="og:image" content="/lovable-uploads/3b57576e-62d1-40fc-820e-30b6d5fb1026.png" />
        <meta property="og:url" content="https://manasanagaraj.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nrithyamanasa - Premier Bharatanatyam Academy in Santa Clara" />
        <meta name="twitter:description" content="Learn classical Indian dance Bharatanatyam with master instructor Manasa Nagaraj at Santa Clara's premier dance academy." />
        <meta name="twitter:image" content="/lovable-uploads/3b57576e-62d1-40fc-820e-30b6d5fb1026.png" />
        <link rel="canonical" href="https://manasanagaraj.netlify.app/" />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
              <span className="text-purple-600 font-bold text-sm lg:text-base bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">HOME</span>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105">ABOUT MANASA</Link>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105">PERFORMANCES</Link>
              <Link to="/press-gallery" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105">PRESS GALLERY</Link>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105">CONTACT</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-purple-600 transition-colors p-2"
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
                  <span className="block px-3 py-2 text-purple-600 font-semibold">HOME</span>
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
                  <Link 
                    to="/press-gallery" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PRESS GALLERY
                  </Link>
                  <button 
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }, 300);
                    }}
                  >
                    CONTACT
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-pink-900/90 to-amber-900/95 z-10"></div>
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${heroImages[currentImageIndex]}')`
            }}
            key={currentImageIndex}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
          />
          
          {/* Floating Decorative Elements */}
          <FloatingIcon delay={0} style={{ left: '10%', top: '20%' }}>
            <Music className="w-8 h-8" />
          </FloatingIcon>
          <FloatingIcon delay={1} style={{ right: '15%', top: '30%' }}>
            <Flower className="w-6 h-6" />
          </FloatingIcon>
          <FloatingIcon delay={2} style={{ left: '20%', bottom: '25%' }}>
            <Star className="w-7 h-7" />
          </FloatingIcon>
          <FloatingIcon delay={0.5} style={{ right: '25%', bottom: '35%' }}>
            <Heart className="w-5 h-5" />
          </FloatingIcon>
          
          <SparkleEffect />
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Nrithya Taranga 2025
            </span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-8 text-white font-medium leading-relaxed drop-shadow-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            The event is scheduled for <span className="text-yellow-300 font-bold">September 21st at 3:30 pm - 5:30 pm</span> and will be held at <span className="text-amber-300 font-bold">Mission City Center For Performing Arts</span> in Santa Clara.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg w-full sm:w-auto shadow-2xl border-2 border-amber-400/30"
                onClick={() => window.open('https://www.eventbrite.com/e/nrithya-taranga-2025-shakti-tickets-1598078137729?aff=oddtdtcreator', '_blank')}
              >
                Reserve Tickets
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg w-full sm:w-auto shadow-2xl border-2 border-purple-400/30"
              >
                <Link to="/about-manasa" className="flex items-center justify-center w-full h-full">About Manasa Nagaraj</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Taranga Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nrithya Taranga 2025</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for a beautiful evening of Bharatanatyam performances featuring talented students and special guests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700">Date & Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">September 21st, 2025</p>
                <p className="text-gray-600">3:30 PM - 5:30 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-amber-700">Venue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Mission City Center For Performing Arts</p>
                <p className="text-gray-600 text-sm">Santa Clara, CA</p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Music className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700">Performances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Classical Bharatanatyam recitals, themed productions, and student showcases</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-purple-50 to-pink-50 relative overflow-hidden">
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
              Meet <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Manasa Nagaraj</span>
            </h2>
            <Separator className="w-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 h-1 mb-6" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Manasa Nagaraj is the Artistic Director of <span className="font-bold text-purple-700">Nrithyamanasa Performing Arts Center</span>. She is also the Director of <a href="https://www.eshayoga.com/" className="text-purple-600 hover:text-purple-700 font-semibold underline decoration-purple-300">Esha Yoga</a>, a highly-rated studio in Santa Clara.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 sm:p-8 rounded-2xl border border-purple-200 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-6">Master Instructor & Artist</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With <span className="font-bold text-purple-700">decades of experience</span> in classical dance and wellness, Manasa brings exceptional skills to her students. Her commitment to preserving traditional <span className="text-amber-600 font-semibold">Bharatanatyam</span> while making it accessible to modern students has made her one of the most respected instructors in the Bay Area.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600">Highly rated instructor</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg w-full sm:w-auto">
                    <Link to="/about-manasa" className="flex items-center justify-center w-full h-full">Read More about Manasa</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <motion.div 
                  className="w-72 h-72 sm:w-80 sm:h-80 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img 
                    src="/lovable-uploads/4a94da77-9a3e-4002-94e9-75db84e6c8ce.png" 
                    alt="Manasa Nagaraj - Master Bharatanatyam Instructor"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-full blur opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Decorative elements around the image */}
                <motion.div
                  className="absolute -top-4 -right-4 text-yellow-400"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-8 h-8" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl sm:text-2xl font-bold text-purple-900 mb-2">Manasa Nagaraj</h4>
                <p className="text-gray-600 font-medium">Artistic Director & Master Instructor</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Classes for All Levels</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              NPAC offers dedicated instruction in Bharatanatyam for beginners, intermediate and advanced students. Using rhythmic footwork, geometric movements, coded hand gestures, and facial expressions to tell powerful stories and create intricate dance sequences, we help students develop their skills in both pure dance (nritta) and expressive dance (nritya). As a proud affiliate of SAMPADA University, we offer students the opportunity to pursue formal dance examinations and certifications, ensuring authentic training rooted in traditional methodology while providing recognized academic credentials.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center h-full">
              <CardHeader>
                <img 
                  src="/lovable-uploads/58c23e78-c86f-4d64-9e7d-9a29133a6273.png" 
                  alt="Bharatanatyam students of Manasa Nagaraj"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-purple-700">Beginner Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Students learn the basic dance steps (Adavus) during the first three years. In these important years, a strong foundation is built that helps students achieve perfection in later years. Classes are held twice a week for one hour each.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <img 
                  src="/lovable-uploads/19d84a2d-4f0e-4d66-b943-9cfb8dd709af.png" 
                  alt="Bharatanatyam students of Manasa Nagaraj"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-amber-700">Intermediate Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For students who have learned adavus. Warm-up and adavu classes focus on developing and maintaining posture and core strength. Expressive items are introduced with devotional themes. Classes are held twice a week for one hour each.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <img 
                  src="/lovable-uploads/853fc79e-5fff-4635-9d9d-88bb107c6fae.png" 
                  alt="Bharatanatyam students of Manasa Nagaraj"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-purple-700">Advanced/Pre-Arangetram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  In the three to four years before the arangetram, complex varnams and other advanced items are taught and practiced.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Showcase Section */}
      <section id="showcase" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Showcase</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the beauty and grace of Bharatanatyam through our performances and student showcases.
            </p>
          </div>
          
          <div className="aspect-video max-w-4xl mx-auto">
            <iframe 
              src="https://www.youtube.com/embed/videoseries?list=UUjHetu8d3HAn6D3NViNLNjA" 
              title="Nrithyamanasa Performance Videos"
              className="w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <div className="text-left space-y-2">
              <AccordionItem value="item-1" className="text-left">
                <AccordionTrigger className="text-purple-700 font-semibold text-left justify-start">
                  What is Bharatanatyam?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    <strong>Bharatanatyam</strong> is a classical dance form from South India that evolved over centuries in temples and royal courts. It uses beautiful body movements, hand gestures, and facial expressions to tell stories and express emotions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="text-left">
                <AccordionTrigger className="text-amber-700 font-semibold text-left justify-start">
                  How long and how many times a week are the classes?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Classes are one hour long and held once or twice a week based on what students prefer. Please check our Classes page for the schedule.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="text-left">
                <AccordionTrigger className="text-purple-700 font-semibold text-left justify-start">
                  What is the minimum age to start learning Bharatanatyam?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    The best age to start is 5 years and above. We teach children using fun and easy methods to help them learn the rhythms, music, and movements of Bharatanatyam.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="text-left">
                <AccordionTrigger className="text-amber-700 font-semibold text-left justify-start">
                  What should students wear for classes?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-left">
                    <ul className="text-gray-600 space-y-2">
                      <li>• Girls should wear a dance practice sari or salwar kameez.</li>
                      <li>• Boys should wear a dhoti or kurta pyjama.</li>
                      <li>• All students should have their waist firmly tied.</li>
                      <li>• Hair should be tied back neatly in a bun or plait.</li>
                      <li>• No dance costume, jewelry, or ankle bells should be worn.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="text-left">
                <AccordionTrigger className="text-purple-700 font-semibold text-left justify-start">
                  Why does each level take different time?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Each level progresses based on the student's ability, class participation, and regular practice at home. Each level builds on what you learned before, so it's very important to master each level completely before moving to the next.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="text-left">
                <AccordionTrigger className="text-amber-700 font-semibold text-left justify-start">
                  How do I register?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Click on the Signup | Register link to create an account and pay the registration fee. After your first class, we will set up monthly autopay that charges on the same date each month.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="text-left">
                <AccordionTrigger className="text-purple-700 font-semibold text-left justify-start">
                  How do I cancel?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    You need to give us 30 days written notice to stop autopay. Please email us at manasanrithya@gmail.com with "membership cancellation" in the subject line. We will send you a confirmation email within 7 business days. If you want to pause classes, we charge $15 per month as hold charges.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="text-left">
                <AccordionTrigger className="text-amber-700 font-semibold text-left justify-start">
                  Do you offer 1 class or 2 per week?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    We offer 2 classes per week, but students can choose 1 or 2 classes based on their schedule.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="text-left">
                <AccordionTrigger className="text-purple-700 font-semibold text-left justify-start">
                  Are classes held during summer and winter breaks?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Yes, classes continue during summer and winter breaks.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="text-left">
                <AccordionTrigger className="text-amber-700 font-semibold text-left justify-start">
                  Do you offer trial classes?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    No, students need to register and pay the $50 registration fee first. This fee cannot be refunded. Monthly autopay starts only after the first class. If you don't like the first class, autopay will not start.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="text-left">
                <AccordionTrigger className="text-purple-700 font-semibold text-left justify-start">
                  What if I miss a class?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    There are no makeup classes for missed classes. If the teacher misses a class, then we will provide a makeup class.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="text-left">
                <AccordionTrigger className="text-amber-700 font-semibold text-left justify-start">
                  Student Rules and Expectations
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-left">
                    <ul className="text-gray-600 space-y-2">
                      <li>• All students should attend classes regularly.</li>
                      <li>• Please arrive on time for warm-up exercises to avoid injury.</li>
                      <li>• Students should show respect to the teacher and follow instructions.</li>
                      <li>• Follow the dress code - students not in proper dress cannot participate.</li>
                      <li>• Be friendly and welcoming to other students in the class.</li>
                      <li>• Give your 100% effort, energy, and keep a positive attitude in every class.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <Separator className="w-24 mx-auto bg-white h-1 mb-6" />
          </div>
          
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-amber-100 text-sm sm:text-base">
                    1078 Monroe St,<br />
                    Santa Clara,<br />
                    CA 95050
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-amber-100 text-sm sm:text-base">
                    858 880 4577<br />
                    858 880 4576
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-amber-100 text-sm sm:text-base break-words px-2 md:break-all md:px-0">
                manasanrithya@gmail.com
              </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Join Us</h3>
                  <p className="text-amber-100 text-sm sm:text-base">
                    Classes in Bay Area
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-60 h-60 sm:w-80 sm:h-80 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white/20">
                <img 
                  src="/lovable-uploads/8cf78aad-8881-4264-9a55-2013c1b005c3.png" 
                  alt="Contact Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-amber-100 max-w-md mx-auto text-sm sm:text-base px-2 sm:px-4 break-words">
                If you are interested in learning Bharatanatyam and live in the Bay Area, please visit us for a consultation. We have classes tailored to suit you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Press Reviews</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center h-full">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-600 italic mb-4">
                  "She is an amazing performer. I saw her dance at an event—gracious, expressive, and captivating. Loved it!"
                </p>
                <p className="text-purple-600 font-semibold">— Avani K.</p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-600 italic mb-4">
                  "Moving with felicity."
                </p>
                <p className="text-amber-600 font-semibold">— V. Nagaraj, The Hindu</p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-600 italic mb-4">
                  "Dancing like a swan."
                </p>
                <p className="text-purple-600 font-semibold">— Prajavani, a leading Kannada-language newspaper from Karnataka</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "Nrithyamanasa is an inspiring place to learn Bharatanatyam. I look forward to these classes every week. Manasa is an excellent dancer and a dedicated, passionate teacher. She is a skilled choreographer who tailors her work to the skill levels of her students. Manasa encourages cultural and artistic growth while providing motivational support in a friendly, joyful environment."
                </p>
                <p className="text-purple-600 font-semibold">— G.G / Krupa</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "My daughter has been learning dance here for the past year, and I've seen significant improvement in her skills. She is always excited to attend her class. Ms. Manasa is an excellent Bharatanatyam dancer and ensures her students perform at a professional level on stage, giving them tremendous confidence at a young age. I highly recommend this dance school."
                </p>
                <p className="text-amber-600 font-semibold">— Gokul R.</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "This is a wonderful studio to learn Indian classical dance. The teacher is professional, energetic, and highly skilled. I strongly recommend attending these classes—whether you are a beginner or advanced."
                </p>
                <p className="text-purple-600 font-semibold">— Renuka Sahane</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "My daughter has been taking Bharatanatyam classes here for the past two years, and she loves them. The classes combine beginners and intermediate-level students, which allows my daughter to also watch and learn from others. If you want your child to learn Bharatanatyam in its traditional form, this is the right place—a complete package. One of the best Bharatanatyam teachers in the Bay Area."
                </p>
                <p className="text-amber-600 font-semibold">— Ajay G.</p>
              </CardContent>
            </Card>
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
                  src="/lovable-uploads/74d7bb37-cf4a-4724-a81f-71869fc277ee.png" 
                  alt="Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Bay Area's premier Bharatanatyam academy, nurturing classical dance traditions since inception. As a proud affiliate of SAMPADA University, we offer students the opportunity to pursue formal dance examinations and certifications, ensuring authentic training rooted in traditional methodology while providing recognized academic credentials.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about-manasa" className="hover:text-white transition-colors">About Manasa</Link></li>
                <li><Link to="/performances" className="hover:text-white transition-colors">Performances</Link></li>
                <li><Link to="/press-gallery" className="hover:text-white transition-colors">Press Gallery</Link></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
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
              <h3 className="font-semibold mb-4">Connect with me on social media</h3>
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
            <p>&copy; 2025 Nrithyamanasa Dance Academy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
