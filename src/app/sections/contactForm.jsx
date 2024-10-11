"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Form validation
  const validateForm = (data) => {
    let errors = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.phone) errors.phone = "Phone number is required";
    if (!data.subject) errors.subject = "Subject is required";
    if (!data.message) errors.message = "Message is required";
    return errors;
  };

  // Form Submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    // Extract form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      country: e.target.country.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoader(false);
      return;
    }

    emailjs
      .sendForm(
        "service_1dxdplu", // Replace with your EmailJS service ID
        "template_5u7ydjd", // Replace with your EmailJS template ID
        form.current,
        "2ERinJ91AwYZ58ZPj" // Replace with your EmailJS public API key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");
          e.target.reset(); // Reset form fields
          setLoader(false);
          setFormErrors({});
        },
        (error) => {
          console.log(error.text);
          setMessage("An error occurred, please try again.");
          setLoader(false);
        }
      );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Leave A Message</h1>
      
      {/* Success/Error Message */}
      {message && (
        <div className={`p-4 rounded-md ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800 ${formErrors.name ? "border border-red-500" : ""}`}
            />
            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={`px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800 ${formErrors.email ? "border border-red-500" : ""}`}
            />
            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
          </div>
        </div>

        {/* Phone & Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className={`px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800 ${formErrors.phone ? "border border-red-500" : ""}`}
            />
            {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={`w-full px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800 ${formErrors.subject ? "border border-red-500" : ""}`}
          />
          {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Message"
            className={`w-full px-5 py-2.5 rounded-md outline-none bg-gray-200 dark:bg-gray-800 ${formErrors.message ? "border border-red-500" : ""}`}
            rows="4"
          ></textarea>
          {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2.5 bg-blue-600 text-white rounded-md flex items-center justify-center ${loader ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loader}
        >
          {loader ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
