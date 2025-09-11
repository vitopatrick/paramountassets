import React from 'react';
import { ArrowRight, Shield, Clock } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Start Your Crypto Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
            Join thousands of successful investors who have already started building their financial future with fidelity assests.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Shield className="h-5 w-5 text-emerald-200" />
              <span className="text-emerald-100">100% Secure Platform</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Clock className="h-5 w-5 text-emerald-200" />
              <span className="text-emerald-100">Quick 5-Minute Setup</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Start Investing Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          
          <p className="text-emerald-200 text-sm mt-8">
            No hidden fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}