import React, { useState } from 'react';
import { Bell, User } from 'lucide-react';

const EmployerNavBar = ({employer}) => {
  // Mock user data (in a real app, this would come from auth context or state management)
  
  const [isHovered, setIsHovered] = useState(false);

  const userName = employer?.name || "User"
  const initials = userName
    
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    

  return (
    <header className="fixed top-0 left-64 right-0 bg-white shadow-sm py-3 px-6 flex justify-between items-center border-b z-10">
      <div className="flex items-center">
        <div className="flex items-center mr-6">
        
          
        </div>
       
      </div>
      
      <div className="flex items-center space-x-6 gap-4">
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

export default EmployerNavBar;