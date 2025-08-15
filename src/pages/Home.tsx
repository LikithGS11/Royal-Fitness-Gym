import React from 'react';
import { ArrowRight, CheckCircle, Award, Clock, Users, Dumbbell, Star, MapPin, Phone } from 'lucide-react';
import { TestimonialSection } from '../components/TestimonialSection';
import { CTASection } from '../components/CTASection';
export function Home() {
  return <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="bg-black text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
        opacity: 0.6
      }}></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                Royal Fitness
              </h1>
              <div className="flex items-center mt-4">
                <Star className="text-yellow-500 fill-current" size={20} />
                <span className="ml-2">4.8 (327 Reviews)</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8">
              Welcome to Royal Fitness – Your Gateway to Health & Strength! We
              combine state-of-the-art equipment, expert trainers, and a
              motivating environment to help you achieve your fitness goals.
              Whether your aim is weight loss, strength training, or overall
              wellness, we are here to guide you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg transition duration-300 flex items-center">
                Join now <ArrowRight size={20} className="ml-2" />
              </a>
              <a href="#about" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold text-lg transition duration-300">
                Learn More
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <MapPin className="text-purple-400 mr-2" />
                <span>Varthur Rd, Gunjur Village, Bengaluru</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-purple-400 mr-2" />
                <span>086884 26501</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Royal Fitness
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Royal Fitness is a premium fitness center located in Bengaluru,
                offering a clean, spacious, and motivating environment for all
                fitness enthusiasts. Our mission is to provide effective, fun,
                and safe workouts while supporting members with personalized
                training and diet guidance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Friendly and professional trainers
                    </h3>
                    <p className="text-gray-700">
                      Our expert trainers are dedicated to helping you achieve
                      your fitness goals with personalized attention.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Top-notch exercise machines and equipment
                    </h3>
                    <p className="text-gray-700">
                      We invest in high-quality equipment to ensure effective
                      and safe workouts for our members.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Motivating gym atmosphere
                    </h3>
                    <p className="text-gray-700">
                      Our positive environment keeps you motivated and committed
                      to your fitness journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Affordable membership plans
                    </h3>
                    <p className="text-gray-700">
                      We offer reasonable pricing options to make fitness
                      accessible to everyone.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#services" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center">
                Discover our services <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Modern gym interior" className="rounded-lg shadow-xl w-full h-auto object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg md:max-w-xs">
                <p className="font-bold text-xl mb-2">⭐ 4.8</p>
                <p>Rated by over 327 satisfied members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services & Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of programs tailored for every fitness
              level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personal Training
              </h3>
              <p className="text-gray-700 mb-4">
                Custom workout plans designed by experienced trainers to help
                you achieve your specific fitness goals, whether it's weight
                loss, muscle gain, or overall fitness improvement.
              </p>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Dumbbell size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Strength & Cardio Training
              </h3>
              <p className="text-gray-700 mb-4">
                Improve endurance, tone muscles, and burn fat with our
                comprehensive strength and cardio training programs designed for
                all fitness levels.
              </p>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Group Classes
              </h3>
              <p className="text-gray-700 mb-4">
                Fun and engaging sessions for yoga, HIIT, and functional fitness
                that provide motivation and community support while achieving
                your fitness goals.
              </p>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Diet & Nutrition Support
              </h3>
              <p className="text-gray-700 mb-4">
                Personalized diet suggestions to complement your workout
                routine, helping you maximize results and achieve sustainable
                health improvements.
              </p>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Trainers Section */}
      <section id="trainers" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Trainers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our trainers are the heart of Royal Fitness, dedicated to helping
              you achieve your fitness goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Sagar Krishna Bose, Fitness Trainer" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Sagar Krishna Bose
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  Senior Fitness Trainer
                </p>
                <p className="text-gray-700 mb-4">
                  Expert in creating effective workout and diet plans. Sagar
                  specializes in strength training and has helped hundreds of
                  clients achieve their fitness goals.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Certified Trainer
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Nutrition Expert
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1609899537878-88d5ba429bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Kavya Reddy, Fitness Trainer" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Kavya Reddy
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  Fitness Coach
                </p>
                <p className="text-gray-700 mb-4">
                  Ensures every session is motivating, safe, and results-driven.
                  Kavya specializes in functional training and creating
                  personalized fitness plans.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Functional Training
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Group Classes
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Nazbul, Fitness Trainer" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Nazbul</h3>
                <p className="text-purple-600 font-medium mb-3">
                  Strength & Conditioning Coach
                </p>
                <p className="text-gray-700 mb-4">
                  Combines strict training with friendliness, making workouts
                  both challenging and enjoyable. Nazbul specializes in
                  high-intensity training and strength development.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    HIIT Specialist
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Strength Training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Facilities Section */}
      <section id="facilities" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've invested in top-quality equipment and amenities to ensure
              you have everything you need for an effective workout.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Modern gym equipment" className="rounded-lg shadow-md w-full h-80 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                Modern Exercise Equipment
              </h3>
              <p className="text-gray-700">
                Our gym features the latest cardio machines, free weights, and
                resistance training equipment from top brands, regularly
                maintained for optimal performance and safety.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Spacious and clean workout areas" className="rounded-lg shadow-md w-full h-80 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                Spacious Workout Areas
              </h3>
              <p className="text-gray-700">
                Our clean and spacious workout areas provide the perfect
                environment for your fitness journey, with dedicated zones for
                different training styles.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Positive Environment
              </h3>
              <p className="text-gray-700">
                Train in a motivating atmosphere that keeps you inspired and
                committed to your fitness goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Cardio Zone
              </h3>
              <p className="text-gray-700">
                Dedicated area with top-quality cardio equipment to help improve
                your endurance and heart health.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Strength Zone
              </h3>
              <p className="text-gray-700">
                Comprehensive free weights and resistance machines for building
                strength and muscle tone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Functional Training Area
              </h3>
              <p className="text-gray-700">
                Specialized equipment for functional movements that improve
                everyday activities and overall fitness.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <TestimonialSection />
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to start your fitness journey? Contact us today to learn
                more about our memberships, schedule a tour, or sign up for a
                free trial session.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin size={24} className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">
                      Varthur Rd, Gunjur Village, Bengaluru, Karnataka 560087
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-700">086884 26501</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={24} className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-700">
                      Monday–Friday: 5:00 am – 9:45 pm
                    </p>
                    <p className="text-gray-700">Saturday: 5:00 am – 9:45 pm</p>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="(123) 456-7890" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" placeholder="I'm interested in learning more about your personal training services..."></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Book Your Free Trial
              </h3>
              <p className="text-gray-700 mb-6">
                Experience Royal Fitness firsthand with a free trial session.
                Our trainers will guide you through our facilities and help you
                understand how our programs can benefit your fitness journey.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    Basic Membership
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Access to all gym equipment and facilities during regular
                    hours.
                  </p>
                  <p className="text-purple-600 font-bold text-xl">
                    ₹1,499/month
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    Premium Membership
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Unlimited access to equipment, classes, and amenities with
                    priority booking.
                  </p>
                  <p className="text-purple-600 font-bold text-xl">
                    ₹2,499/month
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    Elite Membership
                  </h4>
                  <p className="text-gray-700 mb-3">
                    All premium benefits plus personal training sessions and
                    nutrition counseling.
                  </p>
                  <p className="text-purple-600 font-bold text-xl">
                    ₹3,999/month
                  </p>
                </div>
                <div className="pt-4">
                  <a href="#" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 w-full text-center">
                    Start Free Trial
                  </a>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    No commitment required. 7-day free trial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <CTASection />
    </div>;
}