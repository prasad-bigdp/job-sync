import React from 'react'

const roles = ['React Developer', 'Data Analyst', 'Project Manager', 'UI/UX Designer', 'DevOps Engineer'];


function TrendingRoles() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1e2a38] mb-8 sm:mb-10">Trending Roles</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {roles.map((role, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm sm:text-base bg-[#e0e7ff] text-indigo-700 rounded-full hover:bg-indigo-100 transition"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>

  )
}

export default TrendingRoles