"use client"
import { useEffect } from "react";
import Head from "next/head";

const BookCall = () => {
  useEffect(() => {
    // Load Calendly widget script dynamically when the component mounts
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* SEO metadata for the Book Call page */}
      <Head>
        <title>Book a Call | DataCloudCorp</title>
        <meta
          name="description"
          content="Schedule a call with DataCloudCorp to discuss how we can help your business with innovative cloud and IT solutions."
        />
      </Head>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-5">
        <h1 className="text-3xl font-semibold text-gray-900">
          Schedule a Call with Us
        </h1>

        {/* Calendly Inline Widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/hr-datacloudcorp/30min"
          style={{ minWidth: "320px", minHeight: "600px", width: "1200px", height: "700px" }}
        ></div>
      </div>
    </>
  );
};

export default BookCall;
