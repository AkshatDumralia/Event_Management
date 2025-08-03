// src/pages/admin/AdminDashboard.jsx
import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { BarChart3, Users, CalendarDays, Bell } from 'lucide-react';

const stats = [
  { title: 'Total Events', value: 132, icon: <CalendarDays className="h-6 w-6 text-blue-500" /> },
  { title: 'Registered Users', value: 928, icon: <Users className="h-6 w-6 text-green-500" /> },
  { title: 'Active Colleges', value: 41, icon: <BarChart3 className="h-6 w-6 text-purple-500" /> },
  { title: 'Pending Approvals', value: 7, icon: <Bell className="h-6 w-6 text-red-500" /> },
];

const recentActivity = [
  { id: 1, action: 'New event "Hackathon 2025" created by IIT Bombay', time: '2 hours ago' },
  { id: 2, action: 'User "Rahul Sharma" registered', time: '4 hours ago' },
  { id: 3, action: 'Event "AI Summit" updated', time: '1 day ago' },
];

const initialPendingColleges = [
  { id: 1, name: 'KJ Somaiya College', appliedOn: '2025-07-30' },
  { id: 2, name: 'St. Xavier’s College', appliedOn: '2025-07-28' },
];

const AdminDashboard = () => {
  const [pendingColleges, setPendingColleges] = useState(initialPendingColleges);

  const handleApprove = (id) => {
    alert('College Approved');
    setPendingColleges(prev => prev.filter(college => college.id !== id));
  };

  const handleReject = (id) => {
    alert('College Rejected');
    setPendingColleges(prev => prev.filter(college => college.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <Card key={index} className="rounded-2xl shadow-md bg-white">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-3 bg-gray-100 rounded-full">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity & College Approvals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="rounded-2xl bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Recent Activity</h2>
            <ul className="space-y-3">
              {recentActivity.map(item => (
                <li key={item.id} className="text-sm text-gray-600 border-b pb-2">
                  {item.action}
                  <span className="block text-xs text-gray-400">{item.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* College Approvals */}
        <Card className="rounded-2xl bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Pending College Approvals</h2>
            {pendingColleges.length === 0 ? (
              <p className="text-gray-500 text-sm">No colleges pending approval.</p>
            ) : (
              <ul className="space-y-4">
                {pendingColleges.map(college => (
                  <li key={college.id} className="text-sm text-gray-700 border-b pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{college.name}</p>
                        <p className="text-xs text-gray-400">Applied on: {college.appliedOn}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 text-xs"
                          onClick={() => handleApprove(college.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 text-xs"
                          onClick={() => handleReject(college.id)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
