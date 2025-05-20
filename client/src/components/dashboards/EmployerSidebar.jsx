import React from 'react';
import {
  BarChart2,
  FileText,
  List,
  Users,
  Star,
  Building,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from "../../context/AuthContext";

const EmployerSidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen,employer }) => {
  const {logout} = useAuth();

  const menuItems = [
    { icon: <BarChart2 size={20} />, label: "Dashboard" },
    { icon: <FileText size={20} />, label: "Post a Job" },
    { icon: <List size={20} />, label: "Manage Jobs" },
    { icon: <Users size={20} />, label: "Applications" },
    { icon: <Star size={20} />, label: "Shortlisted" },
    { icon: <Building size={20} />, label: "Company Profile" },
    { icon: <Settings size={20} />, label: "Settings" }
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:shadow-none`}
      >
        <div className="p-4 border-b">
          <img
            src="https://res.cloudinary.com/dzmrkbev5/image/upload/v1746340322/JobSync_djvrm2.webp"
            className="w-[110px]"
            alt="Logo"
          />
        </div>

         {/* Employer Details */}
          <div className="p-4 text-center">
        {employer ? (
          <div className="text-md text-gray-700">
            <p className="font-medium">{employer.name}</p>
            <p>{employer.email}</p>
            <p>{employer.phone}</p>
          </div>
        ) : (
          <div className="text-sm text-gray-500">Loading Employer Info...</div>
        )}
      </div>


        <div className="p-4 flex-grow overflow-y-auto">
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      setActiveTab(item.label);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center rounded-md px-3 py-2 text-sm ${
                      activeTab === item.label
                        ? 'bg-blue-50 text-purple-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button onClick={logout} className="w-full flex items-center text-purple-600 bold hover:bg-red-50 rounded-md px-3 py-2 text-sm">
            <span className="mr-3"><LogOut size={20} /></span>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default EmployerSidebar;