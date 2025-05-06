import React from 'react';
import {
  MonitorSmartphone,
  Banknote,
  Landmark,
  UserRound,
  ShoppingBag,
  GraduationCap,
} from 'lucide-react';

function TrendingDomains() {
  const categories = [
    { label: 'IT Jobs', icon: <MonitorSmartphone size={18} /> },
    { label: 'Finance', icon: <Banknote size={18} /> },
    { label: 'Government', icon: <Landmark size={18} /> },
    { label: 'HR', icon: <UserRound size={18} /> },
    { label: 'Sales', icon: <ShoppingBag size={18} /> },
    { label: 'Fresher Only', icon: <GraduationCap size={18} /> },
    { label: 'Internships', icon: <GraduationCap size={18} /> },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#f9fafb] to-[#e2e8f0] text-gray-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Explore Jobs By Category
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 font-medium rounded-full shadow hover:shadow-md hover:scale-[1.03] transition-all duration-200"
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default TrendingDomains;
