
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Calendar, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Performances = () => {
  const recentPerformances = [
    { date: "November 16, 2019", event: "Deepotsava from Renowned Bay area Artists" },
    { date: "November 1-2, 2019", event: "Endaro Mahanubhavulu performance for Sapthathi @ Mysore, India" },
    { date: "August 25, 2019", event: "Samarpanam – Divine offering to the Guru at Mission City Center for Performing Arts, Santa Clara", time: "4:00 PM - 6:00 PM" },
    { date: "March 23, 2019", event: "Global Beats Stage, sponsored by World Heritage Cultural Center" },
    { date: "September 12, 2018", event: "Sri Krishnaleela Taranga" },
    { date: "February 13, 2018", event: "Maha Shivaratri 2018 celebration @ SVCC, Fremont", time: "8:00 PM" },
    { date: "January 13, 2018", event: "Sankranti Sambaralu, San Ramon" },
    { date: "November 26-27, 2017", event: "Nrithya Taranga 2017, Sunnyvale" },
    { date: "February 24, 2017", event: "Performances on the occasion of Maha Shivaratri" }
  ];

  const shivaratriPerformances = [
    { venue: "Palo Alto Arts Center", time: "7:30 PM" },
    { venue: "SVCC, Fremont", time: "8:30 PM" },
    { venue: "Shiva Durga Temple", time: "10:00 PM" }
  ];

  const olderPerformances = [
    { date: "October 28, 2016", event: "Performance at Apple on the occasion of Diwali" },
    { date: "June 25, 2016", event: "Sankat Mochan Hanuman Temple, Watsonville, CA" },
    { date: "April 2, 2016", event: "Thyagraja Festival, Cleveland" },
    { date: "March 19, 2016", event: "Natyanjali, Sacramento" },
    { date: "March 6, 2016", event: "SVCC Temple, Fremont" },
    { date: "March 5, 2016", event: "Maha Kaleshwar Temple, Santa Clara" },
    { date: "2014", event: "Performance at Bangalore" },
    { date: "2013", event: "Performance at Mysore" },
    { date: "2012", event: "Mysore Dasara" },
    { date: "2012", event: "Pallavothsava, Mysore" },
    { date: "2012", event: "Ranga Pravesha/Arangetram at Jagan Mohan Palace Auditorium, Mysore" }
  ];

  const festivalPerformances = [
    { date: "2013", event: "Pravah Festival, Goa" },
    { date: "2013", event: "Swathi Thirunal Festival, Chennai, Tamil Nadu" },
    { date: "2011", event: "Pravah Festival, Jodhpur, Rajasthan" },
    { date: "2011", event: "Brahmakumari, Mt. Abu, Rajasthan" },
    { date: "2010", event: "Lokrang Festival, Bhopal, Madhya Pradesh" },
    { date: "2008 & 2010", event: "Brahmotsava Festival, ISCKON, Bangalore, Karnataka" },
    { date: "Various", event: "Mantralaya, Andhra Pradesh" },
    { date: "Various", event: "Mahamastakabhisheka, Shravanabelagola, Karnataka" },
    { date: "Various", event: "Kanakajayanti, Mysore, Karnataka" },
    { date: "2008", event: "Lakkundi Utsava, Hubli, Karnataka" },
    { date: "2007", event: "Hampi Utsav, Hampi, Karnataka" },
    { date: "2006", event: "Jaatra Mahotsava, Mysore, Karnataka" },
    { date: "2006-2013", event: "Pallavotsava, Mysore, Karnataka" },
    { date: "2005", event: "Mysore Dasara, Mysore, Karnataka" }
  ];

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
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">HOME</Link>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-colors">ABOUT MANASA</Link>
              <span className="text-purple-600 font-semibold">PERFORMANCES</span>
              <Link to="/press-gallery" className="text-gray-700 hover:text-purple-600 transition-colors">PRESS GALLERY</Link>
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
            Explore the captivating world of Bharatanatyam through Nrithyamanasa's mesmerizing performances across prestigious venues and cultural festivals.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Manasa is blessed to showcase her performance in prestigious dance and cultural festivals. Here is a comprehensive list of the events she has been part of to give you a sense of her artistic journey and outreach.
          </p>
        </div>
      </section>

      {/* Recent Performances Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Recent Performances</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPerformances.map((performance, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-sm font-semibold text-purple-700">{performance.date}</CardTitle>
                      {performance.time && (
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {performance.time}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{performance.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shivaratri Special Performances */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">Shivanandam - 17th Maha Shivaratri Dance Celebration</h2>
          <p className="text-center text-gray-600 mb-12">February 24, 2017</p>
          <div className="grid md:grid-cols-3 gap-6">
            {shivaratriPerformances.map((performance, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-700">{performance.venue}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {performance.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earlier Performances Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Earlier Performances</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {olderPerformances.map((performance, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-amber-600" />
                    <CardTitle className="text-sm font-semibold text-amber-700">{performance.date}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{performance.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Performances Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">Festival Performances</h2>
          <p className="text-center text-gray-600 mb-12">
            Manasa has traveled extensively and performed on various platforms with her mentor. Here are a few notable event highlights of her long and satisfying journey.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivalPerformances.map((performance, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-sm font-semibold text-purple-700">{performance.date}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{performance.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Nrithya Taranga</h2>
              <p className="text-lg text-gray-600 mb-4">
                An annual Bharatanatyam event showcasing the talent and dedication of Nrithyamanasa's students.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Classical Bharatanatyam recitals</li>
                <li>Thematic dance productions</li>
                <li>Student showcases</li>
              </ul>
              <Link to="/" className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn more about upcoming performances
              </Link>
            </div>
            
            <div>
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/05/s2.jpg" 
                alt="Nrithya Taranga Performance"
                className="w-full rounded-lg shadow-lg"
              />
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
