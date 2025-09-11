import React from 'react';
import { BarChart3, Globe, Lock, Users, Smartphone, Headphones } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track your investments with advanced charts and performance metrics updated in real-time."
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Access cryptocurrency markets worldwide with 24/7 trading opportunities."
  },
  {
    icon: Lock,
    title: "Advanced Security",
    description: "Multi-signature wallets and cold storage ensure your assets are always protected."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced traders and analysts work to maximize your investment returns."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Monitor and manage your investments on-the-go with our intuitive mobile app."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock customer support team."
  }
];

export default function Reasons() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">fidelity assests</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in cryptocurrency investing, from cutting-edge technology to expert support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-lg inline-block mb-6 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}