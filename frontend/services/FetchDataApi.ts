
const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchApiData = async (): Promise<[]> => {
  try {
    const response = await fetch(api_url+'api/entreprise');
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données', error);
    throw error;
  }
};
