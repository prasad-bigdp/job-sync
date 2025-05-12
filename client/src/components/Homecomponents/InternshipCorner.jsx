import React from 'react';
import { Briefcase, MapPin, BadgeCheck } from 'lucide-react';

function InternshipCorner() {
  const internships = [
    { logo: 'https://logo.clearbit.com/internshala.com', title: 'Web Dev Intern', company: 'Internshala' },
    { logo: 'https://logo.clearbit.com/zoho.com', title: 'Frontend Intern', company: 'Zoho' },
    { logo: 'https://logo.clearbit.com/groww.in', title: 'UI Intern', company: 'Groww' },
    { logo: 'https://logo.clearbit.com/flipkart.com', title: 'React Intern', company: 'Flipkart' },
    { logo: 'https://logo.clearbit.com/redbus.in', title: 'Design Intern', company: 'Redbus' },
    { logo: 'https://logo.clearbit.com/phonepe.com', title: 'Mobile Intern', company: 'PhonePe' },
  ];

  return (
<section className="py-16 px-6 bg-gradient-to-b text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Start Your Career with These Internships
      </h2>
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        <span className="bg-indigo-100 border border-indigo-300 text-indigo-700 rounded-full px-4 py-1 text-sm flex items-center gap-1">
          <MapPin size={14} /> Remote
        </span>
        <span className="bg-emerald-100 border border-emerald-300 text-emerald-700 rounded-full px-4 py-1 text-sm flex items-center gap-1">
          <BadgeCheck size={14} /> Stipend ₹10k+
        </span>
        <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 rounded-full px-4 py-1 text-sm flex items-center gap-1">
          <Briefcase size={14} /> Certificate
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {internships.map((intern, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <img src={intern.logo} alt={intern.company} className="w-14 h-14 object-contain mb-4" />
            <h3 className="text-lg font-semibold mb-1 text-gray-800">{intern.title}</h3>
            <p className="text-sm text-gray-500 mb-3">@ {intern.company}</p>
            <button className="px-4 py-2 mt-auto bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-medium transition-all duration-200">
              Apply Now
            </button>
            <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-5 transition-all duration-300 rounded-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InternshipCorner;
