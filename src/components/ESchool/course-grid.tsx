"use client";

import { useState } from "react";
import Image from "next/image";

// Define the Course type
type Course = {
    id: number;
    code: string;
    title: string;
    grade: string;
    price: string;
    students: number;
    reviews: number;
    category: string;
    image: string;
};

// Course data
const courses: Course[] = [
    // Credit Courses
    {
        id: 1,
        code: "EWC4U",
        title: "Grade 12 The Writer's Craft English",
        grade: "GRADE 12",
        price: "from 0 CAD",
        students: 4,
        reviews: 0,
        category: "Credit Courses",
        image: "/courses.png",
    },
    {
        id: 2,
        code: "CHV20/GLC20",
        title: "Civics and Career Studies",
        grade: "GRADE 10",
        price: "3300 CAD",
        students: 1,
        reviews: 0,
        category: "Credit Courses",
        image: "/courses.png",
    },
    {
        id: 3,
        code: "SNC2D",
        title: "Science",
        grade: "GRADE 10",
        price: "3300 CAD",
        students: 4,
        reviews: 0,
        category: "Credit Courses",
        image: "/courses.png",
    },
    {
        id: 4,
        code: "ICS4U",
        title: "Computer Science",
        grade: "GRADE 12",
        price: "3300 CAD",
        students: 5,
        reviews: 0,
        category: "Credit Courses",
        image: "/courses.png",
    },
    {
        id: 5,
        code: "ENG4U",
        title: "English",
        grade: "GRADE 12",
        price: "3100 CAD",
        students: 6,
        reviews: 0,
        category: "Credit Courses",
        image: "/courses.png",
    },
    {
        id: 6,
        code: "MAT2L",
        title: "Mathematics",
        grade: "GRADE 10",
        price: "2900 CAD",
        students: 3,
        reviews: 1,
        category: "Credit Courses",
        image: "/courses.png",
    },
    {
        id: 7,
        code: "FSF1O",
        title: "Core French",
        grade: "GRADE 9",
        price: "1100 CAD",
        students: 1,
        reviews: 0,
        category: "Credit Courses",
        image: "/courses.png",
    },
    {
        id: 8,
        code: "CGC1D",
        title: "Canadian Geography",
        grade: "GRADE 9",
        price: "6600 CAD",
        students: 1,
        reviews: 0,
        category: "Credit Courses",
        image: "/courses.png",
    },

    // Tutoring Courses
    {
        id: 9,
        code: "EPS30",
        title: "Presentation and Speaking Skills",
        grade: "GRADE 9",
        price: "3300 CAD",
        students: 8,
        reviews: 0,
        category: "Tutoring Courses",
        image: "/courses.png",
    },
    {
        id: 10,
        code: "BIO11",
        title: "Biology",
        grade: "GRADE 11",
        price: "3400 CAD",
        students: 7,
        reviews: 2,
        category: "Tutoring Courses",
        image: "/courses.png",
    },
    {
        id: 11,
        code: "CHM20",
        title: "Chemistry",
        grade: "GRADE 12",
        price: "3500 CAD",
        students: 9,
        reviews: 3,
        category: "Tutoring Courses",
        image: "/courses.png",
    },
    {
        id: 12,
        code: "PHY12",
        title: "Physics",
        grade: "GRADE 12",
        price: "3400 CAD",
        students: 6,
        reviews: 1,
        category: "Tutoring Courses",
        image: "/courses.png",
    },
    {
        id: 13,
        code: "PSY20",
        title: "Psychology",
        grade: "GRADE 12",
        price: "3000 CAD",
        students: 4,
        reviews: 0,
        category: "Tutoring Courses",
        image: "/courses.png",
    },
    {
        id: 14,
        code: "ECO11",
        title: "Economics",
        grade: "GRADE 11",
        price: "3200 CAD",
        students: 5,
        reviews: 0,
        category: "Tutoring Courses",
        image: "/courses.png",
    },
    {
        id: 15,
        code: "HIS20",
        title: "History",
        grade: "GRADE 12",
        price: "3100 CAD",
        students: 3,
        reviews: 0,
        category: "Tutoring Courses",
        image: "/courses.png",
    },
    {
        id: 16,
        code: "GEO12",
        title: "Geography",
        grade: "GRADE 12",
        price: "3300 CAD",
        students: 7,
        reviews: 0,
        category: "Tutoring Courses",
        image: "/courses.png",
    },

    // Feature Courses
    {
        id: 17,
        code: "ART11",
        title: "Art and Design",
        grade: "GRADE 11",
        price: "2800 CAD",
        students: 6,
        reviews: 1,
        category: "Feature Courses",
        image: "/courses.png",
    },
    {
        id: 18,
        code: "MUS20",
        title: "Music",
        grade: "GRADE 12",
        price: "2700 CAD",
        students: 5,
        reviews: 0,
        category: "Feature Courses",
        image: "/courses.png",
    },
    {
        id: 19,
        code: "LIT11",
        title: "Literature",
        grade: "GRADE 11",
        price: "2900 CAD",
        students: 3,
        reviews: 1,
        category: "Feature Courses",
        image: "/courses.png",
    },
    {
        id: 20,
        code: "CS12",
        title: "Computer Science",
        grade: "GRADE 12",
        price: "3400 CAD",
        students: 10,
        reviews: 2,
        category: "Feature Courses",
        image: "/courses.png",
    },
    {
        id: 21,
        code: "DRM10",
        title: "Drama",
        grade: "GRADE 10",
        price: "2800 CAD",
        students: 4,
        reviews: 0,
        category: "Feature Courses",
        image: "/courses.png",
    },
    {
        id: 22,
        code: "HEA11",
        title: "Health Studies",
        grade: "GRADE 11",
        price: "3000 CAD",
        students: 5,
        reviews: 0,
        category: "Feature Courses",
        image: "/courses.png",
    },
    {
        id: 23,
        code: "BUS12",
        title: "Business Studies",
        grade: "GRADE 12",
        price: "3500 CAD",
        students: 8,
        reviews: 1,
        category: "Feature Courses",
        image: "/courses.png",
    },
    {
        id: 24,
        code: "PHI12",
        title: "Philosophy",
        grade: "GRADE 12",
        price: "3200 CAD",
        students: 4,
        reviews: 0,
        category: "Feature Courses",
        image: "/courses.png",
    },
];

// Tab options
const tabs = ["All Courses", "Credit Courses", "Tutoring Courses", "Feature Courses"];

// CourseCard Component
const CourseCard = ({ code, title, grade, price, students, reviews, image }: Course) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
        <div className="flex justify-center">
            <Image
                src={image}
                alt={title}
                width={200}
                height={150}
                className="rounded-md mb-4"
            />
        </div>
        <div className="text-center">
            <h3 className="text-xl font-bold text-green-900">{code}</h3>
            <p className="text-sm text-gray-600">{grade}</p>
            <p className="mt-2 text-gray-800">{title}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
            <span className="text-red-500 font-bold">{price}</span>
            <div className="text-sm text-gray-600">
                <span>{students} students</span> · <span>{reviews} reviews</span>
            </div>
        </div>
    </div>
);

// CourseGrid Component
const CourseGrid = () => {
    const [activeTab, setActiveTab] = useState<string>("All Courses");

    const filteredCourses =
        activeTab === "All Courses"
            ? courses
            : courses.filter((course) => course.category === activeTab);

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex justify-center space-x-4 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded-lg font-bold ${
                                activeTab === tab ? "bg-green-700 text-white" : "bg-gray-200 text-gray-800"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseGrid;
