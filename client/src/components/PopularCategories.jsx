import React from 'react'
import { Briefcase, Code, Layers, Globe } from 'lucide-react';
const categories = [
  {
    icon: <Briefcase className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Business',
    desc: 'Explore roles in management, sales, and marketing.',
  },
  {
    icon: <Code className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Development',
    desc: 'Find jobs in frontend, backend, and full-stack development.',
  },
  {
    icon: <Layers className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Design',
    desc: 'Discover opportunities in UI/UX and graphic design.',
  },
  {
    icon: <Globe className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Marketing',
    desc: 'Search for roles in digital marketing and SEO.',
  }
];


function PopularCategories() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-[#1e2a38] mb-8 sm:mb-10">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((item, i) => (
            <div
              key={i}
              className="bg-[#f9fafb] p-5 sm:p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer"
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

export default PopularCategories