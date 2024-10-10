const ContactForm = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Leave A Message</h1>
            <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800"
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        className="px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800"
                />
                <textarea
                    placeholder="Message"
                    className="w-full px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800"
                    rows="4"
                ></textarea>
                <button className="w-full py-2.5 bg-blue-600 text-white rounded-md flex items-center justify-center">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
