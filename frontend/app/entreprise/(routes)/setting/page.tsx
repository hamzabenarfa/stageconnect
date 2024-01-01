"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { getEnterpriseFromUser } from "@/services/Entreprise.service";

const Setting = () => {
  const [formData, setFormData] = useState({
    nom: "",
    location: "",
    phone: "",
  });
  const [entrepriseId, SetentrepriseId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const entrepriseid = localStorage.getItem("entreprise");
      if (entrepriseid) {
        SetentrepriseId(entrepriseid);
      }
    }
  }, []);

  const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const [Id, setId] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = await getEnterpriseFromUser(entrepriseId);
        const fetcheddata = await axios.get(api_url + "api/entreprise/" + id);
        setFormData(fetcheddata.data);
        setId(id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [entrepriseId]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        api_url + "api/entreprise/" + Id,
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating settings:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="bg-white w-full  md:max-w-lg p-4 rounded-xl">
        <h1 className="text-xl font-semibold">Setting</h1>
        <p className="text-xs text-foreground">
          You can change your info here...
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start justify-center mt-4">
            <label
              htmlFor="nom"
              className="text-sm font-semibold mb-2 text-gray-600"
            >
              Name
            </label>
            <input
              id="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your Name"
            />

            {/* <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-600 mt-4"
            >
              Password
            </label>
            <input
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mt-2"
              type="password"
              placeholder="Enter your password"
            /> */}

            <label
              htmlFor="location"
              className="text-sm font-semibold text-gray-600 mt-4"
            >
              Location
            </label>
            <input
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mt-2"
              type="text"
              placeholder="Enter your location"
            />

            <label
              htmlFor="phone"
              className="text-sm font-semibold text-gray-600 mt-4"
            >
              Phone
            </label>
            <input
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mt-2"
              type="text"
              placeholder="Enter your phone"
            />

            <Button type="submit" className="w-full mt-4">
              Change
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
