import React from 'react'

function Events() {

    const eventsList = [
        { id: 1, title: "Tech Symposium 2025", date: "Dec 25, 2025", location: "Main Hall", status: "Upcoming" },
        { id: 2, title: "Annual Sports Meet", date: "Nov 10, 2025", location: "Sports Complex", status: "Completed" },
        { id: 3, title: "AI Workshop", date: "Jan 15, 2026", location: "Lab 4", status: "Upcoming" },
        { id: 4, title: "Cultural Night", date: "Oct 20, 2025", location: "Open Theater", status: "Completed" },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header Section */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Events</h2>
                    <p className="text-sm text-gray-500">Manage and schedule institute events</p>
                </div>
                <button className="bg-[#00AEEF] text-white px-5 py-2 rounded-lg font-bold hover:opacity-90">
                    + Create Event
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
                            <th className="p-4 font-semibold">Event Title</th>
                            <th className="p-4 font-semibold">Date</th>
                            <th className="p-4 font-semibold">Location</th>
                            <th className="p-4 font-semibold">Status</th>
                            <th className="p-4 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {eventsList.map((event) => (
                            <tr key={event.id} className="hover:bg-gray-50 transition">
                                <td className="p-4 text-slate-800 font-bold">{event.title}</td>
                                <td className="p-4 text-gray-600">{event.date}</td>
                                <td className="p-4 text-gray-600">{event.location}</td>
                                <td className="p-4">
                                    {/* Logic-free status badge styling */}
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${event.status === 'Upcoming'
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'bg-green-100 text-green-600'
                                        }`}>
                                        {event.status}
                                    </span>
                                </td>
                                <td className="p-4 text-center">
                                    <button className="text-gray-400 hover:text-blue-500 mr-3">Edit</button>
                                    <button className="text-gray-400 hover:text-red-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Events
