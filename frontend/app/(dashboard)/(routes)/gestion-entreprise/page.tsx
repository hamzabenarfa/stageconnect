"use client";
// @jsxImportSource react
// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./style.css";
import {
  deleteEntrepriseById,
  getListEntreprises,
} from "../../../../services/EntrepriseApi";
import { EntrepriseType } from "@/types/DataType";
import FormComponent from "./components/FormComponent";

const Entreprises: React.FC = () => {
  const [entreprises, setEntreprises] = useState<EntrepriseType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idEntreprise, setIdEntreprise] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListEntreprises();
      setEntreprises(res.data);
    };
    fetchData();
  }, [entreprises]);

  const handleEdit = (id: string) => {
    // Logique de modification
    console.log(`Modifier l'entreprise avec l'ID ${id}`);
    setIdEntreprise(id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    deleteEntrepriseById(id).then((res: any) => {
      const newList = entreprises.filter((el) => {
        return el.id !== id;
      });
      setEntreprises(newList);
      alert("deleted");
    });
  };

  const handleCreate = async () => {
    // Logique de création d'entreprise
    setIsModalOpen(true);
    console.log("Créer une nouvelle entreprise");
  };

  return (
    <div>
      <button
        onClick={handleCreate}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Nouvelle Entreprise
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entreprises.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.nom}</td>
              <td>{element.email}</td>
              <td>{element.adresse}</td>
              <td>
                {/* <button onClick={() => handleEdit(element.id)}>Modifier</button>
                <button onClick={() => handleDelete(element.id)}>
                  Supprimer
                </button> */}

                <button
                  onClick={() => handleEdit(element.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(element.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <FormComponent
              entreprises={entreprises}
              setEntreprises={setEntreprises}
              setIsModalOpen={setIsModalOpen}
              idEntreprise={idEntreprise}
              setIdEntreprise={setIdEntreprise}
            ></FormComponent>
          </div>
        </div>
      )}
    </div>
  );
};

export default Entreprises;
