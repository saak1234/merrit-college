// components/ApplicationDisplay.tsx
"use client";
import React, { useState } from "react";
import { Search,Loader } from "lucide-react";

interface ApplicationData {
    _id: string;
    firstName: string;
    lastName: string;
    parentName: string;
    email: string;
    phone: string;
    course: string;
    education: string;
    createdAt: string;
}

interface ApplicationDisplayProps {
    data?: ApplicationData[];
    isLoading?: boolean;
}

const ApplicationDisplay: React.FC<ApplicationDisplayProps> = ({ data = [], isLoading = false }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter(item =>
        item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-1 p-6 bg-gray-200 min-h-screen">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Application Forms</h1>
                <p className="text-gray-600">{filteredData.length} applications found</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex-1 min-w-[200px] max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name or email..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                {isLoading ? (
                    <div className="flex items-center justify-center h-64">
                        <Loader className="animate-spin text-green-600" size={40} />
                    </div>
                ) : (
                    <table className="w-full min-w-[800px]">
                        <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Name</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Parent Name</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Course</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Education</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {filteredData.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-800">
                                        {item.firstName} {item.lastName}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{item.parentName}</td>
                                <td className="px-6 py-4">
                                    <div className="text-gray-600">{item.email}</div>
                                    <div className="text-gray-500 text-sm">{item.phone}</div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{item.course}</td>
                                <td className="px-6 py-4 text-gray-600">{item.education}</td>
                                <td className="px-6 py-4 text-gray-600">
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ApplicationDisplay;
