"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getUserById } from "@/services/UserApi";
import Image from "next/image";
import { useEffect, useState } from "react";

const Landing = () => {
  const [userData, setUserData] = useState({});
  const { getItem } = useLocalStorage("student");
 

  useEffect(() => {
    async function fetchdata() {
      try {
        const id =getItem() ?? "";
        const data = await getUserById(id);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [getItem]);
  

  return (
    <div className="">
      <div className="absolute top-0 z-0 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 w-full h-60"></div>

      <section className="relative top-28  left-10 z-10 flex flex-col items-start justify-center w-60 gap-4">
        <div className="flex flex-row items-center justify-between gap-10 ">
          <div className="flex items-center justify-center gap-2 ">
            <div className="bg-white rounded-full p-2 border-1 shadow-lg">
              <Image
                src={"/avatar.png"}
                alt="profile"
                className="w-16 h-16  rounded-full "
                width={80}
                height={80}
              />
            </div>
            <div>
            <h1 className="text-2xl font-semibold">{userData.student?.firstName || ""}</h1>
              <p className="text-sm text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
