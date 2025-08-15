import React from 'react';
export function CTASection() {
  return <section className="bg-purple-700 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join Royal Fitness today and take the first step toward achieving your
          fitness goals. Sign up now for a free trial session!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg transition duration-300">
            Book a Free Trial
          </a>
          <a href="tel:08688426501" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-full font-bold text-lg transition duration-300">
            Call Us: 086884 26501
          </a>
        </div>
      </div>
    </section>;
}