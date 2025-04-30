import React from 'react'
import { Search, MapPin, Briefcase } from 'lucide-react'

function JobSearchBox() {
  return (
<div className="w-full bg-white px-6 my-6 py-8 md:px-10 md:py-16 shadow-md rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
          Over 8,00,000 openings delivered perfectly
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Job Title Input */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full">
          <Search className="text-gray-500 mr-2 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by Skills, Company or Job Title"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full">
          <MapPin className="text-gray-500 mr-2 w-5 h-5" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Experience Input */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full">
          <Briefcase className="text-gray-500 mr-2 w-5 h-5" />
          <input
            type="text"
            placeholder="Experience"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Search Button */}
        <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition w-full md:w-auto">
          Search
        </button>
      </div>
    </div>
  )
}

export default JobSearchBox