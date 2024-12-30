"use client";
import React, { useState, useMemo } from "react";
import { Search, Loader, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface InquiryData {
    _id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    createdAt: string;
}

interface InquiriesDisplayProps {
    data?: InquiryData[];
    isLoading?: boolean;
}

const InquiriesDisplay: React.FC<InquiriesDisplayProps> = ({ data = [], isLoading = false }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState<"name" | "phone" | "message">("name");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const filteredData = useMemo(() => {
        return data.filter(item => {
            const searchLower = searchTerm.toLowerCase();
            switch (filterType) {
                case "name":
                    return item.name.toLowerCase().includes(searchLower);
                case "phone":
                    return item.phone.includes(searchTerm);
                case "message":
                    return item.message.toLowerCase().includes(searchLower);
                default:
                    return true;
            }
        });
    }, [data, searchTerm, filterType]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="flex-1 w-full min-h-screen bg-secondary-green">
            <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
                {/* Header Section */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Forms</h1>
                    <p className="text-gray-600 text-sm">
                        Showing {paginatedData.length} of {filteredData.length} inquiries
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder={`Search by ${filterType}...`}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="text-gray-400" size={20} />
                            <select
                                className="px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-white"
                                onChange={(e) => setFilterType(e.target.value as "name" | "phone" | "message")}
                                value={filterType}
                            >
                                <option value="name">Filter by Name</option>
                                <option value="phone">Filter by Phone</option>
                                <option value="message">Filter by Message</option>
                            </select>
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
                                    {paginatedData.map((item) => (
                                        <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-800">{item.name}</div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                <div className="text-gray-600">{item.email}</div>
                                                <div className="text-gray-500 text-sm">{item.phone}</div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{item.message}</td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-4 py-2 rounded-lg transition-colors ${
                                            currentPage === page
                                                ? "bg-green-600 text-white"
                                                : "hover:bg-gray-100 text-gray-600"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <div className="text-sm text-gray-600">
                            Page {currentPage} of {totalPages}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InquiriesDisplay;
