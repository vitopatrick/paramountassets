import React from 'react';
import { Users, DollarSign, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Investors",
    description: "Trust our platform"
  },
  {
    icon: DollarSign,
    value: "$2.5B+",
    label: "Total Invested",
    description: "Across all portfolios"
  },
  {
    icon: TrendingUp,
    value: "98.7%",
    label: "Success Rate",
    description: "Profitable investments"
  },
  {
    icon: Award,
    value: "5 Years",
    label: "Market Experience",
    description: "Proven track record"
  }
];

export default function AboutReach() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-4 inline-block">
                <stat.icon className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-emerald-100 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}