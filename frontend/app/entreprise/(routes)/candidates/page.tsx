"use client";
import React, { useEffect, useState } from "react";
import { getOfferByEntreprise } from "@/services/Entreprise.service";
import { DataItem } from "@/types/entreprise";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { getOffreById } from "@/services/OffreApi";
import { set } from "zod";

const Candidates = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [acceptedOffer, setAcceptedOffer] = useState<any[]>([]);
  const [entrepriseId, SetentrepriseId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const entrepriseid = localStorage.getItem("entreprise");
      if (entrepriseid) {
        SetentrepriseId(entrepriseid);
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOfferByEntreprise(entrepriseId);
        setData(res);

        const studentIds = res
          .flatMap((item: { studentIds: string }) => item.studentIds)
          .filter(Boolean);
        const validStudentIds = studentIds.filter(Boolean);

        if (validStudentIds.length > 0) {
          const usersData = await Promise.all(
            validStudentIds.map(async (id: string) => {
              try {
                const response = await axios.get(
                  `http://localhost:8080/api/user/${id}`
                );
                return response.data;
              } catch (error) {
                console.error(`Error fetching user data for ID ${id}:`, error);
                return null;
              }
            })
          );
          setUsers(usersData);

          // // Filter out duplicate user data based on the user ID
          // const uniqueUsers = usersData.reduce((acc, user) => {
          //   if (
          //     user &&
          //     !acc.some(
          //       (existingUser: { id: any }) => existingUser.id === user.id
          //     )
          //   ) {
          //     acc.push(user);
          //   }
          //   return acc;
          // }, [] as any[]);

          // setUsers(uniqueUsers);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [entrepriseId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOfferByEntreprise(entrepriseId);

        const studentIds = res
          .flatMap((item: { acceptedOffer: string }) => item.acceptedOffer)
          .filter(Boolean);
        const validStudentIds = studentIds.filter(Boolean);

        if (validStudentIds.length > 0) {
          const usersData = await Promise.all(
            validStudentIds.map(async (id: string) => {
              try {
                const response = await axios.get(
                  `http://localhost:8080/api/user/${id}`
                );
                return response.data;
              } catch (error) {
                console.error(`Error fetching user data for ID ${id}:`, error);
                return null;
              }
            })
          );
          setAcceptedOffer(usersData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [entrepriseId]);

  const handleAccept = async (offerId: string, studentId: string) => {
    try {
      const existingOffer = await getOffreById(offerId);
      
      const acceptedOfferArray = Array.isArray(existingOffer.data.acceptedOffer)
        ? existingOffer.data.acceptedOffer
        : [];
  
      const updatedOffer = {
        ...existingOffer.data,
        acceptedOffer: [...acceptedOfferArray, studentId],
        title: existingOffer.data.title,
        place: existingOffer.data.place,
        duration: existingOffer.data.duration,
        description: existingOffer.data.description,
        studentIds: existingOffer.data.studentIds.filter((id) => id !== studentId),
      };
  
      const res = await axios.put(`http://localhost:8080/api/offre/${offerId}`, updatedOffer);
      if(res){
        window.location.reload();
      }
    } catch (error) {
      console.error("Error accepting offer:", error);
    }
  };
  
  const handleDelete = async (offerId: string, studentId: string) => {
    try {
      const existingOffer = await getOffreById(offerId);

      const updatedOffer = {
        ...existingOffer.data,
        acceptedOffer: existingOffer.data.acceptedOffer.filter(
          (id) => id !== studentId
        ),
      };

      const res = await axios.put(
        `http://localhost:8080/api/offre/${offerId}`,
        updatedOffer
      );

      console.log(res.data);
    } catch (error) {
      console.error("Error deleting accepted offer:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl ">
      <table className="w-full rounded-3xl border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-3">Offer Title</th>
            <th className="border border-gray-300 p-3">User Information</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-3 font-semibold">
                {item.title}
              </td>
              <td className="border border-gray-300 p-3">
                <ul>
                  {users
                    .filter((user) => item.studentIds.includes(user.id))
                    .map((user) => (
                      <li
                        key={user.id}
                        className="flex items-center justify-between mb-1"
                      >
                        {`Name: ${user.student.firstName}, Email: ${user.email}`}
                        <div className="flex gap-2">
                          <Button
                            size="lg"
                            onClick={() => handleAccept(item.id, user.id)}
                          >
                            {" "}
                            Accept
                          </Button>
                          <Button
                            variant="destructive"
                            size="lg"
                            className=""
                            onClick={() => handleDelete(item.id, user.id)}
                          >
                            {" "}
                            Refuse
                          </Button>
                        </div>
                      </li>
                    ))}
                  {acceptedOffer
                    .filter((user) => item.acceptedOffer?.includes(user.id))
                    .map((user) => (
                      <li
                        key={user.id}
                        className="flex items-center justify-between mb-1"
                      >
                        {`Name: ${user.student.firstName}, Email: ${user.email}`}
                        <div className="flex gap-2">
                          <Button
                            size="lg"
                            disabled={item.acceptedOffer?.includes(user.id)}
                          >
                            Accept
                          </Button>
                          <Button
                            variant="destructive"
                            size="lg"
                            className=""
                            onClick={() => handleDelete(item.id, user.id)}
                          >
                            Refuse
                          </Button>
                        </div>
                      </li>
                    ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;
