
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Phone, Mail, Award, Calendar, Users, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const AboutManasa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/05/aaaa.png" 
                alt="Nrithyamanasa Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-purple-900">Nrithyamanasa</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">HOME</Link>
              <span className="text-purple-600 font-semibold">ABOUT MANASA</span>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-colors">PERFORMANCES</Link>
              <a href="/#showcase" className="text-gray-700 hover:text-purple-600 transition-colors">SHOWCASE</a>
              <a href="/#classes" className="text-gray-700 hover:text-purple-600 transition-colors">CLASSES</a>
              <a href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-amber-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://manasanagaraj.com/wp-content/uploads/2019/04/Nritya-Manasa-48.jpg" 
            alt="Manasa Nagaraj performing Bharatanatyam"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">ABOUT MANASA</h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Discover the journey of a dedicated artist, teacher, and cultural ambassador who has devoted her life to preserving and sharing the ancient art of Bharatanatyam.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* The Sprightly Soul Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">The Sprightly Soul</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every time she steps on the stage, Manasa leaves her audience spellbound with her fluidity of movements, elegant poses, and exceptionally emotive expressions. The happiness that emanates from her personality is palpable as she performs what has been her passion all her life—Bharatanatyam.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Manasa took to the stage at the tender age of five to perform with the wondrous mind of a keen child. As an ardent disciple of the ancient Indian classical dance form, she trained formally from the age of five under the auspices of Karnataka Kalatilaka Dr. Vasundhara Doraswamy, a proficient Bharatanatyam dancer and well-qualified trainer.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Along with a Master's in Dance-Bharatanatyam from Mysore University, she also completed Vidwat, a course conducted by the Karnataka Secondary Education Examination Board for Dance (KSEEBD).
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-80 h-80 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/04/aboutme.jpg" 
                  alt="Manasa Nagaraj"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Manasa Nagaraj</h3>
              <p className="text-gray-600 text-lg">Artistic Director & Master Instructor</p>
            </div>
          </div>

          {/* The Skillful Compassionate Teacher Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/04/5D4_7134.jpg" 
                alt="Manasa Nagaraj"
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">The Skillful Compassionate Teacher</h2>
              <p className="text-lg text-gray-600 mb-6">
                With a Ranga Pravesha performance that garnered accolades from the media and the art society, and numerous on-stage national performances, she has displayed her comprehensive understanding of the intricacies of this ancient dance form. This qualifies her not only as a trainer but also as a learned judge of others' performances.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Serving as an expert Bharatanatyam trainer, she worked for two years at Vasundhara Performing Arts Center, Mysore, Karnataka. She also tutored hearing-impaired disciples at Rotary West and the Parent's Association of Deaf Children Trust.
              </p>
            </div>
          </div>

          {/* Continuing to Mesmerize Audiences Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Continuing to Mesmerize Audiences</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-600 mb-6">
                  Having presented exemplary performances in several highly acclaimed dance festivals across India, Manasa has received rave reviews from leading newspapers, both national and regional, and art aficionados.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Her performances have been extensively covered by top Indian English publications such as The Hindu, The New Indian Express, and Deccan Herald. Regional newspapers like Prajavani, Praja Nudi, Star of Mysore, and Metro Mysore have also carried flattering articles on Manasa.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  She performed twice at Mysore Dasara, a renowned cultural and dance festival held annually in Mysore, Karnataka, once in a group and again in 2012.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  In 2010, she performed at Lokrang, the famous cultural festival that is part of the "Incredible India" tourism campaign. She performed in Pravah Festivals at Jodhpur and Goa in 2014.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  After moving to the US, she has been touring the country presenting her riveting dance concerts, apart from serving as a Bharatanatyam trainer.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/04/Nritya-Manasa-48.jpg" 
                  alt="Bharatanatyam performance"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* The Doer Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">The Doer</h2>
            <p className="text-lg text-gray-600 mb-6">
              Currently located in the Bay Area, she aspires to utilize the knowledge she has gained through her perseverance and hard work, numerous commendable on-stage performances, and several years of teaching and judging, to promote this complex, sophisticated dance form.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              She has started the Nrithyamanasa Performing Arts Center to hold professional classes for individuals wishing to make it a career.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              She wants to organize workshops to generate more interest in this ancient Indian classical dance. She plans to arrange dance contests to showcase and encourage budding young dancers.
            </p>
          </div>

          {/* The Journey Continues Section */}
          <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-2xl p-8 text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">The Journey Continues…</h2>
            <p className="text-lg text-gray-600 mb-6">
              With her passion and dedication, Manasa Nagaraj has become an excellent Bharatanatyam dancer. Now all she desires is to spread, share, and utilize her knowledge about the dance form in all plausible ways to benefit others.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Learn from Manasa</h3>
            <p className="text-lg text-gray-600 mb-8">
              Ready to begin your journey in classical Indian dance? Join Manasa's classes and discover the beauty of Bharatanatyam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link to="/#classes">View Classes</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/05/aaaa.png" 
                  alt="Nrithyamanasa Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Nrithyamanasa</span>
              </div>
              <p className="text-gray-400">
                Bay Area's premier Bharatanatyam academy, nurturing classical dance traditions since inception.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><span className="text-white">About Manasa</span></li>
                <li><Link to="/performances" className="hover:text-white transition-colors">Performances</Link></li>
                <li><Link to="/press-gallery" className="hover:text-white transition-colors">Press Gallery</Link></li>
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

export default AboutManasa;
