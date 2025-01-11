import "./globals.css";

export const metadata = {
  title: "NOSKATHON LITE 2025 - Intra-College Hackathon by NOSK",
  description:
    "Join NOSKATHON LITE 2025, a two-day intra-college hackathon by Nepal Open Source Klub (NOSK) and NCIT. Collaborate, innovate, and solve real-world challenges with expert mentorship and exciting prizes. Happening on January 12-13, 2025, at NCIT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Join NOSKATHON LITE 2025, a two-day hackathon organized by NOSK and NCIT. Collaborate, innovate, and solve real-world challenges!"
        />

        <meta
          property="og:title"
          content="NOSKATHON LITE 2025 - Intra-College Hackathon by NOSK"
        />
        <meta
          property="og:description"
          content="Join a two-day hackathon by NOSK and NCIT to innovate, learn, and win exciting prizes!"
        />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta property="og:url" content="https://noskathonlite.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NOSKATHON LITE 2025 - Intra-College Hackathon by NOSK"
        />
        <meta
          name="twitter:description"
          content="Happening January 12-13, 2025, at NCIT. Collaborate, innovate, and solve challenges!"
        />
        <meta name="twitter:image" content="/assets/images/twitter-image.jpg" />
        <link
          rel="icon"
          href="/assets/svg/Logo_Circular.svg"
          type="image/svg+xml"
        />
        <title>NOSKATHON LITE 2025</title>
        {/* Other Meta Tags */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "NOSKATHON LITE 2025",
      "startDate": "2025-01-12",
      "endDate": "2025-01-13",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "NCIT",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kathmandu",
          "addressCountry": "Nepal"
        }
      },
      "description": "A two-day intra-college hackathon by Nepal Open Source Klub (NOSK) and NCIT. Innovate, learn, and win prizes!",
      "organizer": {
        "@type": "Organization",
        "name": "Nepal Open Source Klub (NOSK)",
        "url": "https://nosk.org"
      }
    }
    `}
        </script>
      </head>
      <body className={`antialiased font-ibmplex bg-grid`}>{children}</body>
    </html>
  );
}
