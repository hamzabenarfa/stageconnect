"use client"
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./_component/Navbar";
import SideBar from "./_component/SideBar";

const EntrepriseLayout = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const entrepriseId = localStorage.getItem("entreprise");
      if (!entrepriseId) { 
        redirect("/login");
      }
    }
  }, []);

 

  return (
    <div className="flex flex-col md:flex-row  p-4 min-h-screen backdrop-blur-3xl bg-gray-500/30  overflow-hidden">
      <div className="hidden md:flex ">
        <SideBar />
      </div>

      <main className="flex flex-col w-full p-2 md:mx-2 space-y-4 ">
        <Navbar  />
        <div className=" ">{children}</div>
      </main>
    </div>
  );
};

export default EntrepriseLayout;
