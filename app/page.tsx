"use client";

import Navigation from "@/components/navigation";
import MainLogo from "@/components/main-logo";

export default function Navbar() {
  return (
    <header className="flex flex-col bg-blue_deep ">
      <div className="">
        <MainLogo />
      </div>
      <div className="text-blue_light">
        <Navigation />
      </div>
    </header>
  );
}
