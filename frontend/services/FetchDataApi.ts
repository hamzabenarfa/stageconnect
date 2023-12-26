"use client"
import { InscriEntType } from "@/types/DataType";

export const fetchApiData = async (): Promise<InscriEntType[]> => {
  try {
    const response = await fetch('http://localhost:8080/api/entreprise');
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data: InscriEntType[] = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données', error);
    throw error;
  }
};
