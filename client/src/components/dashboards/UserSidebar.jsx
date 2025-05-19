import React from "react";
import {
  Home,
  Briefcase,
  ClipboardList,
  Bookmark,
  Upload,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const UserSidebar = ({ setActive, active, onClose,user }) => {
  const {logout} = useAuth()
  const items = [
    { label: "Dashboard", icon: <Home size={20} /> },
    { label: "Browse Jobs", icon: <Briefcase size={20} /> },
    { label: "Applied Jobs", icon: <ClipboardList size={20} /> },
    { label: "Saved Jobs", icon: <Bookmark size={20} /> },
    { label: "Resume Upload", icon: <Upload size={20} /> },
    { label: "Profile", icon: <User size={20} /> },
    { label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="bg-white text-black h-full w-64 p-4 flex flex-col justify-between shadow-lg">

       <div className="p-2 mt-26">
        {user ? (
          <div className="text-md text-gray-700">
            <p className="font-medium">{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ) : (
          <div className="text-sm text-gray-500">Loading Employer Info...</div>
        )}
      </div>

      {/* Close button for mobile */}
      <div className="md:hidden mb-4 flex justify-end">
        <button onClick={onClose} aria-label="Close Menu">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 flex-1">
        {items.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex items-center space-x-3 px-3 py-2 rounded hover:bg-blue-400 transition text-left w-full ${
              active === label ? "bg-blue-300 text-white" : ""
            }`}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div>
        <button onClick={logout} className="w-full flex items-center text-purple-600 font-bold hover:bg-red-50 rounded-md px-3 py-2 text-sm">
          <span className="mr-3">
            <LogOut size={20} />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;