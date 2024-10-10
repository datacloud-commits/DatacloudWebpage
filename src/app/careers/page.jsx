import Link from "next/link"

const Careers = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 py-20">
                <h1 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-12">Join Our Team at Datacloud Corp</h1>
                <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600 dark:text-gray-400">
                    At Datacloud Corp, we’re passionate about transforming businesses with innovative cloud solutions. 
                    If you share our passion and want to work with a dynamic and forward-thinking team, explore the opportunities below.
                </p>

                {/* Job Listings */}
                <div className="space-y-10">
                    {/* DevOps Engineer */}
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">DevOps Engineer</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            We are seeking an experienced DevOps Engineer to join our growing team. You will work closely with our development teams 
                            to automate and optimize the deployment and operations of large-scale cloud infrastructure. If you’re a problem solver who enjoys 
                            working with cutting-edge technology, we want to hear from you!
                        </p>
                        <h3 className="font-semibold text-lg mb-2">Key Responsibilities:</h3>
                        <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                            <li>Design, build, and maintain CI/CD pipelines.</li>
                            <li>Implement and manage cloud infrastructure (AWS, Azure, Google Cloud).</li>
                            <li>Monitor, troubleshoot, and resolve infrastructure-related issues.</li>
                            <li>Collaborate with developers to streamline the deployment process.</li>
                        </ul>
                        <Link href="/apply" className="mt-5 inline-block py-2.5 px-5 bg-blue-600 text-white rounded-md">Apply Now</Link>
                    </div>

                    {/* Cloud Solutions Architect */}
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Cloud Solutions Architect</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            As a Cloud Solutions Architect, you will lead the design and implementation of scalable cloud infrastructure solutions 
                            for our clients. You will collaborate with cross-functional teams to ensure cloud strategies meet their business goals 
                            and technical requirements.
                        </p>
                        <h3 className="font-semibold text-lg mb-2">Key Responsibilities:</h3>
                        <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                            <li>Architect and design cloud solutions using AWS, Azure, or Google Cloud.</li>
                            <li>Collaborate with engineering teams to implement best practices for cloud deployment.</li>
                            <li>Evaluate and integrate new technologies to enhance cloud infrastructure.</li>
                            <li>Provide technical leadership and guidance on cloud architecture.</li>
                        </ul>
                        <Link href="/apply" className="mt-5 inline-block py-2.5 px-5 bg-blue-600 text-white rounded-md">Apply Now</Link>
                    </div>

                    {/* Full Stack Developer */}
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Full Stack Developer (Software Engineer)</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            We are looking for a talented Full Stack Developer to build high-performance applications for our clients. 
                            You will work on both the front-end and back-end, ensuring the smooth delivery of scalable solutions that align with business needs.
                        </p>
                        <h3 className="font-semibold text-lg mb-2">Key Responsibilities:</h3>
                        <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                            <li>Develop front-end and back-end web applications.</li>
                            <li>Collaborate with UX/UI designers and other developers to deliver exceptional solutions.</li>
                            <li>Optimize applications for speed and scalability.</li>
                            <li>Write clean, maintainable code and perform code reviews.</li>
                        </ul>
                        <Link href="/apply" className="mt-5 inline-block py-2.5 px-5 bg-blue-600 text-white rounded-md">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
