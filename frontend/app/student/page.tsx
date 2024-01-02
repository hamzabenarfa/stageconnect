"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getOfferByStudent } from "@/services/Entreprise.service";
import { useState, useEffect } from "react";


const StudentProfile = () => {
  const [offers, setOffers] = useState<any[]>([]);

  const { getItem } = useLocalStorage("student");
  const studentIdsString = getItem();
  console.log(
    "🚀 ~ file: page.tsx:23 ~ StudentProfile ~ studentIdsString:",
    studentIdsString
  );
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const offersData = await getOfferByStudent(studentIdsString || "");
        setOffers(offersData);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };

    fetchOffers();
  }, [studentIdsString]);

  return (
    <div className="container mx-auto ">
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

export default StudentProfile;
