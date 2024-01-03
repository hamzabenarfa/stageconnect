"use client";import axios from "axios";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useState, useEffect } from "react";

const Accepted = () => {
  const [offers, setOffers] = useState<any[]>([]);
  const { getItem } = useLocalStorage("student");
  const studentId = getItem();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        // Fetch offers from the API
        const response = await axios.get("http://localhost:8080/api/offre");
        const allOffers = response.data;

        // Filter offers based on the studentId within the acceptedOffer array
        const filteredOffers = allOffers.filter((offer) => {
          // Check if acceptedOffer is an array and contains the studentId
          return Array.isArray(offer.acceptedOffer) && offer.acceptedOffer.includes(studentId);
        });

        // Update the state with the filtered offers
        setOffers(filteredOffers);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    // Call the fetchOffers function when the component mounts
    fetchOffers();
  }, [studentId]);

  return (
    <div className="container mx-auto">
      {offers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-100 text-lg font-semibold border-b">Title</th>
                <th className="py-3 px-6 bg-gray-100 text-lg font-semibold border-b">Place</th>
                <th className="py-3 px-6 bg-gray-100 text-lg font-semibold border-b">Duration</th>
                <th className="py-3 px-6 bg-gray-100 text-lg font-semibold border-b">Description</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 border-b">{offer.title}</td>
                  <td className="py-4 px-6 border-b">{offer.place}</td>
                  <td className="py-4 px-6 border-b">{offer.duration}</td>
                  <td className="py-4 px-6 border-b">{offer.description}</td>
                  {/* Add more table cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No offers found for this student.</p>
      )}
    </div>
  );
};

export default Accepted;
