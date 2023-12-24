"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Toast from "react-hot-toast";
import authService from "@/services/Auth.service";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const onSubmit = async () => {
    try {
      const userData = await authService.login(user, pwd);

      if (userData) {
        if (userData.role === "student") {
          localStorage.setItem("student", userData.id);
          router.push("/student");
        } 
        else if (userData.role === "entreprise") {
          localStorage.setItem("entreprise", userData.id);
          router.push("/entreprise");
        }

        Toast.success("Login successful");
      } else {
        Toast.error("Wrong Credentials");
      }
    } catch (error) {
      Toast.error("Bad request");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-between pr-10 overflow-hidden bg-gray-100 space-y-8 ">
      <Image
        src="/login.png"
        alt="Picture of the author"
        width={700}
        height={600}
        className="hidden md:block"
      />

      <div className="max-w-lg w-full px-10 shadow-md rounded-2xl h-[90vh] bg-white flex flex-col items-center justify-around ">
        <div className="flex flex-col items-center">
          <p className="font-bold text-5xl text-blue-400">
            <Link href="/">Stage Connect</Link>
          </p>
        </div>

        <form className="w-full">
          <div className="flex flex-col items-center justify-center mt-4">
            <input
              className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 mt-2"
              type="password"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
        </form>

        <Button type="button" onClick={onSubmit} className="w-full">
          Log In
        </Button>
      </div>
    </section>
  );
};

export default Login;
