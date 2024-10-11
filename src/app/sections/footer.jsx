"use client"
import Link from "next/link";
import ContactForm from "./contactForm";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10" id="contact">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                {/* Flexbox layout with two sections: First Section (70%) and Second Section (30%) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    
                    {/* First Section: Grid with four parts (70%) */}
                    <div className="flex-1 lg:w-7/10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                        {/* Part 1: Logo and Description */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <Link href="/" className="relative flex items-center gap-2.5">
                                <img src="/logo.png" alt="Datacloud Corp Logo" width={100} height={100} />
                            </Link>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                We bring the answers you need for all your cloud and IT challenges.
                            </p>
                        </div>

                        {/* Part 2: Address */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Reach Us</h1>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                2212 Boboli Ct, Celina, TX 75009
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">Phone: +1 (203) 701-9410</p>
                            <p className="text-gray-700 dark:text-gray-300">Email: hr@datacloudcorp.com</p>
                        </div>

                        {/* Part 3: Quick Links */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Quick Links</h1>
                            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                                <li><Link href="/#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
                                <li><Link href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Services</Link></li>
                                <li><Link href="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</Link></li>
                                <li><Link href="/#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        

                        {/* Part 4: Schedule a Call */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Schedule a Call</h1>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                Looking to discuss how we can help your business thrive? Schedule a call with our team to explore tailored solutions for your needs.
                            </p>
                            <a
                                href="/bookcall"
                                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-all">
                                Schedule a Call
                            </a>
                        </div>
                    </div>

                    {/* Second Section: Contact Form (30%) */}
                    <div className="flex-1 lg:w-3/10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center">
                        <ContactForm />
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <p>© 2024 Datacloud Corp. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" aria-label="social link" rel="noreferer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="social link" rel="noreferer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="social link" rel="noreferer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
