import React, { useState } from "react";
import {
  Bell,
  Sun,
  Moon,
  UserCircle,
  ChevronDown,
  LogOut,
  Settings,
  Search,
} from "lucide-react";

const UserNavBar = ({ showSearchBar, onMenuClick }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm px-4 md:px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b dark:border-gray-700">
      
      {/* Hamburger menu for mobile */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <button
          onClick={onMenuClick}
          className="md:hidden text-gray-600 dark:text-white"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue">
          JobSync
        </div>
      </div>

      {/* Search Bar */}
      {showSearchBar && (
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Your Job"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
        </div>
      )}

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="text-gray-700 dark:text-black"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="relative ml-4">
          <Bell className="text-gray-700 dark:text-black" size={20} />
        </div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-1 text-gray-700 dark:text-black"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <UserCircle size={28} />
            <ChevronDown size={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded shadow z-50">
              <a
                href="#profile"
                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <UserCircle size={18} className="mr-2" /> View Profile
              </a>
              <a
                href="#settings"
                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <Settings size={18} className="mr-2" /> Settings
              </a>
              <a
                href="#logout"
                className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500"
              >
                <LogOut size={18} className="mr-2" /> Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default UserNavBar;