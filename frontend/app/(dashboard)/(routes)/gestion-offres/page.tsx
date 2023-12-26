// @jsxImportSource react
// @ts-nocheck
"use client"
import React, { useState, useEffect } from "react";
import "./style.css";
import { deleteOffreById, editOffreById, getListOffres } from "../../../../services/OffreApi";
import { OffreType } from "@/types/DataType";
import FormComponent from "./components/FormComponent";
const Offres: React.FC = () => {
  const [offres, setOffres] = useState<OffresType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idOffre, setIdOffre] = useState<string>("");
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getListOffres();
      setOffres(res.data);
    };
    fetchData();
  }, [offres]);

  const handleEdit = (id: string) => {
    console.log(`Modifier l'offre avec l'ID ${id}`);
    editOffreById(id)
    setIdOffre(id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
     const res = await deleteOffreById(id);
      console.log(res);
      // const newList = offres.filter((el) => el.id !== id);
      // setOffres(newList);
      // alert("Deleted successfully");
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Error deleting");
    }
  };

  const handleCreate = () => {
    setIsModalOpen(true);
    setIdOffre(null);
    console.log("Créer une nouvelle offre");
  };
  return (
    <div className="container">
      <h1>Gestion des Offres</h1>
      <button onClick={handleCreate}>Add Offres</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Company</th>
            <th>Place</th>
            <th>Duration</th>
            <th>Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {offres.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.company}</td>
              <td>{element.place}</td>
              <td>{element.duration}</td>
              <td>{element.paid ? 'paid ' : 'not paid'}</td>
              <td>
                <button onClick={() => handleEdit(element.id)}>Modifier</button>
                <button onClick={() => handleDelete(element.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <FormComponent
              offres={offres}
              setOffres={setOffres}
              setIsModalOpen={setIsModalOpen}
              setIdOffre={setIdOffre}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Offres;
