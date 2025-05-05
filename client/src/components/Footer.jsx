import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, Download } from 'lucide-react';

const accordionData = [
  {
    title: 'Job Categories',
    links: ['Jobs By Location', 'Jobs By Skill', 'Jobs By Title'],
  },
  {
    title: 'Employers',
    links: ['Employer Login', 'Job Posting', 'Resume Database'],
  },
  {
    title: 'Job Seekers',
    links: ['Login', 'Upload Resume', 'Help'],
  },
  {
    title: 'Company Info',
    links: ['About Us', 'Contact Us', 'Feedback'],
  },
  {
    title: 'IT Jobs',
    links: ['Testing', 'SQL', 'Graphic Design'],
  },
  {
    title: 'Non IT Jobs',
    links: ['HR', 'Sales', 'Accounting'],
  },
];

function FooterAccordion({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-white font-medium py-2 flex justify-between items-center border-b border-gray-600"
      >
        {title}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <ul className="text-gray-400 text-sm py-2 space-y-1">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href="#" className="hover:text-white transition-colors duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white py-10 text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {accordionData.map((section, idx) => (
              <FooterAccordion key={idx} title={section.title} links={section.links} />
            ))}

            <div className="w-full">
              <h3 className="text-white font-medium py-2 border-b border-gray-600">Career Advice</h3>
              <p className="text-gray-400 text-sm py-2">
                Tips and guidance to boost your career.
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-white font-medium py-2 border-b border-gray-600">Partnerships</h3>
              <p className="text-gray-400 text-sm py-2">
                Collaborate and grow together with us.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-5 text-gray-300">
            <div>
              <label className="block mb-2">Selected Country</label>
              <select className="bg-indigo-800 border border-gray-500 text-white py-1 px-3 rounded w-full max-w-xs">
                <option>India</option>
                <option>Singpore</option>
                <option>Thailand</option>
                <option>Gulf</option>
                <option>Hong Kong</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Phone size={16} />
                <span>+91 80 6985 7811 | 1800-419-6666</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} />
                <span>info@foundit.in</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <Download size={16} />
              <span>Download The App</span>
              <img src="https://media.foundit.in/public/core/images/appstore.svg" alt="App Store" className="h-6" />
              <img src="https://media.foundit.in/public/core/images/playstore.svg" alt="Google Play" className="h-6" />
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-xs mt-6 space-y-1 leading-relaxed text-center">
          <p>| Security & Fraud | Privacy Notice | Terms of Use | Complaints |</p>
          <p>© 2025 YourCompany | All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
