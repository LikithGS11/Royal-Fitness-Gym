import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Dumbbell } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell size={24} className="text-purple-500" />
              <div>
                <h3 className="text-xl font-bold">Royal Fitness</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your gateway to health & strength. We combine state-of-the-art
              equipment, expert trainers, and a motivating environment to help
              you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-400 hover:text-white transition-colors">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-gray-400 hover:text-white transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Varthur Rd, Gunjur Village, Bengaluru, Karnataka 560087
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">086884 26501</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">info@royalfitness.com</span>
              </li>
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-purple-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Monday - Friday</p>
                  <p className="text-gray-400">5:00 AM - 9:45 PM</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-purple-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Saturday</p>
                  <p className="text-gray-400">5:00 AM - 9:45 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-500">
            © 2023 Royal Fitness. All rights reserved. | Rating: ⭐ 4.8 (327
            Reviews)
          </p>
        </div>
      </div>
    </footer>;
}