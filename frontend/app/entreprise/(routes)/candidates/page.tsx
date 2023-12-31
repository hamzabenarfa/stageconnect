"use client";
import React, { useEffect, useState } from "react";
import { getOfferByEntreprise } from "@/services/Entreprise.service";
import { DataItem } from "@/types/entreprise";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Candidates = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [users, setUsers] = useState<any[]>([]); // Assuming the structure of user data
  const entrepriseId = localStorage.getItem("entreprise") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOfferByEntreprise(entrepriseId);
        setData(res);

        const studentIds = res
          .flatMap((item) => item.studentIds)
          .filter(Boolean);
        const validStudentIds = studentIds.filter(Boolean);

        if (validStudentIds.length > 0) {
          const usersData = await Promise.all(
            validStudentIds.map(async (id) => {
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

          // Filter out duplicate user data based on the user ID
          const uniqueUsers = usersData.reduce((acc, user) => {
            if (
              user &&
              !acc.some((existingUser) => existingUser.id === user.id)
            ) {
              acc.push(user);
            }
            return acc;
          }, [] as any[]);

          setUsers(uniqueUsers);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [entrepriseId]);

  return (
    <div className="bg-white p-4 rounded-xl">
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
                      <li key={user.id} className="mb-1">
                        {`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`}
                        <Button> delete</Button>
                        <Button> modify</Button>

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
