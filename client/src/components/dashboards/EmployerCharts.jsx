import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, LineChart, Line, AreaChart, Area,LabelList
} from 'recharts';



const EmployerCharts = () => {
  // Sample data
  const pieData = [
    { name: 'Shortlisted', value: 12 },
    { name: 'Pending', value: 5 },
    { name: 'Interviewed', value: 8 },
    { name: 'Rejected', value: 3 },
  ];
  const COLORS = ['#10B981', '#F59E0B', '#3B82F6', '#EF4444'];

  const barData = [
    { name: 'Mon', Applications: 5, Interviews: 2 },
    { name: 'Tue', Applications: 8, Interviews: 3 },
    { name: 'Wed', Applications: 6, Interviews: 1 },
    { name: 'Thu', Applications: 10, Interviews: 4 },
    { name: 'Fri', Applications: 3, Interviews: 1 },
    { name: 'Sat', Applications: 7, Interviews: 2 },
    { name: 'Sun', Applications: 4, Interviews: 1 },
  ];

  const jobsAppsData = [
    { name: 'April', JobsPosted: 14, AppsReceived: 20 },
    { name: 'May', JobsPosted: 19, AppsReceived: 43 },
    { name: 'June', JobsPosted: 16, AppsReceived: 24 },
    { name: 'July', JobsPosted: 12, AppsReceived: 15 },
    { name: 'Aug', JobsPosted: 18, AppsReceived: 30 },
    { name: 'Sept', JobsPosted: 15, AppsReceived: 35 },
  ];

  return (
    <main className=" bg-gray-50">
      <div className="p-6 overflow-y-auto h-[calc(100vh-4rem)]">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500">Welcome back. Here's what's happening with your job postings today.</p>
        </div>
        
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard 
            title="Active Jobs" 
            value="12" 
            change="+3 (30%)" 
            isUp={true}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>}
          />
          
          <StatCard 
            title="Total Applicants" 
            value="254" 
            change="+21 (9%)" 
            isUp={true}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>}
          />
          
          <StatCard 
            title="Interviews Scheduled" 
            value="18" 
            change="-4 (18%)" 
            isUp={false}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>}
          />
          
          <StatCard 
            title="Positions Filled" 
            value="5" 
            change="+2 (67%)" 
            isUp={true}
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
          />
        </div>
        
        {/* Middle Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Jobs Posted & Apps Received</h3>
              <div className="flex items-center">
                <button className="mr-2 text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span> YOY
                </button>
                <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">View Detail</button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={jobsAppsData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" fontSize={12} />
                <YAxis stroke="#888" fontSize={12} />
                <Tooltip formatter={(value, name) => {
                  return name === 'JobsPosted'
                    ? [`Posted ${value}`, 'Jobs Posted']
                    : [`${value}`, 'Apps Received'];
            }} />
                <Bar dataKey="JobsPosted" fill="#F28C82" radius={[4, 4, 0, 0]} barSize={20}>
                  <Tooltip formatter={(value) => [`${value} Posted`, null]} />
                </Bar>
                <Bar dataKey="AppsReceived" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={20}>
                  <LabelList dataKey="AppsReceived" position="top" formatter={(value) => value} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Applicants by Status</h3>
              <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">View All</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} Applicants`, null]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="col-span-2">
                <div className="h-full flex flex-col justify-center">
                  {pieData.map((item, index) => (
                    <div key={item.name} className="flex items-center mb-3">
                      <div className="h-3 w-3 rounded-full mr-2" style={{backgroundColor: COLORS[index % COLORS.length]}}></div>
                      <div className="flex-1 text-sm text-gray-700">{item.name}</div>
                      <div className="text-sm font-medium">{item.value}</div>
                      <div className="text-xs text-gray-500 ml-2">({((item.value / pieData.reduce((acc, curr) => acc + curr.value, 0)) * 100).toFixed(0)}%)</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Applications Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Recent Applications</h3>
            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Applied
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { id: 1, name: "Michael Johnson", position: "Senior Developer", date: "May 4, 2025", status: "Pending" },
                  { id: 2, name: "Sarah Williams", position: "UX Designer", date: "May 3, 2025", status: "Shortlisted" },
                  { id: 3, name: "David Brown", position: "Project Manager", date: "May 2, 2025", status: "Interviewed" },
                  { id: 4, name: "Emma Davis", position: "Marketing Specialist", date: "May 1, 2025", status: "Rejected" },
                  { id: 5, name: "James Wilson", position: "Data Analyst", date: "Apr 30, 2025", status: "Pending" }
                ].map((application) => (
                  <tr key={application.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
                          {application.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{application.name}</div>
                          <div className="text-sm text-gray-500">applicant{application.id}@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{application.position}</div>
                      <div className="text-sm text-gray-500">Full-time</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${application.status === 'Shortlisted' ? 'bg-green-100 text-green-800' : 
                          application.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          application.status === 'Interviewed' ? 'bg-blue-100 text-blue-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Schedule</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, isUp, icon }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="ml-5">
        <p className="text-gray-500 text-sm font-medium truncate">{title}</p>
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <p className={`ml-2 flex items-baseline text-sm font-semibold ${isUp ? 'text-green-600' : 'text-red-600'}`}>
            {isUp ? (
              <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="self-center flex-shrink-0 h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
            <span className="sr-only">{isUp ? 'Increased' : 'Decreased'} by</span>
            {change}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default EmployerCharts;