"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, GitBranch, Calendar, MessageSquare, Search, Phone, Book, Menu, X, LogOut } from "lucide-react";

interface AdminSideBarProps {
    onNavigationChange: (view: string) => void;
}

const AdminSideBar: React.FC<AdminSideBarProps> = ({ onNavigationChange }) => {
    const router = useRouter();
    const [activeView, setActiveView] = useState<string>('applications');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { id: 'applications', label: 'Application Forms', icon: <FileText /> },
        { id: 'robotics-contacts', label: 'Robotics-Contact Forms', icon: <GitBranch/> },
        { id: 'book-tour', label: 'Book-Tour Forms', icon: <Calendar /> },
        { id: 'consultations', label: 'Consultations Forms', icon: <MessageSquare /> },
        { id: 'inquiries', label: 'Inquiries Forms', icon: <Search/> },
        { id: 'ap-prep-contact', label: 'Ap-Contact Forms', icon: <Phone /> },
        { id: 'book-your-consultations', label: 'Book-Your-Consultations Forms', icon: <Book/> },
    ];

    const handleNavigation = (view: string): void => {
        setActiveView(view);
        onNavigationChange(view);
        setIsMobileMenuOpen(false);
    };

    const handleLogout = () => {
        router.push('/');
    };

    const getTextClass = (text: string) => {
        if (text.length > 25) return 'text-sm';
        if (text.length > 20) return 'text-base';
        return 'text-md';
    };

    return (
        <>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <aside className={`
                fixed lg:static
                w-[300px] h-screen
                bg-white
                transition-all duration-300 ease-in-out
                shadow-xl
                font-poppins
                ${isMobileMenuOpen ? 'left-0' : '-left-full lg:left-0'}
                z-40
            `}>
                <div className="flex flex-col h-full">
                    <div className="bg-gradient-to-b from-green-800 to-green-700 p-4">
                        <h2 className="text-lg font-semibold text-white text-center">
                            Admin Dashboard
                        </h2>
                    </div>

                    <div className="flex-grow overflow-y-auto p-4">
                        <nav className="flex flex-col gap-2">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigation(item.id)}
                                    className={`
                                        w-full px-4 py-2.5 rounded-lg
                                        flex items-center gap-3
                                        transition-all duration-300 ease-in-out
                                        text-left
                                        ${activeView === item.id
                                            ? 'bg-green-100 text-black'
                                            : 'text-gray-700 hover:bg-green-50'
                                        }
                                    `}
                                >
                                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                        {React.cloneElement(item.icon, {
                                            size: 16,
                                            className: activeView === item.id ? "text-black" : "text-gray-600"
                                        })}
                                    </span>
                                    <span className={`truncate ${getTextClass(item.label)}`}>
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="p-4 border-t border-gray-200">
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2.5 rounded-lg
                                flex items-center gap-3
                                bg-red-50 text-red-600
                                hover:bg-red-100
                                transition-all duration-300
                                text-left
                            "
                        >
                            <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                <LogOut size={16} />
                            </span>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default AdminSideBar;
