import "./globals.css";

export const metadata = {
  title: "NOSKATHON LITE 2025 - Official Website",
  description:
    "Welcome to the official website of NOSKATHON LITE 2025. Stay updated with all the latest events and information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/assets/svg/NOSK_Logo_with_Tagline 1.svg" type="image/svg+xml" />
        <title>NOSKATHON LITE 2025</title>
      </head>
      <body className={`antialiased font-ibmplex`}>{children}</body>
    </html>
  );
}
