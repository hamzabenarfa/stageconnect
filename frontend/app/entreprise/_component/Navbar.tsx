"use client";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [data, setData] = useState<any>({});


  useEffect(() => {
    const fetchData = async () => {
      const entrepriseId = localStorage.getItem("entreprise");

      try {
        const res = await axios.get(`http://localhost:8080/api/user/${entrepriseId}`);
         setData(res.data);     
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //data.map((item) => console.log(item))


  return (
    <div className="flex items-center justify-between w-full rounded-3xl h-20 p-4 bg-white">
      <h1 className="text-sm lg:text-3xl font-semibold capitalize">hi {data && data.entreprise && data.entreprise.nom}</h1>
      <div className="flex items-center gap-1">
        <div className="hidden md:block">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="w-10 h-10 text-black p-2 rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="w-10 h-10 text-black p-2 rounded-full" />
          </Button>
        </div>

        {/* <div className="flex flex-row items-center">
          <Image
            src="/google.png"
            alt="user img"
            width={40}
            height={40}
            className="rounded-full"
          />
          <ChevronDown className="w-10 h-10 text-black p-2 rounded-full" />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
