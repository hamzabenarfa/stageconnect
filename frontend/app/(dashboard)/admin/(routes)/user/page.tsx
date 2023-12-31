import React, { useState, useEffect } from "react";
import ApiPage from "./_components/FormComponent";

export default function User() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1>GESTION USERS!</h1>
      <ApiPage />
    </div>
  );
}

/*"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import {
  deleteUserById,
  getListUsers,
} from "../../../../services/UserApi";
import { UserType } from "@/types/DataType";
import FormComponent from "./_components/FormComponent";


const Users: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idUser, setIdUser] = useState<string>("");

useEffect(() => { 
  const fetchData = async () => {
    try {
      const res = await getListUsers();
console.log(res.data); // Make sure it's an array
setUsers(res.data);

      setIdUser("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
 fetchData() 
 ;
}, []);

  const handleEdit = (id: string) => {

    console.log(`Edit l'User avec l'ID ${id}`);
    setIdUser(id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    deleteUserById(id).then((res: any) => {
      const newList = users.filter((el) => el.id !== id);
      setUsers(newList);
      alert("deleted");
    });
  };

  const handleCreate = async () => {
  
    setIsModalOpen(true);
    console.log("Ajouter un nouveau utilisateur");
  };

  return (
    <div>
      <button onClick={handleCreate} className="button">
      ADD NEW USER!
    </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>PRENOM</th>
            <th>E-MAIL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((element) => (
            <tr key={element.id as string}>
              <td>{element.id}</td>
              <td>{element.nom}</td>
              <td>{element.prenom}</td>
              <td>{element.email}</td>
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
              user={users}
              setUsers={setUsers}
              setIsModalOpen={setIsModalOpen}
              idUser={idUser}
            ></FormComponent>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;*/
