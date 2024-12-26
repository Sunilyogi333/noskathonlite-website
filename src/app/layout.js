import "./globals.css";

export const metadata = {
  title: "NOSKATHON LITE 2025 - Official Website",
  description:
    "Welcome to the official website of NOSKATHON LITE 2025. Stay updated with all the latest events and information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased font-ibmplex`}>{children}</body>
    </html>
  );
}
