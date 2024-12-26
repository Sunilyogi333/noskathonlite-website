// This is the main home page of the Noskathonlite website.
// We will be working on this page. Import all your components here
// and structure the homepage as per the requirements.
"use client";

import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="text-green-500">
        Hi, I am home page of noskathonlite website
      </div>
    </div>
  );
}
