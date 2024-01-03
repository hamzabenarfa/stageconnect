"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "@/app/(dashboard)/_components/logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [studentId, setStudentId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const studentId = localStorage.getItem("student");
      if (studentId) {
        setStudentId(studentId);
      }
    }
  }, []);
  return (
    <div className="p-4 items-center justify-between md:px-40 flex md:flex-row md:items-center md:justify-between">
      <div className="hidden md:flex items-center justify-center flex-row gap-2">
        <Logo />

        <Button variant="ghost">Home</Button>
        <Link href="/internship">
          <Button variant="ghost">Internship </Button>
        </Link>
      </div>
      <div className="hidden md:block">
        {studentId ? (
          <Link href="/student">
            <Button variant="hero">Dashboard </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button variant="hero">Login </Button>
          </Link>
        )}
      </div>

      <Menu size={30} className="md:hidden text-gray-600" />
    </div>
  );
};

export default Navbar;
