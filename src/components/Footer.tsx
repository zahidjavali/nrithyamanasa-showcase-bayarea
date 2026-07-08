import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-[#0A2E2E] text-[#F7F1E3] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/74d7bb37-cf4a-4724-a81f-71869fc277ee.png" 
                alt="Nrithyamanasa Logo" 
                className="h-8 w-auto"
                width="120"
                height="40"
                loading="lazy"
              />
            </div>
            <p className="text-[#F7F1E3] text-sm sm:text-base">
              Bay Area's premier Bharatanatyam academy, nurturing classical dance traditions since inception. As a proud affiliate of SAMPADA University, we offer students the opportunity to pursue formal dance examinations and certifications, ensuring authentic training rooted in traditional methodology while providing recognized academic credentials.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base text-white">Quick Links</h3>
            <ul className="space-y-2 text-[#F7F1E3] text-sm sm:text-base">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/about-manasa" className="hover:text-[#D4AF37] transition-colors">About Manasa</Link></li>
              <li><Link to="/performances" className="hover:text-[#D4AF37] transition-colors">Performances</Link></li>
              <li><Link to="/press-gallery" className="hover:text-[#D4AF37] transition-colors">Press Gallery</Link></li>
              <li><a href="/#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base text-white">Programs</h3>
            <ul className="space-y-2 text-[#F7F1E3] text-sm sm:text-base">
              <li>Beginner Classes</li>
              <li>Intermediate Training</li>
              <li>Advanced/Pre-Arangetram</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base text-white">Connect with me on Social Media</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.facebook.com/nrithyamanasa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7F1E3] hover:text-[#D4AF37] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://www.instagram.com/nrithyamanasa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7F1E3] hover:text-[#D4AF37] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCjHetu8d3HAn6D3NViNLNjA/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7F1E3] hover:text-[#D4AF37] transition-colors"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="space-y-2 text-[#F7F1E3] text-sm">
              <p>1078 Monroe St, Santa Clara, CA 95050</p>
              <p>
                <a href="tel:8588804577" className="hover:text-[#D4AF37] transition-colors">
                  858 880 4577
                </a>
              </p>
              <p>
                <a href="mailto:manasanrithya@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                  manasanrithya@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 sm:my-8 bg-white/15" />
        
        <div className="text-center text-[#F7F1E3]/65 text-sm sm:text-base space-y-2">
          <p>&copy; 2026 Nrithyamanasa Performing Arts Center. All rights reserved.</p>
          <p>
            Content & Design by{" "}
            <a 
              href="https://writewing.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F7F1E3]/65 hover:text-[#D4AF37] transition-colors underline"
            >
              Write Wing Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
