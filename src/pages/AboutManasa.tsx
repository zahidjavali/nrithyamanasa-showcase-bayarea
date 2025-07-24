
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Phone, Mail, Award, Calendar, Users, Facebook, Instagram } from "lucide-react";
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
              <Link to="/#showcase" className="text-gray-700 hover:text-purple-600 transition-colors">SHOWCASE</Link>
              <Link to="/#classes" className="text-gray-700 hover:text-purple-600 transition-colors">CLASSES</Link>
              <Link to="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors">CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-amber-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://manasanagaraj.com/wp-content/uploads/2019/04/Nritya-Manasa-48.jpg" 
            alt="Manasa Nagaraj"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Manasa Nagaraj</h2>
              <p className="text-lg text-gray-600 mb-6">
                Manasa Nagaraj is the Artistic Director of Nrithyamanasa Performing Arts Center and Director of Esha Yoga, 
                a highly rated wellness studio in Santa Clara. With decades of experience in classical dance and wellness, 
                Manasa brings unparalleled expertise to her students.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Her dedication to preserving traditional Bharatanatyam while making it accessible to modern students has made her 
                one of the most respected instructors in the Bay Area. She combines technical precision with emotional depth, 
                creating a learning environment that nurtures both artistic excellence and cultural understanding.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Highly rated instructor</span>
              </div>
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

          {/* Achievements Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-purple-700">Master Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Over two decades of experience teaching classical Bharatanatyam to students of all ages and skill levels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-700">Cultural Ambassador</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated to preserving and sharing Indian classical dance traditions with the global community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-purple-700">Performance Artist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Extensive performance experience across prestigious venues and cultural festivals internationally.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-2xl p-8 text-center mb-16">
            <blockquote className="text-2xl font-semibold text-gray-900 mb-4">
              "Dance is the hidden language of the soul. Through Bharatanatyam, we connect with our deepest traditions and share them with the world."
            </blockquote>
            <cite className="text-lg text-gray-600">- Manasa Nagaraj</cite>
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
                <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
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
