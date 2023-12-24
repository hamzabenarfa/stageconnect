"use client"
import { useState, useEffect } from "react";

import Offer from "./offer";
import { Input } from "@/components/ui/input";
import axios from "axios";

interface OfferProps {
  id: string;
  img: string | "...";
  company: string;
  title: string;
  duration: number;
  place: string;
  paid: boolean;
}

const Picks = () => {
  const [offers, setOffers] = useState<OfferProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/offre");
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 


  return (
    <section className="flex flex-col  items-center min-h-screen p-2">
      <div className="flex flex-col items-center w-[60%] justify-center mb-8">
      <Input
            type="search"
            className="border-2 border-blue-200 rounded-2xl h-12 mt-6"
            placeholder="Type here to search by internship title ,keyword ect..."
          />
      </div>
    
    {offers && offers.map((item)=>(
            <Offer 
                id={item.id}
                key={item.title}
                img={item.img}
                company={item.company}
                title={item.title}
                duration={item.duration}
                place={item.place}
                paid={item.paid}
            />
        ))
    }
    
  
    </section>
  );
};

export default Picks;
