  "use client"
  import {  useEffect, useState } from "react";
  import Landing from "./_component/Landing";
  import Navbar from "./_component/Navbar";
  import Sidebar from "./_component/sidebar";
  import { redirect } from "next/navigation";
  export default function StudentLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [studentId, setStudentId] = useState("")
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const studentId = localStorage.getItem("student");
        if (!studentId) { 
          redirect("/login");
        }
        else {
          setStudentId(studentId)
        }
      }
    }, []);
    
    // const { getItem, removeItem } = useLocalStorage("stage");
    // const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    // const studentIdsString = getItem();
    // const studentIds = studentIdsString ? JSON.parse(studentIdsString) : [];
  
    // useEffect(() => {
    //   const subscribeToOffer = async () => {
        // try {
        //   if (studentId) { // Check if studentId is not an empty string
        //     const res = await axios.put(
        //       `${apiURL}api/offre/subscribe/${studentId}`,
        //       { studentIds }
        //     );
  
        //     if (res) {
        //       Toast.success("You have successfully subscribed to this offer");
        //       removeItem();
        //     }
        //   }
        // } catch (err) {
        //   console.error(err);
        // }
    //   };
  
    //   subscribeToOffer();
    // }, [studentIds]);
    return (
      <main className="">
        <Navbar />
        <Landing />
        <div className="z-20 absolute top-80  w-full ">
          <div className="flex w-full p-4 h-full">
            <div className="w-60 h-[55vh] rounded-xl"><Sidebar /></div>
            <div className="ml-2">{children}</div>
          </div>
        </div>
      </main>
    );
  }
