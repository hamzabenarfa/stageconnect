"use client";
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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( api_url+"api/offre");
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <section className="flex flex-col items-center min-h-screen p-2">
      <div className="flex flex-col items-center w-[60%] justify-center mb-8">
        <Input
          type="search"
          className="border-2 border-blue-200 rounded-2xl h-12 mt-6"
          placeholder="Type here to search by internship title ,keyword ect..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {offers
        .filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => (
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
        ))}
    </section>
  );
};

export default Picks;
