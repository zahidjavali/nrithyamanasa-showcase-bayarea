import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, MapPin, Phone, Mail, Clock, Users, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">HOME</a>
              <Link to="/about-manasa" className="text-gray-700 hover:text-purple-600 transition-colors">ABOUT MANASA</Link>
              <Link to="/performances" className="text-gray-700 hover:text-purple-600 transition-colors">PERFORMANCES</Link>
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

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">
              Premier Bharatanatyam Academy in Bay Area
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sharing our passion, love, and knowledge of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600">
                Bharatanatyam
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the divine art of classical Indian dance at Santa Clara's highest-rated Bharatanatyam studio. 
              From beginners to advanced practitioners, we nurture artistic excellence and cultural heritage.
            </p>
          </div>

          {/* Featured Event */}
          <div className="bg-gradient-to-r from-purple-600 to-amber-600 rounded-2xl p-8 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nritya Taranga 2024</h2>
            <p className="text-lg mb-6">
              Join us for an extraordinary evening of classical dance at Mission City Center For Performing Arts, Santa Clara
            </p>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>September 22nd</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Mission City Center</span>
              </div>
            </div>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
              Reserve Tickets
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Manasa Nagaraj</h2>
              <p className="text-lg text-gray-600 mb-6">
                Artistic Director of Nrithyamanasa Performing Arts Center and Director of Esha Yoga, 
                a highly rated wellness studio in Santa Clara. With decades of experience in classical 
                dance and wellness, Manasa brings unparalleled expertise to her students.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Highly rated instructor</span>
              </div>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link to="/about-manasa">Read More about Manasa</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-amber-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manasa Nagaraj</h3>
                <p className="text-gray-600">Artistic Director & Master Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bharatanatyam Classes of All Levels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated instruction for beginners, intermediate, and advanced students. Using rhythmic footwork, 
              geometric movement, codified hand gestures, and facial expressions to tell powerful stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-700">Kids/Adult Beginner</CardTitle>
                <CardDescription>Foundation Building (Years 1-3)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Students learn pure dance steps/Adavus during the first three years. 
                  A solid foundation is laid for perfection in later years.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">2 sessions/week, 1 hour each</span>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:border-amber-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-amber-700">Kids/Adult Intermediate</CardTitle>
                <CardDescription>Expressive Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For students who have learned adavus. Expressive items are introduced with 
                  primary emotions of devotion and praise to deities.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">2 sessions/week, 1 hour each</span>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-700">Advanced/Pre-Arangetram</CardTitle>
                <CardDescription>Master Level Training</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Three to four years of intensive training where varnams and complex 
                  items are taught and practiced for arangetram preparation.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">Professional certification track</span>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Happy Students & Reviews</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Avani K.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "She is an amazing performer. Saw her dance at an event. Very gracious and expressive. Loved it."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Gokul R.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "My kid has been learning dance here from the past one year and I can see significant progress. 
                  Ms Manasa is an excellent bharatnatyam dancer. Highly recommend this dance school."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Ajay G.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "One of the Best Bharatnatyam teachers in Bay area. If you need to learn Bharatanatyam 
                  with Indian traditions then this is good place for your kids to start."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-2">Featured in:</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>"Moving with felicity" - The Hindu</span>
              <span>"Dancing like a swan" - Prajavani</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are some common questions about Nrithyamanasa Performing Arts Center.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">What is Bharatanatyam?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  Bharatanatyam is the name given in the early twentieth century to the dances known as Dasi-attam and Sadir-attam, which evolved over centuries in the temples and royal courts of Southern India. It highlights the beauty of strong lines leading out from the dancer's body and is embellished with intricately expressive hand gestures and elaborate storytelling through exquisite facial expressions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">How long and how many times a week are the classes?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  For an hour each, these classes take place twice or once a week depending on the student preference. Check the Classes page for the schedule.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">What is the minimum age to start learning Bharatanatyam?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  While each child's development is different, the ideal age is 5 years and older. Classes are taught using child-friendly methods to introduce your little dancer to the rhythms, music, and movement of Bharatanatyam.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">What are the dress requirements?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="text-gray-600 space-y-2">
                  <p><strong>Females:</strong> Should wear a dance practice sari or suitably tailored salwar kameez.</p>
                  <p><strong>Males:</strong> Should wear a dhoti or a suitably tailored kurta pajama.</p>
                  <p><strong>All students:</strong> Should have their waist firmly bound.</p>
                  <p><strong>Hair:</strong> Should be pinned away from the face and, if necessary, drawn back in a single plait or bun. A long plait should be secured at the back to prevent its movement from distracting from the dance.</p>
                  <p><strong>Note:</strong> No dance costume, jewelry, or ankle bells should be worn.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">Why does each level vary?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  Each level will progress according to each student's ability level, class participation, and regularity/intensity of home practice. Each level builds on the curriculum and training from the previous levels. So mastery of each level is ABSOLUTELY ESSENTIAL in order to attain full-fledged confidence in all aspects of Nritta, Nritya, and Natya.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">How do I register?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  Click on the Signup | Register link to create an account and pay registration fees. After your first class, we will set up an autopay membership and it's charged every month on the same calendar day.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">How do I cancel?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="text-gray-600 space-y-2">
                  <p>AUTO-PAYS require a 30-day written notice to discontinue. For cancellations, holds, and/or changes to memberships for any reason, the member must notify Nrithyamanasa Performing Arts Center via email at manasanrithya@gmail.com at least 30 days prior to the next auto-draft, putting "membership cancellation, membership hold, or membership change" as subject heading of the email.</p>
                  <p>In turn, Nrithyamanasa Performing Arts Center will send a confirmation via email after the changes have been made to the account.</p>
                  <p>$15 per month would be charged from your account per month as hold charges. Member agrees that Nrithyamanasa Performing Arts Center could take up to 7 business days to respond.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">Do you offer 1 class or 2 per week?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  We offer 2 classes per week but students can choose 1 or 2 classes depending on their availability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">Are classes held during summer and winter breaks?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  Yes, classes will be held during the summer and winter breaks.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">Do you offer trial classes?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  No, the student needs to register and pay the $50 registration fee. The registration fee is non-refundable. Autopay would start only after the first class. If a student doesn't like the trial class then autopay doesn't start.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">What if I/my child misses a class?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">
                  There will be no makeup class. If the teacher misses a class then we will provide a makeup class.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="bg-white rounded-lg border border-purple-100 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">What is the Dancer Code of Conduct?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="text-gray-600 space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>All dancers are expected to attend classes regularly.</li>
                    <li>It is expected that all dancers will be punctual. Warm-up is performed at the beginning of each class and it is imperative that all dancers take part in warm-up to make sure their body is ready for physical activity.</li>
                    <li>All dancers are expected to demonstrate respect for the teacher and will not challenge authority with inappropriate behavior.</li>
                    <li>All dancers understand that NPAC requires them to adhere to the Dress Code. Dancers that do not adhere to the dress code will not participate in the class.</li>
                    <li>All dancers will be friendly, warm and welcoming to the other dancers at the studio and in their classes.</li>
                    <li>All dancers will attend every class and participate to the best of their ability and put forth 100% effort, energy and smiles.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started Today</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to begin your Bharatanatyam journey? We serve students from Sunnyvale, Santa Clara, 
                Cupertino, San Jose, Milpitas, Fremont, and Palo Alto.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold">Studio Location</p>
                    <p className="text-gray-600">1078 Monroe St, Santa Clara, CA 95050</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">858 880 4577 | 858 880 4576</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">manasanrithya@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Start Your Dance Journey</CardTitle>
                <CardDescription>Contact us to learn more about our classes and enrollment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  Schedule a Visit
                </Button>
                <p className="text-sm text-center text-gray-500 mt-4">
                  Pay online and walk into the session that works best for you. The anklets are calling.
                </p>
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
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><Link to="/about-manasa" className="hover:text-white transition-colors">About Manasa</Link></li>
                <li><Link to="/performances" className="hover:text-white transition-colors">Performances</Link></li>
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

export default Index;
