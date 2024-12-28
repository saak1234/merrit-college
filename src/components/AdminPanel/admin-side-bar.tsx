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
                bg-gradient-to-b from-green-800 to-green-700
                transition-all duration-300 ease-in-out
                shadow-xl
                ${isMobileMenuOpen ? 'left-0' : '-left-full lg:left-0'}
                z-40
            `}>
                <div className="h-full flex flex-col p-6">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Admin Dashboard
                    </h2>
                    <nav className="space-y-4 flex-grow">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className={`
                                    w-full px-6 py-3 rounded-lg
                                    flex items-center gap-3
                                    text-lg font-medium
                                    transition-all duration-300 ease-in-out
                                    relative overflow-hidden
                                    ${activeView === item.id
                                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white scale-105 shadow-lg transform -translate-y-0.5'
                                    : 'bg-green-700/50 text-gray-200 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 hover:text-white hover:shadow-md hover:scale-102'}
                                    backdrop-blur-sm
                                    border border-white/10
                                    group
                                `}
                            >
                                <span className={`
                                    transition-transform duration-300
                                    group-hover:scale-110
                                    ${activeView === item.id ? 'scale-110' : ''}
                                `}>
                                    {React.cloneElement(item.icon, {
                                        size: 20,
                                        className: "transition-all duration-300 group-hover:stroke-2"
                                    })}
                                </span>
                                <span className="transition-all duration-300 group-hover:font-semibold">
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={handleLogout}
                        className="w-full px-6 py-3 mt-4 rounded-lg
                            flex items-center gap-3
                            text-lg font-medium
                            bg-green-600/50 text-gray-200
                            border-green-700 shadow-lg transform -translate-y-0.5
                            hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 hover:text-white hover:shadow-md hover:scale-102
                            transition-all duration-300
                            "
                    >
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default AdminSideBar;
