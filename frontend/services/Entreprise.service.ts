import axios from "axios";

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create({
  baseURL: api_url+"api",
  headers: {
    "Content-type": "application/json",
  },
});

export async function getOfferByEntreprise(id:string) {
  try {
    const response = await instance.get(`/offre`);
    const filteredData = response.data.filter((item: { entrepriseId: string; }) => item.entrepriseId === id);
    return filteredData;
    } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export async function getEnterpriseFromUser(id: string) {
  try {
    const response = await instance.get("/user/"+id);
    const data = response.data;
    const enterpriseId = data?.entreprise?.id;
    return enterpriseId;
  } catch (error) {
    console.error("Failed to get enterprise from user:", error);
    throw error;
  }
}

