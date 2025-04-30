import React , {useState} from 'react'
import { ArrowRight } from 'lucide-react';

const TABS = ['Skills', 'Location', 'Industry', 'Functions', 'Roles', 'Company'];
const JOB_TAGS = {
  Skills: [
    'Python', 'Sql', 'Java', 'AWS', 'Javascript', 'Excel', 'Git', 'Azure',
    'Docker', 'Kubernetes', 'Data Analysis', 'Sales', 'Ms Office', 'HTML',
    'CSS', 'Project Management', 'Linux', 'Jenkins', 'Gcp', 'React',
  ],
  Location:  [
    "Bengaluru / Bangalore",
    "Hyderabad / Secunderabad, Telangana",
    "Mumbai",
    "Pune",
    "Chennai",
    "Gurgaon / Gurugram",
    "Noida",
    "Delhi",
    "Gurugram",
    "Ahmedabad",
    "Kolkata",
    "Navi Mumbai",
    "Jaipur",
    "Mumbai City",
    "Cochin / Kochi / Ernakulam",
    "Coimbatore",
    "Indore",
    "Thane",
    "Vadodara",
    "Delhi NCR"
  ],
  Industry: [
    "IT/Computers - Software",
    "Software",
    "Information Technology",
    "Banking/Accounting/Financial Services",
    "Consulting",
    "IT/Computers - Hardware & Networking",
    "Insurance",
    "Financial Services",
    "Banking",
    "Information Services",
    "Real Estate",
    "Manufacturing",
    "Software Engineering",
    "IT Management",
    "Recruiting",
    "Semiconductor Manufacturing",
    "Pharmaceutical",
    "Health Care",
    "Machinery Manufacturing",
    "BPO"
  ],
  Functions:  [
    "IT",
    "Sales/Business Development",
    "Human Resources",
    "Finance",
    "Banking",
    "Software Development",
    "Information Technology",
    "Technology",
    "Technology Services And Consulting",
    "Sales",
    "Healthcare",
    "Financial Services",
    "Finance & Accounts",
    "Professional Services",
    "Software Engineering",
    "Education",
    "Customer Service/Call Centre/BPO",
    "Engineering",
    "Marketing",
    "Manufacturing/Engineering/R&D"
  ],
  Roles: [
    "Software Engineer/Programmer",
    "Fresher",
    "Team Leader/Technical Leader",
    "Systems Engineer",
    "Sales Exec/Sales Representative",
    "Software Developer",
    "Business Analyst",
    "Customer Service Executive (Voice)",
    "System Analyst/Tech Architect",
    "Business Development Manager",
    "Software Test Engineer",
    "Project Leader/Project Manager",
    "Business Development Executive",
    "HR Executive/Recruiter",
    "Data Analyst",
    "Consultant",
    "Customer Service Executive (Non-voice)",
    "ERP/CRM - Technical Consultant"
  ],
  Company: [
    "Wipro Limited",
    "Genpact",
    "Robotics Technologies",
    "ZUS",
    "People Prime Worldwide Private Limited",
    "Kotak Mahindra Bank Limited",
    "Oracle",
    "Capgemini",
    "Deutsche Bank",
    "Infosys Limited",
    "JP Morgan Chase & Co.",
    "Uplers",
    "PwC India",
    "Ifintalent Global Private Limited",
    "HSBC",
    "Tata Consultancy Services Limited",
    "KPMG India",
    "Amazon Development Centre (India) Private Limited",
    "Google Inc"
  ],
};

function JobVacancyTabs() {

  const [activeTab, setActiveTab] = useState('Skills');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8 w-full max-w-6xl mx-auto my-10">
      {/* Heading */}
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
        Find job vacancies by
      </h2>

      {/* Tabs */}
      <div className="flex items-center space-x-6 border-b border-gray-200 mb-4 overflow-x-auto hide-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 text-sm md:text-base whitespace-nowrap ${activeTab === tab
                ? 'text-purple-700 font-semibold after:content-[""] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[2px] after:bg-purple-700'
                : 'text-gray-500 hover:text-purple-600'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tag list */}
      <div className="flex flex-wrap gap-3">
        {JOB_TAGS[activeTab]?.length > 0 ? (
          JOB_TAGS[activeTab].map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-800 bg-white"
            >
              {tag}
            </span>
          ))
        ) : (
          <p className="text-gray-400 text-sm italic">No data for this tab.</p>
        )}
      </div>

      {/* CTA Footer */}
      {activeTab === 'Skills' && (
        <div className="mt-6">
          <button className="flex items-center text-sm text-purple-700 font-medium hover:underline">
            View all jobs by Skills
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      )}
    </div>

  )
}

export default JobVacancyTabs