
import React from 'react';
import {
  LayoutDashboard,
  Pencil,
  Briefcase,
  Settings,
  UploadCloud,
  LogOut
} from 'lucide-react';
import { useAuth } from "../../context/AuthContext"; 

const UserSidebar = ({user}) => {
  const {logout} = useAuth();
  return (
     <aside className="bg-white shadow-lg h-screen w-64 fixed left-0 top-0">
      {/* Company Logo */}
      <div className="p-4 border-b">
        <img
          src="https://res.cloudinary.com/dzmrkbev5/image/upload/v1746340322/JobSync_djvrm2.webp"
          className="w-[110px]"
          alt="Company Logo"
        />
      </div>

      {/* user Details */}
      <div className="p-2">
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

      <nav className="flex-1 p-4 space-y-4">
        <NavItem icon={<LayoutDashboard />} label="Dashboard" />
        <NavItem icon={<Pencil />} label="Edit" />
        <NavItem icon={<Briefcase />} label="Jobs" />
        <NavItem icon={<Settings />} label="Settings" />
        <NavItem icon={<UploadCloud />} label="Upload" />
      </nav>
     

      {/* Logout Button */}
      <div className="absolute bottom-0 w-full p-4 border-t">
        <button onClick={logout} className="w-full flex items-center text-purple-600 font-bold hover:bg-red-50 rounded-md px-3 py-2 text-sm">
          <span className="mr-3"><LogOut size={20} /></span>
          Logout
        </button>
      </div>
    </aside>
);
}
const NavItem = ({ icon, label }) => (
  <div className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer transition">
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </div>
);
export default UserSidebar;
