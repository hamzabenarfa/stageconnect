import axios, { AxiosInstance } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

export async function getOfferByEntreprise(id:string) {
  try {
    const response = await instance.get(`/offre`);
    const filteredData = response.data.filter((item) => item.entrepriseId === id);
    return filteredData;
    } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

