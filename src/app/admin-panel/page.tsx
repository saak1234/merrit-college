"use client";

import { useState, useEffect } from "react";
import AdminSideBar from "@/components/AdminPanel/admin-side-bar";
import ApplicationDisplay from "@/components/AdminPanel/admin-application-display";
import ContactDisplay from "@/components/AdminPanel/admin-contact-display";
import BookTourDisplay from "@/components/AdminPanel/book-tour-display";
import InquiriesDisplay from "@/components/AdminPanel/admin-inquiries-display";
import ConsultationsDisplay from "@/components/AdminPanel/admin-consultations-display";
import ApPrepContactDisplay from "@/components/AdminPanel/admin-ap-prep-contact-display";
import BookYourConsultationsDisplay from "@/components/AdminPanel/admin-book-your-consultations-display";
const AdminPanel = () => {

    const useApplicationData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchApplications = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch("/api/application");
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchApplications();
        }, []);
        return { data, isLoading };
    };

    const useRoboContactData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        
        useEffect(() => {
            const fetchContacts = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch("/api/robotics-contact");
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchContacts();
        }, []);
        return { data, isLoading };
    };

    const useBookYourConsultationsData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchContacts = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch("/api/book-your-consultations");
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchContacts();
        }, []);
        return { data, isLoading };
    };

    const useBookTourData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchBookTour = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch("/api/book-tour");
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchBookTour();
        }, []);
        return { data, isLoading };
    };

    const useInquiriesData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchInquiries = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch("/api/inquiries");
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchInquiries();
        }, []);
        return { data, isLoading };
    };

    const useConsultationsData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchConsultations = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch("/api/consultations");
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchConsultations();
        }, []);
        return { data, isLoading };
    };

    const useApPrepContactData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchApPrepContact = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch("/api/ap-prep-contact");
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchApPrepContact();
        }, []);
        return { data, isLoading };
    };

    const [currentView, setCurrentView] = useState<'applications' | 'robotics-contacts' | 'book-tour' | 'inquiries' | 'consultations' | 'ap-prep-contact' | 'book-your-consultations'>('applications');

    const { data: applicationData, isLoading: isLoadingApplications } = useApplicationData();
    const { data: contactData, isLoading: isLoadingContacts } = useRoboContactData();
    const { data: bookTourData, isLoading: isLoadingBookTour } = useBookTourData();
    const { data: inquiriesData, isLoading: isLoadingInquiries } = useInquiriesData();
    const { data: consultationsData, isLoading: isLoadingConsultations } = useConsultationsData();
    const { data: apPrepContactData, isLoading: isLoadingApPrepContact } = useApPrepContactData();
    const { data: bookYourConsultationsData, isLoading: isLoadingBookYourConsultations } = useBookYourConsultationsData();


    return (
        <div className="flex min-h-screen">
            <AdminSideBar onNavigationChange={(view) => setCurrentView(view as 'applications' | 'robotics-contacts' | 'book-tour' | 'inquiries' | 'consultations' | 'ap-prep-contact' | 'book-your-consultations')} />

            {/* Content Display */}
            <div className="w-full">
                {currentView === 'applications' ? (
                    <ApplicationDisplay data={applicationData} isLoading={isLoadingApplications} />
                ) : currentView === 'robotics-contacts' ? (
                    <ContactDisplay data={contactData} isLoading={isLoadingContacts} />
                ) : currentView === 'book-tour' ? (
                    <BookTourDisplay data={bookTourData} isLoading={isLoadingBookTour} />
                ) : currentView === 'inquiries' ? (
                    <InquiriesDisplay data={inquiriesData} isLoading={isLoadingInquiries} />
                ) : currentView === 'consultations' ? (
                    <ConsultationsDisplay data={consultationsData} isLoading={isLoadingConsultations} />
                ) : currentView === 'ap-prep-contact' ? (
                    <ApPrepContactDisplay data={apPrepContactData} isLoading={isLoadingApPrepContact} />
                ) : currentView==='book-your-consultations'?(
                    <BookYourConsultationsDisplay data={bookYourConsultationsData} isLoading={isLoadingBookYourConsultations} />
                ):(
                    <div className="">
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
