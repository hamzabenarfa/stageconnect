"use client"
import { useState, useEffect } from 'react';
import { fetchApiData } from '@/services/FetchDataApi';
import { DataItem } from '@/types/entreprise';

const ApiPage: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchApiData();
        setData(apiData);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  const handleAccept = async (id: string) => {
    try {
      console.log(`Accepter la demande avec l'ID ${id}`);
    } catch (error) {
      console.error('Erreur lors de l\'acceptation côté serveur', error);
    }
  };

  const handleRefuse = async (id: string) => {
    try {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
        await fetch(`http://localhost:8080/api/entreprise/${id}`, {
        method: 'DELETE',
      });
  
      console.log(`Refuser et supprimer la demande avec l'ID ${id}`);
    } catch (error) {
      console.error('Erreur lors de la suppression côté serveur', error);
    }
  };
  
  const filteredData = data.filter(item => !item.status);

  return (
    <div className="container mx-auto my-8">
    <div className="flex shadow border-b">
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Name</th>
          <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Place</th>
          <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">{item.nom}</div></td>
            <td className="text-left px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">{item.place}</div></td>
            <td>
                  <button onClick={() => handleAccept(item.id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Accepter</button>
                  <button onClick={() => handleRefuse(item.id)} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>Refuser</button>
                </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  );
};

export default ApiPage;























/*"use client"
import User from "./User";
import React, { useEffect, useState } from "react";


const DemandeTable= () => {
    return (
      <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Name Entreprise</th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">User Name</th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Email l'entreprise</th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Mot de passe</th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <User/>
            </tbody>
          </table>
        </div>
      </div>
    )
};

export default DemandeTable;*/
