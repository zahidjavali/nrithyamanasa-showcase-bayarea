import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Calendar, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Performances = () => {
  const recentPerformances = [
    "Deepotsava from Renowned Bay area Artists – November 16th 2019",
    "endaro mahanubhavulu performance for Sapthathi @ Mysore, India – November 1st and 2nd 2019",
    "Samarpanam – Divine offering to the Guru at Mission city center for performing arts center, Santa Clara on 8/25/2019, 4 pm – 6 pm",
    "Global Beats Stage, sponsored by World Heritage Cultural Center – 3/23/2019",
    "Sri Krishnaleela Taranga – 09/12/2018",
    "Maha Shivaratri 2018 celebration @ SVCC, Fremont – 2/13/2018, 8:00 pm",
    "Sankranti Sambaralu, San Ramon – 1/13/2018",
    "Nrithya Taranga 2017, Sunnyvale – 11/26/27",
    "Performances on the occasion of Maha Shivaratri – 2/24/2017"
  ];

  const shivaratriPerformances = [
    "Shivanandam, 17th Maha Shivaratri dance celebration, Palo Alto Arts Center – 7:30 pm",
    "SVCC, Fremont – 8:30 pm",
    "Shiva Durga temple – 10 pm"
  ];

  const usPerformances = [
    "Performance at Apple on the occasion of Diwali – October 28, 2016",
    "Sankat Mochan Hanuman Temple, Watsonville, CA – June 25, 2016",
    "Thyagraja Festival, Cleveland – April 2, 2016",
    "Natyanjali, Sacramento – March 19, 2016",
    "SVCC Temple, Fremont – March 6, 2016",
    "Maha Kaleshwar Temple, Santa Clara – March 5, 2016",
    "Performance at Bangalore – 2014",
    "Performance at Mysore – 2013",
    "Mysore Dasara – 2012",
    "Pallavothsava, Mysore – 2012",
    "Ranga Pravesha/Arangetram at Jagan Mohan Palace Auditorium, Mysore – 2012"
  ];

  const internationalPerformances = [
    "Pravah Festival, Goa – 2013",
    "Swathi Thirunal Festival, Chennai, Tamil Nadu – 2013",
    "Pravah Festival, Jodhpur, Rajasthan – 2011",
    "Brahmakumari, Mt. Abu, Rajasthan – 2011",
    "Lokrang Festival, Bhopal, Madhya Pradesh – 2010",
    "Brahmotsava Festival, ISCKON, Bangalore, Karnataka – 2008 & 2010",
    "Mantralaya, Andhra Pradesh",
    "Mahamastakabhisheka, Shravanabelagola, Karnataka",
    "Kanakajayanti, Mysore, Karnataka",
    "Lakkundi Utsava, Hubli, Karnataka – 2008",
    "Hampi Utsav, Hampi, Karnataka – 2007",
    "Jaatra Mahotsava, Mysore, Karnataka – 2006",
    "Pallavotsava, Mysore, Karnataka – 2006 to 2013",
    "Mysore Dasara, Mysore, Karnataka – 2005"
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
            src="https://manasanagaraj.com/wp-content/uploads/2019/04/Nritya-Manasa-98.jpg" 
            alt="Bharatanatyam"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">PERFORMANCES</h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Manasa is blessed to showcase her performance in prestigious dance and cultural festivals. 
            Here is a list of the events she has been part of to give you a sense of her outings.
          </p>
        </div>
      </section>

      {/* Recent Performances Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Performances</h2>
              <p className="text-lg text-gray-600 mb-8">
                Latest performances showcasing the beauty and grace of Bharatanatyam across the Bay Area and beyond.
              </p>
              <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://manasanagaraj.com/wp-content/uploads/2019/04/Nritya-Manasa-82-1.jpg" 
                  alt="Bharatanatyam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <Card className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-semibold">Deepotsava from Renowned Bay area Artists – November 16th 2019</p>
                        <div className="w-full h-48 mt-4 overflow-hidden rounded-lg">
                          <img 
                            src="https://manasanagaraj.com/wp-content/uploads/2019/11/Deepotsava-683x1024.jpg" 
                            alt="Deepotsava Bharatanatyam performance"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card key={1} className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">endaro mahanubhavulu performance for Sapthathi @ Mysore, India – November 1st and 2nd 2019</p>
                    </div>
                  </CardContent>
                </Card>

                <Card key={2} className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Samarpanam – Divine offering to the Guru at Mission city center for performing arts center, Santa Clara on 8/25/2019, 4 pm – 6 pm</p>
                    </div>
                  </CardContent>
                </Card>

                <Card key={3} className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Global Beats Stage, sponsored by World Heritage Cultural Center – 3/23/2019</p>
                    </div>
                  </CardContent>
                </Card>

                <Card key={4} className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Sri Krishnaleela Taranga – 09/12/2018</p>
                    </div>
                  </CardContent>
                </Card>

                <Card key={5} className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Maha Shivaratri 2018 celebration @ SVCC, Fremont – 2/13/2018, 8:00 pm</p>
                    </div>
                  </CardContent>
                </Card>

                <Card key={6} className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Sankranti Sambaralu, San Ramon – 1/13/2018</p>
                    </div>
                  </CardContent>
                </Card>

                <Card key={7} className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Nrithya Taranga 2017, Sunnyvale – 11/26/27</p>
                    </div>
                  </CardContent>
                </Card>

                <Card key={8} className="border-l-4 border-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Performances on the occasion of Maha Shivaratri – 2/24/2017</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Shivaratri Performances */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-amber-600 text-white">
              <CardTitle className="text-2xl">Special Shivaratri Celebrations</CardTitle>
              <CardDescription className="text-purple-100">
                Multiple performances in a single day showcasing dedication to the art form
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {shivaratriPerformances.map((performance, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{performance}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* US Performances */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Performances Across the United States
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usPerformances.map((performance, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{performance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              International Performance Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Manasa has traveled extensively and performed on various platforms with her mentor. 
              Here are a few notable event highlights of her long and satisfying journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalPerformances.map((performance, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-amber-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{performance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Magic Live</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us at our upcoming performances and witness the divine art of Bharatanatyam firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
              View Upcoming Events
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Learn More About Classes
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
                <li><a href="#performances" className="hover:text-white transition-colors">Performances</a></li>
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

export default Performances;
