import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const Navigation = ({ isMobileMenuOpen, toggleMobileMenu, setIsMobileMenuOpen }: NavigationProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-200 shadow-2xl">
      {/* Utility Bar */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10 text-sm">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="h-7 text-xs border-purple-300 text-purple-700 hover:bg-purple-100"
            >
              <a 
                href="https://sparkletkids.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Sparklet Kids Academy website in a new tab"
              >
                Visit Sparklet Kids Academy
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <motion.img 
                src="/lovable-uploads/74d7bb37-cf4a-4724-a81f-71869fc277ee.png" 
                alt="Nrithyamanasa Logo" 
                className="h-8 sm:h-10 w-auto cursor-pointer" 
                width="120"
                height="40"
                loading="eager"
                fetchPriority="high"
                whileHover={{
                  scale: 1.1,
                  rotate: 5
                }} 
                transition={{
                  type: "spring",
                  stiffness: 300
                }} 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {currentPath === "/" ? (
              <span className="text-purple-600 font-bold text-sm lg:text-base bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                HOME
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </span>
            ) : (
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group">
                HOME
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
            )}
            
            {currentPath === "/about-manasa" ? (
              <span className="text-purple-600 font-bold text-sm lg:text-base bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                ABOUT MANASA
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </span>
            ) : (
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group">
                ABOUT MANASA
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
            )}
            
            {currentPath === "/performances" ? (
              <span className="text-purple-600 font-bold text-sm lg:text-base bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                PERFORMANCES
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </span>
            ) : (
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group">
                PERFORMANCES
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
            )}
            
            {currentPath === "/press-gallery" ? (
              <span className="text-purple-600 font-bold text-sm lg:text-base bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                PRESS GALLERY
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </span>
            ) : (
              <Link to="/press-gallery" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group">
                PRESS GALLERY
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
            )}
            
            <a
              href="/#faq"
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group"
            >
              FAQ
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </a>

            <a
              href="/#contact"
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group"
            >
              CONTACT
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </a>

            <a 
              href="https://clients.mindbodyonline.com/classic/ws?studioid=546293&stype=43&prodid=100041" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm lg:text-base hover:scale-105 relative group"
            >
              REGISTER
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMobileMenu} 
              className="text-gray-700 hover:text-purple-600 transition-colors p-2 rounded-lg hover:bg-purple-50" 
              aria-label="Toggle mobile menu" 
              whileTap={{
                scale: 0.95
              }}
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
              initial={{
                opacity: 0,
                height: 0
              }} 
              animate={{
                opacity: 1,
                height: "auto"
              }} 
              exit={{
                opacity: 0,
                height: 0
              }} 
              transition={{
                duration: 0.3
              }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-purple-100 rounded-b-lg">
                {currentPath === "/" ? (
                  <span className="block px-3 py-2 text-purple-600 font-semibold">HOME</span>
                ) : (
                  <Link 
                    to="/" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                )}
                
                {currentPath === "/about-manasa" ? (
                  <span className="block px-3 py-2 text-purple-600 font-semibold">ABOUT MANASA</span>
                ) : (
                  <Link 
                    to="/about-manasa" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT MANASA
                  </Link>
                )}
                
                {currentPath === "/performances" ? (
                  <span className="block px-3 py-2 text-purple-600 font-semibold">PERFORMANCES</span>
                ) : (
                  <Link 
                    to="/performances" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PERFORMANCES
                  </Link>
                )}
                
                {currentPath === "/press-gallery" ? (
                  <span className="block px-3 py-2 text-purple-600 font-semibold">PRESS GALLERY</span>
                ) : (
                  <Link 
                    to="/press-gallery" 
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PRESS GALLERY
                  </Link>
                )}
                
                <a
                  href="/#faq"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>

                <a
                  href="/#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </a>

                <a 
                  href="https://clients.mindbodyonline.com/classic/ws?studioid=546293&stype=43&prodid=100041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  REGISTER
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
