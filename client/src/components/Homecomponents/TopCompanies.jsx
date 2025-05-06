import React from 'react';

function TopCompanies() {
  const companies = [
    { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com', openings: 120 },
    { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com', openings: 95 },
    { name: 'Zomato', logo: 'https://logo.clearbit.com/zomato.com', openings: 42 },
    { name: 'Meesho', logo: 'https://logo.clearbit.com/meesho.com', openings: 64 },
    { name: 'Razorpay', logo: 'https://logo.clearbit.com/razorpay.com', openings: 30 },
    { name: 'CRED', logo: 'https://logo.clearbit.com/cred.club', openings: 27 },
    { name: "BYJU'S", logo: 'https://logo.clearbit.com/byjus.com', openings: 33 },
    { name: 'Paytm', logo: 'https://logo.clearbit.com/paytm.com', openings: 51 },
  ]

  return (
    <section className="py-16 px-6 bg-gradient-to-b text-gray-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Most Popular Companies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="group relative bg-white hover:bg-gray-100 border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition duration-300 shadow hover:shadow-md"
          >
            <img src={company.logo} alt={company.name} className="w-16 h-16 object-contain mb-4" />
            <span className="text-lg font-semibold">{company.name}</span>
            <div className="absolute inset-0 bg-indigo-700 bg-opacity-90 text-white flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm font-semibold">
                View {company.openings} Openings
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;
