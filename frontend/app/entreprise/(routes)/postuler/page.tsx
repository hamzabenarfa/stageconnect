"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import AddBtn from "./_components/AddBtn";
import Card from "./_components/card";

interface DataItem {
  id: string;
  title: string;
  place: string;
  duration: number;
}

const Postuler = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/offre");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data]);

  
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          place={item.place}
          duration={item.duration}
        />
      ))}
      <AddBtn />
    </div>
  );
};

export default Postuler;
