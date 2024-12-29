"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    FileText,
    MessageSquare,
    Menu,
    X,
    LogOut
} from "lucide-react";
import GlobalButton from "../ui/global-button";

interface AdminSideBarProps {
    onNavigationChange: (view: string) => void;
}

const AdminSideBar: React.FC<AdminSideBarProps> = ({ onNavigationChange }) => {
    const router = useRouter();
    const [activeView, setActiveView] = useState<string>('applications');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { id: 'applications', label: 'Application Forms', icon: <FileText /> },
        { id: 'contacts', label: 'Contact Forms', icon: <MessageSquare /> },
    ];

    const handleNavigation = (view: string): void => {
        setActiveView(view);
        onNavigationChange(view);
        setIsMobileMenuOpen(false);
    };

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <aside className={`
                fixed lg:static
                w-[280px] h-screen
                bg-white
                transition-all duration-300 ease-in-out
                shadow-xl
                ${isMobileMenuOpen ? 'left-0' : '-left-full lg:left-0'}
                z-40
            `}>
                <div className="flex flex-col h-full">
                    {/* Green Header Section */}
                    <div className="bg-gradient-to-b from-green-800 to-green-700 p-6">
                        <h2 className="text-2xl font-bold text-white text-center">
                            Admin Dashboard
                        </h2>
                    </div>

                    {/* White Content Section */}
                    <div className="p-6 flex-grow">
                        <nav className="space-y-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigation(item.id)}
                                    className={`
                                        w-full px-6 py-3 rounded-lg
                                        flex items-center gap-3
                                        text-lg font-medium
                                        transition-all duration-300 ease-in-out
                                        ${activeView === item.id
                                        ? 'bg-green-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-green-50'}
                                    `}
                                >
                                    <span className="transition-transform duration-300">
                                        {React.cloneElement(item.icon, {
                                            size: 20,
                                            className: activeView === item.id ? "text-white" : "text-gray-600"
                                        })}
                                    </span>
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>

                        <button
                            onClick={handleLogout}
                            className="w-full px-6 py-3 mt-4 rounded-lg
                                flex items-center gap-3
                                text-lg font-medium
                                bg-red-50 text-red-600
                                hover:bg-red-100
                                transition-all duration-300
                            "
                        >
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default AdminSideBar;
