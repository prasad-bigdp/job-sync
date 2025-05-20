import React, { useState } from 'react';
import { Bell, User, Menu } from 'lucide-react';

const EmpolyerNavBar = ({ setSidebarOpen,employer }) => {
 
  const [isHovered, setIsHovered] = useState(false);
  const userName = employer?.name || "User"

  const initials = userName
    
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

  return (
    <header className="bg-white shadow-sm py-3 px-8 m-2 flex justify-between items-center border-b z-10">
      {/* Mobile menu button */}
      <button
        className="lg:hidden text-gray-700"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-4 space-x-6 ml-auto">
        <button className="text-gray-500 hover:text-gray-700 relative">
          <Bell size={20} />
        </button>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-medium">
            {initials}
          </button>
          {isHovered && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 px-4 text-sm text-gray-700">
              {userName}

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default EmpolyerNavBar;
