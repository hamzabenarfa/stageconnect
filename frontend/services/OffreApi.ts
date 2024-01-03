import axios from "axios";
import { OffreType } from "../types/OffreType";

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export function getListOffres(): any {
  try {
    const result = axios.get(api_url + "api/offre");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function addOffre(
  title:String,
  company:String,
  place:String,
  duration:String,
  paid:Boolean,
  img:String,
): any {
  const obj = {
   
    title:title,
    company:company,
    place:place,
    duration:duration,
    paid:paid,
    img:img,
  };
  try {
    const result = axios.post(api_url + "api/offre", obj);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function editOffreById(
  id: String,
  title?: String,
  company?: String,
  place?:String,
  duration?:String,
  paid?: Boolean,
  img?:String,
): any {
  const obj = {
    
    title:title,
    company:company,
    place:place,
    duration:duration,
    paid:paid,
    img:img,
  };
  try {
    const result = axios.put(`${api_url}api/offre/${id}`, obj);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function deleteOffreById(id: string): any {
  try {
    const result = axios.delete(`${api_url}api/offre/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function getOffreById(id: string): any {
  try {
    const result = axios.get(`${api_url}api/offre/id/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}
