
import React from 'react';
import {
  LayoutDashboard,
  Pencil,
  Briefcase,
  Settings,
  UploadCloud,
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 text-black fixed flex flex-col">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        JobSync
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <NavItem icon={<LayoutDashboard />} label="Dashboard" />
        <NavItem icon={<Pencil />} label="Edit" />
        <NavItem icon={<Briefcase />} label="Jobs" />
        <NavItem icon={<Settings />} label="Settings" />
        <NavItem icon={<UploadCloud />} label="Upload" />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer transition">
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </div>
);

export default Sidebar;
