import axios from "axios";
import { EntrepriseType } from "../types/DataType";

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * The above function is a JavaScript function that uses the axios library to make an HTTP GET request
 * to an API endpoint and returns the result.
 * @returns the result of the axios.get() method, which is a promise.
 */
export function getListEntreprises(): any {
  try {
    const result = axios.get(api_url + "api/entreprise");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function addEntreprise(
  nom: string,
  email: string,
  adresse: string
): any {
  const obj = {
    nom: nom,
    email: email,
    adresse: adresse,
  };
  try {
    const result = axios.post(api_url + "api/entreprise", obj);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function editEntrepriseById(
  id: string,
  nom: string,
  email: string,
  adresse: string
): any {
  const obj = {
    nom: nom,
    email: email,
    adresse: adresse,
  };
  try {
    const result = axios.put(`${api_url}api/entreprise/${id}`, obj);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function deleteEntrepriseById(id: string): any {
  try {
    const result = axios.delete(`${api_url}api/entreprise/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function getEntrepriseById(id: string): any {
  try {
    const result = axios.get(`${api_url}api/entreprise/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}
