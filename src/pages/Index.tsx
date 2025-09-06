
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, MapPin, Phone, Mail, Award, Calendar, Users, Facebook, Instagram, Youtube, Clock, Music, Menu, X, Heart, Sparkles, Flower, Mic, Theater } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSlider } from "@/components/HeroSlider";
import { ConfettiEffect, FloatingIcons, TheaterCurtains, RedCarpet, StageSpotlights } from "@/components/TheatricalEffects";
import { PerformanceCard, ThemedButton } from "@/components/PerformanceCard";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const heroImages = [
    "/lovable-uploads/3b57576e-62d1-40fc-820e-30b6d5fb1026.png",
    "/lovable-uploads/58c23e78-c86f-4d64-9e7d-9a29133a6273.png", 
    "/lovable-uploads/19d84a2d-4f0e-4d66-b943-9cfb8dd709af.png",
    "/lovable-uploads/853fc79e-5fff-4635-9d9d-88bb107c6fae.png",
    "/lovable-uploads/f9cfedfe-4f86-49ae-96a3-625c6e9c9b48.png"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 relative overflow-hidden">
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-200 shadow-2xl">
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
              <span className="text-purple-600 font-bold text-sm lg:text-base bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                HOME
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </span>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group">
                ABOUT MANASA
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group">
                PERFORMANCES
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
              <Link to="/press-gallery" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group">
                PRESS GALLERY
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group">
                CONTACT
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-purple-600 transition-colors p-2 rounded-lg hover:bg-purple-50"
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
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-purple-100 rounded-b-lg">
                  <span className="block px-3 py-2 text-purple-600 font-semibold">HOME</span>
                  <Link 
                    to="/about-manasa" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT MANASA
                  </Link>
                  <Link 
                    to="/performances" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PERFORMANCES
                  </Link>
                  <Link 
                    to="/press-gallery" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PRESS GALLERY
                  </Link>
                  <button 
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
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

      {/* Hero Slider Section */}
      <section className="relative">
        <HeroSlider images={heroImages} autoSlideInterval={5000} />
        <RedCarpet />
      </section>

      {/* Event Information Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white overflow-hidden">
        {/* Theatrical Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Main Event Title */}
            <motion.div 
              className="relative inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
                  Nrithya Taranga 2025
                </span>
              </h1>
              
              {/* Decorative elements around title */}
              <motion.div
                className="absolute -top-6 -left-6 text-yellow-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Theater className="w-8 h-8 sm:w-12 sm:h-12" />
              </motion.div>
              <motion.div
                className="absolute -top-6 -right-6 text-pink-300"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Mic className="w-8 h-8 sm:w-12 sm:h-12" />
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Join us for an enchanting evening of classical <span className="text-yellow-300 font-bold">Bharatanatyam</span> performances featuring talented students and special guests.
            </motion.p>

            <motion.div 
              className="text-base sm:text-lg mb-8 text-amber-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <span className="font-semibold">September 21st, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-pink-300" />
                  <span className="font-semibold">3:30 PM - 5:30 PM</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-purple-300" />
                <span className="font-semibold">Mission City Center For Performing Arts, Santa Clara</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ThemedButton
                onClick={() => window.open('https://www.eventbrite.com/e/nrithya-taranga-2025-shakti-tickets-1598078137729?aff=oddtdtcreator', '_blank')}
                className="text-lg px-8 py-4 min-w-[200px]"
              >
                🎟️ Reserve Tickets
              </ThemedButton>
              <ThemedButton
                variant="secondary"
                onClick={() => window.location.href = '/about-manasa'}
                className="text-lg px-8 py-4 min-w-[200px]"
              >
                ✨ About Manasa
              </ThemedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full blur-3xl"></div>
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
              Event <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Highlights</span>
            </h2>
            <Separator className="w-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 h-1 mb-6" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PerformanceCard delay={0.1} className="text-center">
              <CardHeader className="relative">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <Calendar className="h-10 w-10 text-white" />
                </motion.div>
                <CardTitle className="text-purple-700 text-xl font-bold">📅 Date & Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2 font-semibold text-lg">September 21st, 2025</p>
                <p className="text-gray-600 text-lg">3:30 PM - 5:30 PM</p>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700">Mark your calendars! 📝</p>
                </div>
              </CardContent>
            </PerformanceCard>

            <PerformanceCard delay={0.2} className="text-center">
              <CardHeader className="relative">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="h-10 w-10 text-white" />
                </motion.div>
                <CardTitle className="text-amber-700 text-xl font-bold">📍 Venue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold text-lg">Mission City Center</p>
                <p className="text-gray-700 font-semibold">For Performing Arts</p>
                <p className="text-gray-600 text-sm mt-2">Santa Clara, CA</p>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-700">World-class venue! 🎭</p>
                </div>
              </CardContent>
            </PerformanceCard>

            <PerformanceCard delay={0.3} className="text-center">
              <CardHeader className="relative">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <Music className="h-10 w-10 text-white" />
                </motion.div>
                <CardTitle className="text-pink-700 text-xl font-bold">🎵 Performances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">Classical Bharatanatyam recitals, themed productions, and student showcases</p>
                <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                  <p className="text-sm text-pink-700">Pure artistic magic! ✨</p>
                </div>
              </CardContent>
            </PerformanceCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Theatrical background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-rose-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Meet <span className="text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-amber-300 bg-clip-text">Manasa Nagaraj</span>
            </motion.h2>
            <Separator className="w-32 mx-auto bg-gradient-to-r from-yellow-400 to-pink-400 h-1 mb-6" />
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Artistic Director of <span className="font-bold text-yellow-300">Nrithyamanasa Performing Arts Center</span> and Director of 
              <a href="https://www.eshayoga.com/" className="text-pink-300 hover:text-pink-200 font-semibold underline decoration-pink-300 ml-1 mr-1">Esha Yoga</a> 
              in Santa Clara.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <PerformanceCard className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6 sm:p-8">
                <div className="text-white">
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-bold mb-6 text-yellow-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    🎭 Master Instructor & Artist
                  </motion.h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-200">
                      With <span className="font-bold text-pink-300">decades of experience</span> in classical dance and wellness, Manasa brings exceptional skills to her students. Her commitment to preserving traditional <span className="text-amber-300 font-semibold">Bharatanatyam</span> while making it accessible to modern students has made her one of the most respected instructors in the Bay Area.
                    </p>
                    
                    <motion.div 
                      className="flex items-center justify-center sm:justify-start space-x-4 p-4 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-xl border border-yellow-400/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                            viewport={{ once: true }}
                          >
                            <Star className="h-6 w-6 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-white font-bold">Highly Rated Instructor</span>
                    </motion.div>
                    
                    <motion.div className="pt-4">
                      <ThemedButton
                        onClick={() => window.location.href = '/about-manasa'}
                        className="w-full sm:w-auto text-lg px-8 py-4"
                      >
                        🌟 Discover Her Journey
                      </ThemedButton>
                    </motion.div>
                  </div>
                </div>
              </PerformanceCard>
            </motion.div>
            
            <motion.div 
              className="text-center order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <motion.div 
                  className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gradient-to-r from-yellow-400 to-pink-400 shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    borderImage: "linear-gradient(45deg, #fbbf24, #ec4899) 1"
                  }}
                >
                  <img 
                    src="/lovable-uploads/4a94da77-9a3e-4002-94e9-75db84e6c8ce.png" 
                    alt="Manasa Nagaraj - Master Bharatanatyam Instructor"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>
                
                {/* Multiple rotating glows */}
                <motion.div 
                  className="absolute -inset-6 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-full blur-xl opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-red-400 to-purple-400 rounded-full blur-2xl opacity-20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-8 -right-8 text-yellow-300 bg-white/10 backdrop-blur-sm rounded-full p-3"
                  animate={{ 
                    rotate: [0, 360],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Award className="w-8 h-8" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 text-pink-300 bg-white/10 backdrop-blur-sm rounded-full p-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Heart className="w-6 h-6" />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-2">Manasa Nagaraj</h4>
                <p className="text-gray-200 font-medium text-lg">Artistic Director & Master Instructor</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <motion.div 
                    className="text-pink-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎵
                  </motion.div>
                  <motion.div 
                    className="text-yellow-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    ✨
                  </motion.div>
                  <motion.div 
                    className="text-purple-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    🌟
                  </motion.div>
                </div>
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
