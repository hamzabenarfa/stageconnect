// ApiPage.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { fetchApiData, createUser } from '@/services/UserApi';
import { UserType } from '@/types/DataTypeUser';
import './style.css';
import EditForm from './EditForm';
import { updateUser } from '@/services/UserApi';

const ApiPage: React.FC = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchApiData();
        setData(apiData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);

      await fetch(`http://localhost:8080/api/user/${id}`, {
        method: 'DELETE',
      });

      console.log(`Supprimer l'utilisateur avec l'ID ${id}`);
    } catch (error) {
      console.error('Erreur lors de la suppression côté serveur', error);
      alert('Erreur lors de la suppression de l\'utilisateur. Veuillez réessayer.');
    }
  };

  const handleEditSubmit = async (id: string, updatedData: Partial<UserType>) => {
    try {
      
      const updatedUser = await updateUser(id, updatedData);


      const updatedDataArray = data.map(item => (item.id === id ? updatedUser : item));
      setData(updatedDataArray);

      setEditingUserId(null);

      console.log(`Utilisateur mis à jour avec l'ID ${id}`);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
      alert('Erreur lors de la mise à jour de l\'utilisateur. Veuillez réessayer.');
    }
  };

  const handleEdit = (id: string) => {
    setEditingUserId(id);
  };

  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>E-MAIL</th>
              <th>PASSWORD</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>DELETE</button>
                  <button onClick={() => handleEdit(item.id)}>EDIT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


        {editingUserId && (
          <EditForm
            user={data.find(item => item.id === editingUserId)}

            onSubmit={(updatedData) => handleEditSubmit(editingUserId, updatedData)} />
        )}
      </div>

  
  );
};

export default ApiPage;
