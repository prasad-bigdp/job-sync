
import React from 'react';
import {
  Phone,
  Mail,
  Download
} from 'lucide-react';
import FooterAccordion from './FooterAccordion';
const accordionData = [
  {
    title: 'Job Categories',
    links: [
      'Jobs By Location',
      'Jobs By Skill',
      'Jobs By Title',
      'Jobs By Function',
      
    ],
  },
  {
    title: 'Employers',
    links: [
      'Employer Login',
      'Job Posting',
      'Access Resume Database',
      'Join mRecruiters',
    ],
  },
  {
    title: 'Job Seekers',
    links: [
      'Job Seekers Login',
      'Upload Resume',
      'Search Tips',
      'Find Companies',
    ],
  },
  {
    title: 'Company Info',
    links: [
      'About Us',
      'Contact Us',
      'Send Feedback',
      'HTML Sitemap',
    ],
  },
  {
    title: 'IT Jobs',
    links: [
      'Software testing',
      'SQL',
      'Oracle',
      'Graphic Design',
    ],
  },
  {
    title: 'Non IT Jobs',
    links: [
      'HR',
      'Sales',
      'Accounting',
      'Call Center',
    ],
  },
];



const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
        
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {accordionData.map((section, idx) => (
              <FooterAccordion key={idx} title={section.title} links={section.links} />
            ))}

            <div className="w-full">
              <h3 className="text-white font-medium py-2 border-b border-gray-600">Career Advice</h3>
              <p className="text-gray-400 text-sm py-2">
                Explore our career advice section for tips and guidance to advance your professional journey.
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-white font-medium py-2 border-b border-gray-600">Partnerships</h3>
              <p className="text-gray-400 text-sm py-2">
                Discover partnership opportunities and collaborate with us to achieve mutual growth.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-5 text-gray-300">
            <div>
              <label className="block mb-2">Selected Country</label>
              <select className="bg-gray-700 border border-gray-500 text-white py-1 px-3 rounded w-full max-w-xs">
                <option>India</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Phone size={16} />
                <span>Toll No: +91 80 6985 7811 | Toll Free No: 1800-419-6666</span>
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
          <p>| Security & Fraud | Privacy Notice | Terms of Use | Beware of Fraudsters | Be Safe | Complaints |</p>
          <p>© 2025 YourCompany | All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

