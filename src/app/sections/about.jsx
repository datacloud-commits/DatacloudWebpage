"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";


const About = () => {
    return (
        <section className="py-24" id="about">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
                <div className="flex md:flex-1">
                    <Image src="/aboutus.webp" alt="creative agency " width={1300} height={900} className="w-full md:h-full object-cover rounded-lg" />
                </div>
                <div className="md:w-1/2  text-gray-700 dark:text-gray-300 md:py-8">
                    <motion.h1
                        className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl"
                        initial={{ opacity: 0, y: 50 }}  // Start faded and moved down
                        whileInView={{ opacity: 1, y: 0 }}  // Fade in and move to original position
                        transition={{ duration: 1 }}  // Control the speed of the animation
                        viewport={{ once: true }}  // Ensure it happens only once
                    >
                        About Datacloud Corp
                    </motion.h1>
                    <p>
                        Datacloud Corp is a premier software service provider, specializing in enterprise application development, open-source framework implementation, cloud platform solutions, DevOps, and comprehensive testing and application server support. With extensive experience across various industries, we solve complex business problems through innovative cloud-based IT solutions. Our domain expertise spans verticals like Automotive, Banking & Finance, and Government sectors, enabling us to deliver tailored, impactful solutions for a range of industries
                    </p>

                    <div className="md:py-8">
                        <motion.h1
                            className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl"
                            initial={{ opacity: 0, y: 50 }}  // Start faded and moved down
                            whileInView={{ opacity: 1, y: 0 }}  // Fade in and move to original position
                            transition={{ duration: 1 }}  // Control the speed of the animation
                            viewport={{ once: true }}  // Ensure it happens only once
                        >
                            Why Datacloud Corp
                        </motion.h1>
                        <p>
                            At Datacloud Corp, our motto is simple: "From the Cloud to Customers, We Bring All the Answers." We focus on understanding your business's technical requirements and aligning our solutions with your organizational needs. Our approach prioritizes quality over quantity, ensuring we provide exceptional talent and innovative solutions to meet your unique challenges.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About