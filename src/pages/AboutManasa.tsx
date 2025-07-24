import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AboutManasa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/05/aaaa.png" 
                alt="Nrithyamanasa Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">HOME</Link>
              <span className="text-purple-600 font-semibold">ABOUT MANASA</span>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-colors">PERFORMANCES</Link>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">ABOUT MANASA</h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Manasa Nagaraj is the Artistic Director of Nrithyamanasa Performing Arts Center. She is even the Director of Esha Yoga which is a highly rated studio in Santa Clara.
          </p>
        </div>
      </section>

      {/* About Manasa Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Meet Manasa Nagaraj</h2>
              <p className="text-lg text-gray-600 mb-6">
                With decades of experience in classical dance and wellness, Manasa brings unparalleled expertise to her students. Her dedication to preserving traditional Bharatanatyam while making it accessible to modern students has made her one of the most respected instructors in the Bay Area.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Manasa's journey in dance began at a young age, and she has since become a leading exponent of Bharatanatyam. Her performances have captivated audiences worldwide, and her innovative choreography has earned her critical acclaim.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a teacher, Manasa is committed to nurturing the next generation of dancers. She provides a supportive and challenging learning environment where students can develop their skills and explore their creativity.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/04/aboutme.jpg" 
                alt="Manasa Nagaraj"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yoga and Wellness Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/04/yoga.jpg" 
                alt="Esha Yoga Studio"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Esha Yoga Studio</h2>
              <p className="text-lg text-gray-600 mb-6">
                In addition to her work in dance, Manasa is also a certified yoga instructor. She is the director of Esha Yoga Studio, where she offers a variety of yoga classes for all levels.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Manasa's approach to yoga is rooted in the ancient traditions of India. She emphasizes the importance of breath, alignment, and mindfulness in her classes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you are a beginner or an experienced yogi, you will find a class that is right for you at Esha Yoga Studio. Manasa's warm and welcoming personality will make you feel right at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements and Recognition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Achievements and Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/04/award1.jpg" 
                alt="Award"
                className="w-full rounded-lg shadow-md mb-4"
              />
              <p className="text-lg text-gray-600">
                Received the prestigious "Natya Ratna" award for excellence in Bharatanatyam.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/04/award2.jpg" 
                alt="Recognition"
                className="w-full rounded-lg shadow-md mb-4"
              />
              <p className="text-lg text-gray-600">
                Honored by the Mayor of Santa Clara for contributions to the arts community.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://manasanagaraj.com/wp-content/uploads/2019/04/award3.jpg" 
                alt="Scholarship"
                className="w-full rounded-lg shadow-md mb-4"
              />
              <p className="text-lg text-gray-600">
                Awarded a scholarship to study advanced Bharatanatyam at the Kalakshetra Foundation.
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
                  alt="Nrithyamanasa Logo" 
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
