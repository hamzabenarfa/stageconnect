import axios, { AxiosInstance } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/user",
  headers: {
    "Content-type": "application/json",
  },
});

export async function login(id: string) {
  try {
    const response = await instance.get(`http://localhost:8080/api/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
