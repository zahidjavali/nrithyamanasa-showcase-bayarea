
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Phone, Mail, Award, Calendar, Users, Facebook, Instagram, Youtube, Clock, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
              <Link to="/" className="text-purple-600 font-semibold">HOME</Link>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-colors">ABOUT MANASA</Link>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-colors">PERFORMANCES</Link>
              <Link to="/press-gallery" className="text-gray-700 hover:text-purple-600 transition-colors">PRESS GALLERY</Link>
              <a href="#showcase" className="text-gray-700 hover:text-purple-600 transition-colors">SHOWCASE</a>
              <a href="#classes" className="text-gray-700 hover:text-purple-600 transition-colors">CLASSES</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://manasanagaraj.com/wp-content/uploads/2019/05/s2.jpg')"
          }}
        ></div>
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Nrithya Taranga 2024
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-amber-100">
            Dancer, Teacher, Choreographer, & Yoga Instructor
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-amber-100">
            The event is scheduled for September 22nd at 4:00 pm and will be held at the Mission City Center For Performing Arts in Santa Clara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://www.eventbrite.com/e/nrithya-taranga-2024-tickets-938834267567?aff=oddtdtcreator', '_blank')}
            >
              Reserve Tickets
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg"
            >
              <Link to="/about-manasa">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Taranga Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nrithya Taranga 2024</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for an enchanting evening of Bharatanatyam performances featuring talented students and special guests.
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
                <p className="text-gray-600 mb-2">September 22nd, 2024</p>
                <p className="text-gray-600">4:00 PM - 6:00 PM</p>
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
                <p className="text-gray-600">Classical Bharatanatyam recitals, thematic productions, and student showcases</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Manasa Nagaraj is the Artistic Director of Nrithyamanasa Performing Arts Center. She is even the Director of <a href="http://www.eshayoga.com" className="text-purple-600 hover:text-purple-700">Esha Yoga</a> which is a highly rated studio in Santa Clara.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Meet Manasa Nagaraj</h3>
              <p className="text-lg text-gray-600 mb-6">
                With decades of experience in classical dance and wellness, Manasa brings unparalleled expertise to her students. Her dedication to preserving traditional Bharatanatyam while making it accessible to modern students has made her one of the most respected instructors in the Bay Area.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Highly rated instructor</span>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Link to="/about-manasa">Read More about Manasa</Link>
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-80 h-80 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/04/aboutme.jpg" 
                  alt="Manasa Nagaraj"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Manasa Nagaraj</h4>
              <p className="text-gray-600">Artistic Director & Master Instructor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Classes of All Levels</h2>
            <Separator className="w-24 mx-auto bg-purple-600 h-1 mb-6" />
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              NPAC presents dedicated kids/adult instruction in Bharatanatyam for beginners, intermediate and advanced students. Using rhythmic footwork, geometric movement, codified hand gestures, and facial expressions to tell powerful stories and create intricate sequences of dance, the faculties of abhinaya and nritta are shaped and honed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center h-full">
              <CardHeader>
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-143858.jpg" 
                  alt="Bharatanatyam students of Manasa Nagaraj"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-purple-700">Kids/Adult Beginner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The students learn the pure dance steps/Adavus during the first three years of learning. In these crucial years, a solid foundation is laid that will help the student achieve perfection in later years of pure dance. For an hour each, these classes take place twice a week.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-144620.png" 
                  alt="Bharatanatyam students of Manasa Nagaraj"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-amber-700">Kids/Adult Intermediate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For students who have learned adavus. Warm up and adavu class focuses on developing and maintaining posture and core strength. Expressive items are introduced with the primary emotion being that of a deity's devotion or praise. For an hour each, these classes take place twice a week.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2020/04/20190824-151857.png" 
                  alt="Bharatanatyam students of Manasa Nagaraj"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-purple-700">Advanced/Pre-Arangetram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  In the three to four years prior to the arangetram, the varnams and other complicated items are taught and practiced.
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
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">What age groups do you teach?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer classes for all ages, from young children (starting at age 5) to adults. Our programs are structured to accommodate different skill levels and learning paces.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-700">How long does it take to learn Bharatanatyam?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The journey varies for each student. Basic foundation (Adavus) typically takes 2-3 years, while preparing for Arangetram (debut performance) usually requires 7-10 years of dedicated practice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">What should I bring to class?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comfortable practice clothes, a water bottle, and dedication to learn. We'll provide guidance on acquiring traditional dance attire as you progress.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-700">Do you offer performance opportunities?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! We organize annual recitals like Nrithya Taranga, and students regularly perform at cultural events, festivals, and community gatherings.
                </p>
              </CardContent>
            </Card>
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
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-amber-100">
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
                  <p className="text-amber-100">
                    858 880 4577<br />
                    858 880 4576
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-amber-100">
                    manasanrithya@gmail.com
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Join Us</h3>
                  <p className="text-amber-100">
                    Classes in Bay Area
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-80 h-80 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white/20">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/04/5D4_7134.jpg" 
                  alt="Contact Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-amber-100 max-w-md mx-auto">
                If you are interested in learning Bharatanatyam and stay in the Bay Area, drop by for a consultation. We have classes tailored to suit you.
              </p>
            </div>
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

export default Index;
