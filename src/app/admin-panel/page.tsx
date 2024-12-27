"use client"
import {useState,useEffect} from "react";
import AdminSideBar from "@/components/AdminPanel/admin-side-bar";
import ApplicationDisplay from '@/components/AdminPanel/application-display';
import ContactDisplay from '@/components/AdminPanel/contact-display';
const AdminPanel = () => {
    const useApplicationData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchApplications = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch('/api/application');
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.error(err);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchApplications();
        }, []);
        return { data, isLoading};
    };

    const useContactData = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchContacts = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetch('/api/contact');
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

        return { data, isLoading};
    };

    const [currentView, setCurrentView] = useState<'applications' | 'contacts'>('applications');
    const { data: applicationData, isLoading: isLoadingApplications } = useApplicationData();
    const { data: contactData, isLoading: isLoadingContacts } = useContactData();
    return (
        <div className="flex min-h-screen">
            <AdminSideBar onNavigationChange={(view) => setCurrentView(view as 'applications' | 'contacts')}/>
            {currentView === 'applications' ? (
                <ApplicationDisplay data={applicationData} isLoading={isLoadingApplications}/>
            ) : (
                <ContactDisplay data={contactData} isLoading={isLoadingContacts}/>
            )}
        </div>
    );
};

export default AdminPanel;
