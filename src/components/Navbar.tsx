import React, { useState } from 'react';
import { MenuIcon, X, Dumbbell } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Dumbbell size={32} className="text-purple-500" />
          <div>
            <span className="text-xl font-bold">Royal Fitness</span>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-purple-400 font-medium">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 font-medium">
            About Us
          </a>
          <a href="#services" className="hover:text-purple-400 font-medium">
            Services
          </a>
          <a href="#trainers" className="hover:text-purple-400 font-medium">
            Trainers
          </a>
          <a href="#facilities" className="hover:text-purple-400 font-medium">
            Facilities
          </a>
          <a href="#testimonials" className="hover:text-purple-400 font-medium">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-purple-400 font-medium">
            Contact
          </a>
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition duration-300">
            Join Now
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-gray-900 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-purple-400" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-white hover:text-purple-400" onClick={() => setIsOpen(false)}>
              About Us
            </a>
            <a href="#services" className="text-white hover:text-purple-400" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#trainers" className="text-white hover:text-purple-400" onClick={() => setIsOpen(false)}>
              Trainers
            </a>
            <a href="#facilities" className="text-white hover:text-purple-400" onClick={() => setIsOpen(false)}>
              Facilities
            </a>
            <a href="#testimonials" className="text-white hover:text-purple-400" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-purple-400" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-center font-medium transition duration-300" onClick={() => setIsOpen(false)}>
              Join Now
            </a>
          </nav>
        </div>}
    </header>;
}