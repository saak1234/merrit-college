"use client";

import {useState, useRef, useCallback} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {Menu, X, ChevronDown, Languages} from "lucide-react";
import Sidebar from "./landing-sidebar";
import { useTranslation } from 'react-i18next';

type MenuLink = {
    name: string;
    href: string;
};

type MenuCategory = {
    name: string;
    links: MenuLink[];
};

const Header = () => {
    const { t, i18n} = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

    const menuCategories: MenuCategory[] = [
        {
            name: t("header.admission"),
            links: [
                { name: t("header.fullTimeApplication"), href: "/admission/application" },
                { name: t("header.scholarship"), href: "/admission/scholarship" },
                { name: t("header.bookTour"), href: "/admission/book-tour" },
                { name: t("header.consultation"), href: "/admission/consultation" },
            ],
        },
        {
            name: t("header.internationalStudent"),
            links: [
                { name: t("header.visaApplication"), href: "/international/visa" },
                { name: t("header.homestay"), href: "/international/homestay" },
                { name: t("header.studyInCanada"), href: "/international/study-in-canada" },
                { name: t("header.torontoSurroundings"), href: "/international/toronto-surroundings" },
            ],
        },
        {
            name: t("header.academicProgram"),
            links: [
                { name: t("header.secondarySchool"), href: "/programs/secondary-school" },
                { name: t("header.tutoring"), href: "/programs/tutoring" },
                { name: t("header.counseling"), href: "/programs/student-counseling" },
                { name: t("header.summerCamp"), href: "/programs/summer-camp" },
                { name: t("header.leadershipProgram"), href: "/programs/leadership" },
                { name: t("header.roboticsAI"), href: "/programs/robotics-ai" },
            ],
        },
        {
            name: t("header.studentLife"),
            links: [
                { name: t("header.studentCouncil"), href: "/students/student-council" },
                { name: t("header.activitySchedule"), href: "/students/activity-schedule" },
                { name: t("header.clubs"), href: "/students/clubs" },
                { name: t("header.charityGala"), href: "/students/mecgfu" },
            ],
        },
        {
            name: t("header.others"),
            links: [
                { name: t("header.aboutMerit"), href: "/menu/about" },
                { name: t("header.apCourse"), href: "/menu/ap-course" },
                { name: t("header.apPrep"), href: "/menu/ap-prep" },
                { name: t("header.techSchool"), href: "/menu/tech-school" },
                { name: t("header.studentLife"), href: "/menu/student-life" },
                { name: t("header.learning"), href: "/menu/learning" },
                { name: t("header.eSchool"), href: "/menu/e-school" },
            ],
        },
    ];

    const handleMouseEnter = useCallback((menu: string) => {
        if (dropdownTimerRef.current) {
            clearTimeout(dropdownTimerRef.current);
        }
        setDropdownOpen(menu);
    }, []);

    const handleMouseLeave = useCallback(() => {
        dropdownTimerRef.current = setTimeout(() => {
            setDropdownOpen(null);
        }, 400);
    }, []);

    const handleDropdownMouseEnter = useCallback(() => {
        if (dropdownTimerRef.current) {
            clearTimeout(dropdownTimerRef.current);
        }
    }, []);

    return (
        <header className="bg-green-shade text-white shadow-md flex items-center" onClick={()=>setLanguageDropdownOpen(false)}>
            <div className="container mx-auto flex justify-between items-center p-6">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/mc_logo.png"
                        alt="Merit College Logo"
                        width={290}
                        height={290}
                        priority
                    />
                </Link>

                <nav className="hidden lg:flex items-center space-x-6">
                    {menuCategories.map((menu) => (
                        <div
                            key={menu.name}
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter(menu.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="hover:text-green-600 transition-colors duration-200">
                                <div className="flex items-center space-x-2">
                                    {menu.name}
                                    <ChevronDown/>
                                </div>
                            </button>
                            {dropdownOpen === menu.name && (
                                <motion.div
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -10}}
                                    onMouseEnter={handleDropdownMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg p-4 space-y-2 min-w-[200px] z-50"
                                >
                                    {menu.links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="block py-2 hover:text-green-600 hover:bg-green-50 px-2 rounded-md transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}

                    {/* <Link
                        href="/admin-panel"
                        className="bg-black px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                        Login
                    </Link> */}

                    <div className="relative ml-4">
                        <button 
                            onClick={(e) =>
                                {e.stopPropagation();
                                 setLanguageDropdownOpen(!languageDropdownOpen)}}
                            
                            className="px-4 py-2 text-white rounded-lg hover:text-green-600 transition flex items-center"
                        >
                            <Languages className="mr-2"/>
                            Language <ChevronDown className="w-6 h-6"/>
                        </button>

                        {languageDropdownOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full right-0 mt-2 bg-white text-black rounded-lg shadow-lg p-2 min-w-[120px] z-50"
                            >
                                <button 
                                    onClick={() => {
                                        i18n.changeLanguage('en');
                                        setLanguageDropdownOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-green-50 hover:text-green-600 rounded-md"
                                >
                                    English
                                </button>
                                <button 
                                    onClick={() => {
                                        i18n.changeLanguage('ch');
                                        setLanguageDropdownOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-green-50 hover:text-green-600 rounded-md"
                                >
                                    中文
                                </button>
                            </motion.div>
                        )}
                    </div>
                </nav>

                <button
                    className="lg:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                </button>
            </div>

            {menuOpen && (
                <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: "auto", opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    className="lg:hidden bg-green-800 text-white"
                >
                    <div className="flex flex-col space-y-4 p-4">
                        {menuCategories.map((menu) => (
                            <div key={menu.name} className="relative">
                                <button
                                    onClick={() => setDropdownOpen(dropdownOpen === menu.name ? null : menu.name)}
                                    className="block w-full text-left hover:text-green-300 transition-colors duration-200"
                                >
                                    {menu.name}
                                </button>
                                {dropdownOpen === menu.name && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {menu.links.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="block py-2 hover:text-green-500 hover:bg-green-700 px-2 rounded-md transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        
                    </div>
                </motion.div>
            )}
            <Sidebar/>
        </header>
    );
};

export default Header;
