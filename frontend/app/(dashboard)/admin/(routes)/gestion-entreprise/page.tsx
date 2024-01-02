"use client";

import { useState, useEffect } from "react";
import "./style.css";
// import {
//   deleteEntrepriseById,
//   getListEntreprises,
// } from "../../../../services/EntrepriseApi";
 import { EntrepriseType } from "@/types/DataType";
import FormComponent from "./components/FormComponent";
import { deleteEntrepriseById, getListEntreprises } from "@/services/EntrepriseApi";

const Entreprises: React.FC = () => {
  const [entreprises, setEntreprises] = useState<EntrepriseType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idEntreprise, setIdEntreprise] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListEntreprises();
      setEntreprises(res.data);
    };
    fetchData();
  }, [entreprises]);

  const handleDelete = async (id: string) => {
    await deleteEntrepriseById(id);
  }

  const handleEdit = (id: string) => {
    console.log(`Modifier l'entreprise avec l'ID ${id}`);
    setIdEntreprise(id);
    setIsModalOpen(true);
  };

  const handleCreate = async () => {
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
            <th>Location</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {entreprises.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.nom}</td>
              <td>{element.location}</td>
              <td>{element.phone}</td>
              <td>
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
