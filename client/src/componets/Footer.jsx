import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, Download } from 'lucide-react';

const footerData = {
  'Job Categories': [
    'Jobs By Location',
    'Jobs By Skill',
    'Jobs By Title',
    'Jobs By Function',
    'Jobs By Industry',
    'Jobs By Education',
    'Jobs By Other',
  ],
  Employers: [
    'Employer Login',
    'Job Posting',
    'Access Resume Database',
    'Join mRecruiters',
    'Buy Online',
  ],
  'Job Seekers': [
    'Job Seekers Login',
    'Upload Resume',
    'Search Tips',
    'Find Companies',
    'Help',
  ],
  'Company Info': [
    'About Us',
    'Contact Us',
    'Send Feedback',
    'HTML Sitemap',
    'XML Sitemap',
    'Jobs App',
  ],
  'IT Jobs': ['Software testing', 'SQL', 'Oracle', 'Graphic Design', 'Digital marketing'],
  'Non IT Jobs': [
    'HR',
    'Sales',
    'Accounting',
    'Call Center',
    'Electrical engineering',
    'Event management',
  ],
};

const nonAccordionTitles = ['Career Advice', 'Partnerships'];

const FooterAccordion = ({ title, items }) => {
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
        <ul className="text-gray-400 text-sm py-2 space-y-1 pl-1">
          {items.map((item, idx) => (
            <li key={idx} className="hover:underline cursor-pointer">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full  bg-[#0F0F0F] text-black text-sm overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full px-6 py-10 gap-10">
      
        <div className="w-full lg:w-1/2 space-y-3">
          {Object.entries(footerData).map(([title, items]) => (
            <FooterAccordion key={title} title={title} items={items} />
          ))}

          {nonAccordionTitles.map((title, idx) => (
            <div key={idx} className="text-white font-medium pt-2 border-b border-gray-600">
              {title}
            </div>
          ))}
        </div>

      
        <div className="w-full lg:w-1/2 space-y-5 text-gray-300">
         
          <div>
            <label className="block mb-2">Selected Country</label>
            <select className=" bg-[#0F0F0F] border border-gray-500 text-white py-1 px-3 rounded w-full max-w-xs">
              <option>India</option>
              <option>Gulf</option>
              <option>Hong Kong</option>
              <option>Singapore</option>
              <option>Thailand</option>
            </select>
          </div>

        
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Phone size={16} />
              <span>Toll No: +91 90877XXXX | Toll Free No: 1800-419-6666</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail size={16} />
              <span>info@sams.in</span>
            </div>
          </div>

         
          

         
          <div className="flex items-center gap-4 mt-3 text-white text-lg">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>

          {/* Footer Bottom Links */}
          <div className="text-gray-400 text-xs mt-6 space-y-1 leading-relaxed">
            <p>| Security & Fraud | Privacy Notice | Terms of Use | Beware of Fraudsters | Be Safe | Complaints |</p>
            <p>© 2025 sams | All rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
