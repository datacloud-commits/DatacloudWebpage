import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./sections/nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DataCloudCorp | Cloud Solutions and IT Services",
  description: "From The Cloud To Customers, We bring all the answers. DataCloudCorp offers innovative IT solutions, including cloud-based services, DevOps, and enterprise software development for various industries.",
  keywords: "cloud solutions, IT services, enterprise software, DataCloudCorp, DevOps, cloud computing, AWS, Azure, Google Cloud, IT consulting, business solutions, software development, tech services",
  author: "DataCloudCorp",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="theme-color" content={metadata.themeColor} />

        {/* Open Graph (OG) for Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://datacloudcorp.com" />
        <meta property="og:image" content="https://datacloudcorp.com/og-image.png" />
        <meta property="og:site_name" content="DataCloudCorp" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card for Social Media */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://datacloudcorp.com/og-image.png" />
        <meta name="twitter:site" content="@DataCloudCorp" />
        <meta name="twitter:creator" content="@DataCloudCorp" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>{metadata.title}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
