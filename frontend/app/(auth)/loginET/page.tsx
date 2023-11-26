"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import authService from "../../../services/Auth.service"; // Replace with the correct path
import { Button } from "@/components/ui/button";
import { Logo } from "@/app/(dashboard)/_components/logo";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      const userData = await authService.login(email, password);
      router.push("/admin");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };
  
  return (
    <section className="min-h-screen flex items-center justify-around overflow-hidden bg-gray-100 space-y-8 ">
      <Image
        src="/login.png"
        alt="Picture of the author"
        width={700}
        height={600}
        className="hidden md:block"
      />
      <div className=" px-10 shadow-md rounded-2xl h-[90vh]  bg-white flex flex-col items-center justify-around ">
        <div className="flex flex-col items-center space-y-4">
          <Logo />
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-2xl md:text-5xl font-semibold">Welcome back!</h1>
            <p className="text-xs md:text-sm text-gray-400">Please enter your details</p>
          </div>
        </div>
        <form className="w-full">
          <div className="flex flex-col items-center justify-center mt-4">
            <input
              className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 mt-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <Button type="button" onClick={onSubmit} className="w-full">
          Log In
        </Button>
        {error && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
              <p>{error}</p>
              <button onClick={() => setError("")}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
