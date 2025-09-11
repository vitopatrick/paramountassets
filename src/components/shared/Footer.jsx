import React from 'react';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">fidelity assests</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building the future of cryptocurrency investment with secure, transparent, and profitable solutions for investors worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-emerald-400 transition-colors">Investment Plans</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 fidelity assests. All rights reserved. Cryptocurrency investments involve risk and may result in loss of capital.
          </p>
        </div>
      </div>
    </footer>
  );
}