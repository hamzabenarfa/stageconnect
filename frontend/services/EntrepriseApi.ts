import axios from "axios";

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;


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
  location: string,
  phone: string,
): any {
  const obj = {
    nom: nom,
    location: location,
    phone:phone,
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
  location: string,
  phone: string,
): any {
  const obj = {
    nom: nom,
    location: location,
    phone:phone,
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
