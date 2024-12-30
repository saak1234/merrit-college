// components/ContactDisplay.tsx
"use client";
import React, { useState } from "react";
import { Search, Loader } from "lucide-react";

interface ContactData {
    _id: string;
    name: string;
    email: string;
    phone: string;
    additional: string;
    createdAt: string;
}

interface ContactDisplayProps {
    data?: ContactData[];
    isLoading?: boolean;
}

const BookYourConsultationsDisplay:React.FC<ContactDisplayProps> = ({ data = [], isLoading = false }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-1 p-6 bg-secondary-green min-h-screen">
            <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
                {/* Header Section */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Book Your Consultations Forms</h1>
                    <p className="text-gray-600 text-sm">{filteredData.length} messages found</p>
                </div>

                {/* Search Section */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by name or email..."
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-64">
                            <Loader className="animate-spin text-green-600" size={40} />
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Name</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Contact</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Message</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredData.map((item) => (
                                        <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-800">{item.name}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-gray-600">{item.email}</div>
                                                <div className="text-gray-500 text-sm">{item.phone}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-gray-600 max-w-md truncate">
                                                    {item.additional}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookYourConsultationsDisplay;
