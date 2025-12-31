import React from 'react'

function Dapartment() {
    // Simple dummy data for departments
    const departmentList = [
        { id: 101, name: "Computer Science", institute: "Tech Institute", HOD: "Dr. Alan Turing", rooms: 12 },
        { id: 102, name: "Mechanical Engineering", institute: "Tech Institute", HOD: "Dr. Nikola", rooms: 8 },
        { id: 103, name: "Business Administration", institute: "School of Management", HOD: "Prof. Sarah", rooms: 15 },
        { id: 104, name: "Civil Engineering", institute: "Tech Institute", HOD: "Dr. Wright", rooms: 10 },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Departments</h2>
                    <p className="text-sm text-gray-500">List of all academic departments</p>
                </div>
                <button className="bg-[#00AEEF] text-white px-5 py-2 rounded-lg font-bold hover:opacity-90">
                    + Add Department
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
                            <th className="p-4 font-semibold">Code</th>
                            <th className="p-4 font-semibold">Department Name</th>
                            <th className="p-4 font-semibold">Institute</th>
                            <th className="p-4 font-semibold">HOD</th>
                            <th className="p-4 font-semibold">Rooms</th>
                            <th className="p-4 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {departmentList.map((dept) => (
                            <tr key={dept.id} className="hover:bg-gray-50 transition">
                                <td className="p-4 text-gray-500 font-medium">#{dept.id}</td>
                                <td className="p-4 text-slate-800 font-bold">{dept.name}</td>
                                <td className="p-4 text-gray-600">{dept.institute}</td>
                                <td className="p-4 text-gray-600 font-medium">{dept.HOD}</td>
                                <td className="p-4 text-gray-600">{dept.rooms}</td>
                                <td className="p-4 text-center">
                                    <button className="text-blue-500 hover:underline mr-3 text-sm font-semibold">Edit</button>
                                    <button className="text-red-500 hover:underline text-sm font-semibold">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dapartment
