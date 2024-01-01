
import { UserType } from "@/types/UserType";

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchApiData = async (): Promise<UserType[]> => {
  try {
    const response = await fetch(api_url+'api/user');
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data: UserType[] = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données', error);
    throw error;
  }
};

export const createUser = async (userData: Partial<UserType>): Promise<UserType> => {
  try {
    const response = await fetch(api_url+'api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création de l\'utilisateur');
    }

    const newUser: UserType = await response.json();
    return newUser;
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur', error);
    throw error;
  }
};
export const updateUser = async (id: string, updatedData: Partial<UserType>): Promise<UserType> => {
  try {
    const response = await fetch(`${api_url}api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
    }

    const updatedUser: UserType = await response.json();
    return updatedUser;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
    throw error;
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${api_url}api/user/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression de l\'utilisateur');
    }
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur', error);
    throw error;
  }
}