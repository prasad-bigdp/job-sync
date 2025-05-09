import React from 'react';

function RecommendedJobs() {
  const jobs = [
    {
      title: 'React Developer',
      company: 'Lenskart',
      salary: '₹6.2 LPA',
      deadline: 'Apply by 10 May',
    },
    {
      title: 'Business Analyst',
      company: 'Swiggy',
      salary: '₹7 LPA',
      deadline: 'Immediate Joiner',
    },
    {
      title: 'Frontend Engineer',
      company: 'Paytm',
      salary: '₹8 LPA',
      deadline: 'Apply by 12 May',
    },
    {
      title: 'UI/UX Designer',
      company: 'CRED',
      salary: '₹6.5 LPA',
      deadline: 'Apply by 14 May',
    },
    {
      title: 'Backend Developer',
      company: 'Zomato',
      salary: '₹7.5 LPA',
      deadline: 'Immediate Joiner',
    },
    {
      title: 'QA Tester',
      company: 'BYJU\'S',
      salary: '₹5.8 LPA',
      deadline: 'Apply by 9 May',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b text-gray-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Personalized Job Picks For You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-5 text-left shadow hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{job.title}</h3>
            <p className="text-sm text-indigo-600 font-medium mb-1">@ {job.company}</p>
            <p className="text-sm text-gray-600 mb-2">{job.salary}</p>
            <p className="text-xs text-gray-500 italic">{job.deadline}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendedJobs;
