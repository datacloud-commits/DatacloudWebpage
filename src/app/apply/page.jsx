"use client"
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";

const Apply = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // Validate form data
  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.phone) errors.phone = "Phone number is required";
    if (!data.position) errors.position = "Position is required";
    if (!data.coverLetter) errors.coverLetter = "Cover letter is required";
    if (!data.resume) errors.resume = "Resume is required";
    return errors;
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      linkedin: e.target.linkedin.value,
      position: e.target.position.value,
      coverLetter: e.target.coverLetter.value,
      resume: e.target.resume.value,
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    // Sending the form using EmailJS
    emailjs
    .sendForm(
        "service_1dxdplu", // Replace with your EmailJS service ID
        "template_nx309md", // Replace with your EmailJS template ID
        form.current,
        "2ERinJ91AwYZ58ZPj" // Replace with your EmailJS public API key
      )
      .then(
        (result) => {
          setMessage("Application submitted successfully!");
          setLoading(false);
          e.target.reset(); // Reset the form after submission
          setFormErrors({});
        },
        (error) => {
          setMessage("An error occurred. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Apply for a Job | DataCloudCorp</title>
        <meta
          name="description"
          content="Submit your application to DataCloudCorp. Apply for open positions in cloud solutions, DevOps, full-stack development, and more."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-20 px-5">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-lg w-full">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Apply for a Position
          </h1>

          {/* Display success/error message */}
          {message && (
            <div
              className={`p-4 mb-4 rounded-md ${
                message.includes("success")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className={`w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 ${
                  formErrors.name ? "border-red-500" : ""
                }`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className={`w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 ${
                  formErrors.email ? "border-red-500" : ""
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
                className={`w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 ${
                  formErrors.phone ? "border-red-500" : ""
                }`}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm">{formErrors.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn profile URL"
                className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Position
              </label>
              <input
                type="text"
                name="position"
                placeholder="Position you are applying for"
                className={`w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 ${
                  formErrors.position ? "border-red-500" : ""
                }`}
              />
              {formErrors.position && (
                <p className="text-red-500 text-sm">{formErrors.position}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                placeholder="Why do you want to work with us?"
                className={`w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 ${
                  formErrors.coverLetter ? "border-red-500" : ""
                }`}
                rows="4"
              ></textarea>
              {formErrors.coverLetter && (
                <p className="text-red-500 text-sm">
                  {formErrors.coverLetter}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Paste Your Resume (Text)
              </label>
              <textarea
                name="resume"
                placeholder="Paste your resume here"
                className={`w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 ${
                  formErrors.resume ? "border-red-500" : ""
                }`}
                rows="6"
              ></textarea>
              {formErrors.resume && (
                <p className="text-red-500 text-sm">{formErrors.resume}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-white ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Apply;
