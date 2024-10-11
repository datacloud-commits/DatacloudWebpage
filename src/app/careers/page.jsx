import Link from "next/link";

const Careers = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <h1 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-12">
          Join Our Team at Datacloud Corp
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-400">
          At Datacloud Corp, we’re passionate about transforming businesses with
          innovative cloud solutions. If you share our passion and want to work
          with a dynamic and forward-thinking team, explore the opportunities
          below.
        </p>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* DevOps Engineer */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              DevOps Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We are seeking an experienced DevOps Engineer to join our growing
              team. You will work closely with our development teams to automate
              and optimize the deployment and operations of large-scale cloud
              infrastructure. If you’re a problem solver who enjoys working with
              cutting-edge technology, we want to hear from you!
            </p>
            <Link
              href="/apply"
              className="mt-5 inline-block py-2.5 px-5 bg-blue-600 text-white rounded-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Cloud Solutions Architect */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Cloud Solutions Architect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              As a Cloud Solutions Architect, you will lead the design and
              implementation of scalable cloud infrastructure solutions for our
              clients. You will collaborate with cross-functional teams to
              ensure cloud strategies meet their business goals and technical
              requirements.
            </p>
            <Link
              href="/apply"
              className="mt-5 inline-block py-2.5 px-5 bg-blue-600 text-white rounded-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Full Stack Developer */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Full Stack Developer (Software Engineer)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We are looking for a talented Full Stack Developer to build
              high-performance applications for our clients. You will work on
              both the front-end and back-end, ensuring the smooth delivery of
              scalable solutions that align with business needs.
            </p>
            <Link
              href="/apply"
              className="mt-5 inline-block py-2.5 px-5 bg-blue-600 text-white rounded-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Data Engineer */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Data Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We are seeking a Data Engineer to design, develop, and optimize
              our data pipelines. You'll work with large datasets and ensure
              that data is accessible, reliable, and clean for business
              insights. This role is crucial in helping our clients unlock the
              full potential of their data.
            </p>
            <Link
              href="/apply"
              className="mt-5 inline-block py-2.5 px-5 bg-blue-600 text-white rounded-md"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
