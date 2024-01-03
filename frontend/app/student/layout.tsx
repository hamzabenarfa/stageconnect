"use client";
import { useEffect, useState } from "react";
import Landing from "./_component/Landing";
import Navbar from "./_component/Navbar";
import { redirect } from "next/navigation";
import { Sidebar } from "./_component/Side";
export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [studentId, setStudentId] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const studentId = localStorage.getItem("student");
      if (!studentId) {
        redirect("/login");
      } else {
        setStudentId(studentId);
      }
    }
  }, []);

  return (
    <main className="">
      <Navbar />
      <Landing />
      <div className="z-20 absolute top-80  w-full ">
        <div className="flex w-full p-4 h-full">
          <div className="w-60 h-[55vh] rounded-xl">
            <Sidebar />
          </div>
          <div className="ml-2">{children}</div>
        </div>
      </div>
    </main>
  );
}
