import React from 'react';
import { ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-50 to-green-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Grow Your
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> Crypto</span>
            <br />
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of investors who trust our platform for secure, high-yield cryptocurrency investments. 
            Start building your financial future today with our proven investment strategies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/register"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Investing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="#plans"
              className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
            >
              View Plans
            </a>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Shield className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Trusted</h3>
                <p className="text-gray-600">Bank-level security with multi-layer protection for your investments</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <TrendingUp className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High Returns</h3>
                <p className="text-gray-600">Competitive yields with proven track record of consistent growth</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Zap className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Access</h3>
                <p className="text-gray-600">Quick setup and immediate access to your investment dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
