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
        } else if (userData.role === "entreprise") {
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
    <section className="min-h-screen flex items-center justify-around overflow-hidden bg-gray-100 space-y-8 ">
      <Image
        src="/login.png"
        alt="Picture of the author"
        width={700}
        height={600}
        className="hidden md:block"
      />

      <div className="flex flex-col items-center justify-center space-y-8 md:max-w-lg mx-2 w-full px-10 shadow-md rounded-2xl h-[90vh] bg-white  ">
        <Link href="/" className="font-bold text-5xl text-blue-400">
          Stage Connect
        </Link>

        <div className="flex flex-col p-2 w-full space-y-4">
          <form className="w-full">
            <div className="flex flex-col items-start justify-center mt-4">
              <label
                htmlFor="email"
                className="text-sm font-semibold mb-2 text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter your email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />

              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-600 mt-4"
              >
                Password
              </label>
              <input
                id="password"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mt-2"
                type="password"
                placeholder="Enter your password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
          </form>

          <Button type="button" onClick={onSubmit} className="w-full">
            Log In
          </Button>
        </div>

        <Link href="/register" className=" underline">You dont have acount ?</Link>
      </div>
    </section>
  );
};

export default Login;
