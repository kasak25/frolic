import React from 'react';

const Dashboard = () => {
  // Dummy data for stats
  const stats = [
    { label: 'Total Institutes', value: '12', color: 'bg-blue-500' },
    { label: 'Total Departments', value: '48', color: 'bg-green-500' },
    { label: 'Upcoming Events', value: '5', color: 'bg-purple-500' },
    { label: 'Active Students', value: '1,250', color: 'bg-orange-500' },
  ];

  const recentEvents = [
    { id: 1, name: 'Tech Symposium 2024', date: 'Oct 25', status: 'Upcoming' },
    { id: 2, name: 'Annual Sports Meet', date: 'Oct 12', status: 'Completed' },
    { id: 3, name: 'Guest Lecture: AI/ML', date: 'Oct 30', status: 'Upcoming' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Admin! Here is what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <div className={`h-1 w-12 mt-4 rounded ${stat.color}`}></div>
          </div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Events Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Overview: Events</h2>
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                <div>
                  <p className="font-semibold text-gray-700">{event.name}</p>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  event.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System Message/Action Card */}
        <div className="bg-blue-600 p-6 rounded-xl shadow-sm text-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Manage Data</h2>
          <p className="opacity-90 mb-6">Need to update information? Use the sidebar to navigate to specific sections for Institutes and Departments.</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg w-fit hover:bg-blue-50 transition">
            Add New Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;