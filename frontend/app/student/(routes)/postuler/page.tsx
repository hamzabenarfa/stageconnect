"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import AddBtn from "./_components/AddBtn";
import Card from "./_components/card";
import { DataItem } from "@/types/entreprise";
import Toast from "react-hot-toast";

const Postuler = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/offre");
        setData(res.data);
      } catch (error) {
        Toast.error("error");
      }
    };
    getData();
  }, [data]);

  return (
    <div className="flex relative flex-col justify-center items-center gap-2">
      <div className=" absolute bottom-10 right-10 -z-10 bg-orange-300 p-4">
        <AddBtn />
      </div>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          place={item.place}
          duration={item.duration}
          description={item.description}
        />
      ))}
    </div>
   
  );
};

export default Postuler;
