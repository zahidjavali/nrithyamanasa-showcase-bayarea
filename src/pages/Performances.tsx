import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Phone, Mail, Award, Calendar, Users, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Performances = () => {
  const performances = [
    {
      title: "Nrithya Taranga 2024",
      date: "September 22, 2024",
      venue: "Mission City Center For Performing Arts, Santa Clara",
      description: "Join us for an enchanting evening of classical Bharatanatyam performances featuring students from all levels of training.",
      image: "https://manasanagaraj.com/wp-content/uploads/2019/04/Nritya-Manasa-98.jpg",
      alt: "Bharatanatyam performance"
    },
    {
      title: "Mysore Dasara Festival",
      date: "October 2012",
      venue: "Mysore, Karnataka",
      description: "A prestigious cultural festival where Manasa showcased her exceptional skills in classical dance.",
      image: "https://manasanagaraj.com/wp-content/uploads/2019/04/Nritya-Manasa-82-1.jpg",
      alt: "Bharatanatyam performance at Mysore Dasara"
    },
    {
      title: "Deepotsava",
      date: "Diwali Festival",
      venue: "Various Locations",
      description: "Celebrating the festival of lights through the divine art of Bharatanatyam.",
      image: "https://manasanagaraj.com/wp-content/uploads/2019/11/Deepotsava-683x1024.jpg",
      alt: "Deepotsava Bharatanatyam performance"
    }
  ];

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
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-colors">ABOUT MANASA</Link>
              <span className="text-purple-600 font-semibold">PERFORMANCES</span>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">PERFORMANCES</h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Experience the divine art of Bharatanatyam through our captivating performances that blend traditional techniques with contemporary expression.
          </p>
        </div>
      </section>

      {/* Featured Performances */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Performances</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1" />
          </div>
          
          <div className="grid gap-8">
            {performances.map((performance, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <span className="text-sm text-gray-500">{performance.date}</span>
                      </div>
                      <CardTitle className="text-2xl text-purple-900 mb-2">{performance.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-4">
                        <MapPin className="h-5 w-5 text-amber-600" />
                        <span className="text-sm text-gray-600">{performance.venue}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-4">{performance.description}</p>
                      {performance.title === "Nrithya Taranga 2024" && (
                        <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => window.open('https://www.eventbrite.com/e/nrithya-taranga-2024-tickets-938834267567?aff=oddtdtcreator', '_blank')}>
                          Reserve Tickets
                        </Button>
                      )}
                    </CardContent>
                  </div>
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={performance.image} 
                      alt={performance.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Highlights</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-purple-700">Student Showcases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular performances by students at various skill levels, providing opportunities to showcase their progress and build confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-700">Festival Performances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participation in prestigious cultural festivals and events, bringing classical Indian dance to diverse audiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-purple-700">Arangetram Ceremonies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Debut performances marking the culmination of years of dedicated training and the beginning of an artist's journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Next Performance</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the magic of Bharatanatyam firsthand. Whether you're a dance enthusiast or curious about classical Indian arts, our performances offer something for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={() => window.open('https://www.eventbrite.com/e/nrithya-taranga-2024-tickets-938834267567?aff=oddtdtcreator', '_blank')}>
              Get Tickets
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/about-manasa">Learn More</Link>
            </Button>
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
                <li><Link to="/about-manasa" className="hover:text-white transition-colors">About Manasa</Link></li>
                <li><span className="text-white">Performances</span></li>
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

export default Performances;
