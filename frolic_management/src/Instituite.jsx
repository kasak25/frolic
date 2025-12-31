import React from 'react'

function Instituite() {
    const institutesList = [
        { id: "01", name: "Institute of Technology", location: "Block A", head: "Dr. Aris", contact: "+12345678" },
        { id: "02", name: "School of Management", location: "Block B", head: "Prof. Sarah", contact: "+12345679" },
        { id: "03", name: "Academy of Fine Arts", location: "North Wing", head: "Mr. Julian", contact: "+12345680" },
        { id: "04", name: "Medical College", location: "East Campus", head: "Dr. Miller", contact: "+12345681" },
    ];
    return (
        <>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header Section */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Institutes</h2>
                        <p className="text-sm text-gray-500">View and manage all registered institutes</p>
                    </div>
                    <button className="bg-[#00AEEF] text-white px-5 py-2 rounded-lg font-bold hover:opacity-90 transition">
                        + Add New
                    </button>
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
                                <th className="p-4 font-semibold">ID</th>
                                <th className="p-4 font-semibold">Institute Name</th>
                                <th className="p-4 font-semibold">Location</th>
                                <th className="p-4 font-semibold">Director/Head</th>
                                <th className="p-4 font-semibold">Contact</th>
                                <th className="p-4 font-semibold text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {institutesList.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition">
                                    <td className="p-4 text-gray-500 font-medium">{item.id}</td>
                                    <td className="p-4 text-slate-800 font-bold">{item.name}</td>
                                    <td className="p-4 text-gray-600 italic">{item.location}</td>
                                    <td className="p-4 text-gray-600">{item.head}</td>
                                    <td className="p-4 text-gray-600">{item.contact}</td>
                                    <td className="p-4 text-center">
                                        <button className="text-blue-500 font-semibold hover:underline mr-4">Edit</button>
                                        <button className="text-red-500 font-semibold hover:underline">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Instituite
