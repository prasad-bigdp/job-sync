import React, { useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Briefcase, FileText, Bookmark, Eye } from 'lucide-react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const barData = [
  { name: "Jan", jobs: 10 },
  { name: "Feb", jobs: 20 },
  { name: "Mar", jobs: 15 },
  { name: "Apr", jobs: 30 },
];

const pieData = [
  { name: "Applied", value: 60 },
  { name: "Saved", value: 25 },
  { name: "Interview", value: 15 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-6 space-y-8 bg-gray-100 min-h-screen ">
      {/* Dashboard Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Jobs" value="120" icon={<Briefcase className="text-blue-500 w-6 h-6" />} bgColor="bg-blue-100" />
        <Card title="Applications" value="42" icon={<FileText className="text-green-500 w-6 h-6" />} bgColor="bg-green-100" />
        <Card title="Saved Jobs" value="18" icon={<Bookmark className="text-yellow-500 w-6 h-6" />} bgColor="bg-yellow-100" />
        <Card title="Profile Views" value="77" icon={<Eye className="text-purple-500 w-6 h-6" />} bgColor="bg-purple-100" />
      </section>

      {/* Charts and Sidebar */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-8 xl:col-span-2">
          <ChartCard title="Monthly Applications">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jobs" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Job Status">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Resume Upload Status">
            <p className="mt-2 text-gray-700">You have uploaded your resume.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View / Update Resume
            </button>
          </ChartCard>
        </div>

        {/* Sidebar Section */}
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          <SidebarSection title="Recommended Jobs">
            <li>Frontend Developer at ABC Corp</li>
            <li>React Developer at XYZ Ltd</li>
            <li>Software Engineer at DEF Inc</li>
          </SidebarSection>

          <SidebarSection title="Notifications">
            <li>New jobs matching your profile</li>
            <li>Interview with XYZ Ltd on May 15</li>
            <li>Message from recruiter: ABC Corp</li>
          </SidebarSection>

          <SidebarSection title="Recent Activity">
            <li>Applied to UI Developer at TechSoft</li>
            <li>Saved Backend Engineer at DevFirm</li>
          </SidebarSection>
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component for metrics
const Card = ({ title, value, icon, bgColor }) => (
  <div className="bg-white p-5 rounded-xl shadow-md flex items-center justify-between hover:shadow-lg transition">
    <div>
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
    <div className={`${bgColor} p-3 rounded-full`}>
      {icon}
    </div>
  </div>
);

// Reusable Chart Card
const ChartCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

// Reusable Sidebar Section
const SidebarSection = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
      {children}
    </ul>
  </div>
);