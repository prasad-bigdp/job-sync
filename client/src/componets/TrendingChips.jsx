import React from 'react'


function TrendingChips({ title, items }) {
  return (
    <div className="bg-[#f9f9fb] rounded-2xl p-4 md:px-6 md:py-5 my-4 w-full overflow-hidden">
      <div className="flex items-center gap-4">
      
        <div className="min-w-max font-semibold text-gray-900 text-base md:text-lg px-2">
          {title}
        </div>

       
        <div className="flex-1 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-3 w-max pr-2">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full border border-gray-300 bg-white text-sm text-gray-800 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default TrendingChips