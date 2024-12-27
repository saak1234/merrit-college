const Footer = () => {
    return (
        <footer className="bg-green-shade text-white">
            <div className="container mx-auto py-10 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Logo and Description */}
                    <div>
                        <img
                            src="https://meritedu.ca/istoreContent/client/company/meriteducation/images/common/logopng.png"
                            alt="Merit College Logo"
                            className="mb-4"
                        />
                        <p className="text-gray-300">
                            MeritUniversity was established by J.H Merthon in 1810
                            for the public benefit. Afterwards, it is recognized globally.
                        </p>
                        <p className="mt-4">
                            <span className="block">+01-9876-5556-7685</span>
                            <span className="block">[email protected]</span>
                        </p>
                    </div>

                    {/* Campus Life Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Campus Life</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-green-300">Accessibility</a></li>
                            <li><a href="#" className="hover:text-green-300">Financial Aid</a></li>
                            <li><a href="#" className="hover:text-green-300">Food Services</a></li>
                            <li><a href="#" className="hover:text-green-300">Housing</a></li>
                            <li><a href="#" className="hover:text-green-300">Information Technologies</a></li>
                            <li><a href="#" className="hover:text-green-300">Student Life</a></li>
                        </ul>
                    </div>

                    {/* Our Campus Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Our Campus</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-green-300">Academic</a></li>
                            <li><a href="#" className="hover:text-green-300">Planning & Administration</a></li>
                            <li><a href="#" className="hover:text-green-300">Campus Safety</a></li>
                            <li><a href="#" className="hover:text-green-300">Office of the Chancellor</a></li>
                            <li><a href="#" className="hover:text-green-300">Facility Services</a></li>
                            <li><a href="#" className="hover:text-green-300">Human Resources</a></li>
                        </ul>
                    </div>

                    {/* Academics Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Academics</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-green-300">Canvas</a></li>
                            <li><a href="#" className="hover:text-green-300">Catalyst</a></li>
                            <li><a href="#" className="hover:text-green-300">Library</a></li>
                            <li><a href="#" className="hover:text-green-300">Time Schedule</a></li>
                            <li><a href="#" className="hover:text-green-300">Apply For Admissions</a></li>
                            <li><a href="#" className="hover:text-green-300">Pay My Tuition</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center">
                    <p className="text-gray-400">&copy; Merit is Proudly Owned by</p>
                    <div className="mt-4 lg:mt-0 flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-green-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-300">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
