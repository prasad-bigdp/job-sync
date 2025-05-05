import React from 'react'
import { BarChart3, TrendingUp, Activity } from 'lucide-react';

const insights = [
  {
    icon: <TrendingUp className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Top Skills in Demand',
    desc: 'React, Node.js, Data Analysis, Cloud Computing are trending across IT jobs.',
  },
  {
    icon: <BarChart3 className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Average Salary Trends',
    desc: 'Frontend Developers now earn ₹6-12 LPA on average in Tier-1 cities.',
  },
  {
    icon: <Activity className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Remote Jobs Growth',
    desc: 'Work-from-home roles have increased by 40% in last 6 months.',
  },
];



function JobInsightsSection() {
  return (
    <section className="w-full bg-[#f9fafb] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-[#1e2a38] mb-8 sm:mb-10">
          Career Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {insights.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-[#1e2a38] mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobInsightsSection 