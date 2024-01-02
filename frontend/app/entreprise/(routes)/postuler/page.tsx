"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import AddBtn from "./_components/AddBtn";
import Card from "./_components/card";
import { DataItem } from "@/types/entreprise";
import { getOfferByEntreprise } from "@/services/Entreprise.service";

const Postuler = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [entrepriseId, SetentrepriseId] = useState("");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const entrepriseid = localStorage.getItem("entreprise");
      if (entrepriseid) { 
        SetentrepriseId(entrepriseid)
      }
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getOfferByEntreprise(entrepriseId);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data, entrepriseId]);

  
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="fixed bottom-10 right-10 z-10 p-4">
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
          entrepriseId={""} 
          studentIds={[]}        
          />
      ))}
    
    </div>
   
  );
};

export default Postuler;
