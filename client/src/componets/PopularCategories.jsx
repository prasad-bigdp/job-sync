import React from 'react'
import {
  Banknote,
  Home,
  User2,
  Briefcase,
  Calendar,
  Globe,
  Database,
  FileSpreadsheet,
  Headphones,
  Palette,
  Megaphone,
} from 'lucide-react';


function PopularCategories() {

  const categories = [
    { icon: <Banknote className="text-orange-600" />, label: 'Banking' },
    { icon: <Home className="text-orange-600" />, label: 'Work From Home' },
    { icon: <User2 className="text-orange-600" />, label: 'HR' },
    { icon: <Briefcase className="text-orange-600" />, label: 'Sales' },
    { icon: <FileSpreadsheet className="text-orange-600" />, label: 'Accounting' },
    { icon: <Headphones className="text-orange-600" />, label: 'Customer Support' },
    { icon: <Calendar className="text-orange-600" />, label: 'Event Management' },
    { icon: <Globe className="text-orange-600" />, label: 'IT' },
    { icon: <Database className="text-orange-600" />, label: 'SQL' },
    { icon: <FileSpreadsheet className="text-orange-600" />, label: 'Oracle' },
    { icon: <Palette className="text-orange-600" />, label: 'Graphic Design' },
    { icon: <Megaphone className="text-orange-600" />, label: 'Digital Marketing' },
  ];


  return (
    <div className="px-4 md:px-12 my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 bg-white shadow-sm"
          >
            <div className="bg-orange-100 p-2 rounded">
              {cat.icon}
            </div>
            <span className="text-sm font-medium">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularCategories