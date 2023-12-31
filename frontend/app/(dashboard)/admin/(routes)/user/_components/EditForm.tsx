// EditForm.tsx
import React, { useState, useEffect } from "react";
import { UserType } from "@/types/UserType";

interface EditFormProps {
  user: UserType | undefined;
  onSubmit: (updatedData: Partial<UserType>) => void;
}

const EditForm: React.FC<EditFormProps> = ({ user, onSubmit }) => {
  const [editedData, setEditedData] = useState<Partial<UserType>>({
    email: user?.email || "",
    password: user?.password || "",
  });

  useEffect(() => {
    setEditedData({
      email: user?.email || "",
      password: user?.password || "",
    });
  }, [user]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(editedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>EDIT USER!</h2>
    
  
      <label>
        E-MAIL:
        <input
          type="text"
          name="email"
          value={editedData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        PASSWORD:
        <input
          type="password"
          name="password"
          value={editedData.password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default EditForm;
