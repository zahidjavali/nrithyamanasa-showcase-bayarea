
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Phone, Mail, Clock, Users, Award, Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const AboutManasa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-purple-900">Nrithyamanasa</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">HOME</Link>
              <Link to="/about-manasa" className="text-purple-600 font-semibold">ABOUT MANASA</Link>
              <a href="#performances" className="text-gray-700 hover:text-purple-600 transition-colors">PERFORMANCES</a>
              <a href="#showcase" className="text-gray-700 hover:text-purple-600 transition-colors">SHOWCASE</a>
              <a href="#classes" className="text-gray-700 hover:text-purple-600 transition-colors">CLASSES</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">CONTACT</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Register</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600">
                Manasa
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of passion, dedication, and artistic excellence in the classical dance form of Bharatanatyam
            </p>
          </div>
        </div>
      </section>

      {/* The Sprightly Soul */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">
                The Sprightly Soul
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Lifelong Passion</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every time she steps on the stage, Manasa leaves her audience spellbound with her fluidity of movements, 
                elegant poses and exceptionally emotive expressions. The happiness that emanates from her personality is 
                palpable as she performs what has been her passion all her life—Bharatanatyam.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Manasa took to stage at the tender age of five to perform with the wondrous mind of a keen child. 
                As an ardent disciple of the ancient Indian classical dance form, she trained formally, from the age of five, 
                under the auspices of Karnataka Kalatilaka Dr. Vasundhara Doraswamy, a proficient Bharatanatyam Dancer 
                and well-qualified trainer.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-amber-100 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">
                  Masters in Dance-Bharatanatyam from Mysore University and Vidwat from Karnataka Secondary 
                  Education Examination Board for Dance (KSEEBD)
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-amber-100 rounded-2xl p-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Manasa Nagaraj - Professional Portrait"
                  className="w-64 h-64 object-cover rounded-full mx-auto mb-6 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manasa Nagaraj</h3>
                <p className="text-gray-600">Artistic Director & Master Instructor</p>
                <div className="flex items-center justify-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Skillful Compassionate Teacher */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
              The Skillful Compassionate Teacher
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Teaching Excellence</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-purple-700 flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Professional Training</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  With a Ranga Pravesha performance that garnered accolades from media and the art society and 
                  numerous on-stage national performances, she has displayed her comprehensive understanding of 
                  the intricacies of this ancient dance form.
                </p>
                <p className="text-gray-600">
                  This qualifies her not only as a trainer but also as a learned judge of others' performances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100">
              <CardHeader>
                <CardTitle className="text-amber-700 flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Teaching Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Serving as an expert Bharatanatyam trainer, she worked for two years at Vasundhara Performing Arts Center, 
                  Mysore, Karnataka.
                </p>
                <p className="text-gray-600">
                  She also tutored the hearing impaired disciples at Rotary West and Parent's Association of Deaf Children Trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Continuing to Mesmerize Audiences */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">
              Continuing to Mesmerize Audiences
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Acclaimed Performances</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Having presented exemplary performances in several highly acclaimed dance festivals across India, 
              Manasa has received rave reviews from leading newspapers and art aficionados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Media Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Extensively covered by top Indian English publications including The Hindu, The New Indian Express, 
                  and Deccan Herald.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-purple-600 font-medium">"Moving with felicity" - The Hindu</p>
                  <p className="text-sm text-purple-600 font-medium">"Dancing like a swan" - Prajavani</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Festival Performances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Mysore Dasara (2012)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Lokrang Festival (2010)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Pravah Festivals - Jodhpur & Goa (2014)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">US Performances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  After moving to the US, she has been touring the country presenting riveting dance concerts 
                  apart from serving as a Bharatanatyam trainer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Doer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            The Doer
          </Badge>
          <h2 className="text-3xl font-bold mb-6">Vision & Mission</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Currently located in Bay Area, she aspires to utilize the knowledge she has gained, through her perseverance 
            and hard-work, numerous commendable on-stage performances, several years of teaching and judging, 
            to promote this complex sophisticated dance form.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold mb-4">Professional Classes</h3>
              <p className="text-sm">
                Started Nrithyamanasa Performing Arts Center to hold professional classes for people 
                wishing to make it as a career.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold mb-4">Workshops</h3>
              <p className="text-sm">
                Organizing workshops to generate more interest in this ancient Indian classical dance form.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold mb-4">Dance Contests</h3>
              <p className="text-sm">
                Planning dance contests to showcase and encourage budding young dancers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Continues */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Journey Continues...</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            With her passion and dedication, Manasa Nagaraj has become an excellent Bharatanatyam dancer. 
            Now all she desires is to spread, share and utilize her knowledge about the dance form in all 
            plausible ways to benefit others.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Your Journey with Manasa
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">Back to Home</Link>
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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
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
                <li><a href="#classes" className="hover:text-white transition-colors">Classes</a></li>
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
              <h3 className="font-semibold mb-4">Contact Info</h3>
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
