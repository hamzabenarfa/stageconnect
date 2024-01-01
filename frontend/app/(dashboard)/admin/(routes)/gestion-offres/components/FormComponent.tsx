import {
  addOffre,
  editOffreById,
  getOffreById,
} from "@/services/OffreApi";
import { OffreType } from "@/types/DataType";
import React, { useEffect, useState } from "react";

interface ModalProps {
 offres:OffreType [];
  setOffres: React.Dispatch<React.SetStateAction<OffreType[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  idOffre: string;
  
  setIdOffre: React.Dispatch<React.SetStateAction<string>>;
}

const FormComponent: React.FC<ModalProps> = ({
  
  offres,
  setOffres,
  setIsModalOpen,
  idOffre,
  setIdOffre,
}) => {
  const [title, setTitle] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [paid, setPaid] = useState<boolean>(true);
  const [img, setImg] = useState<string>("");
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveData();
  };

  const saveData = () => {
    if (idOffre) {
      // Si idOffre existe, on édite l'offre existante
      editOffreById(idOffre, title, company, place, duration, paid, img).then(() => {
        const newObj: OffreType = {
          id: idOffre,
          title: title,
          company: company,
          place: place,
          duration: duration,
          paid: paid,
          img: img,
        };

        // Utiliser la méthode map pour créer un nouveau tableau avec l'objet mis à jour
        const updatedOffres: OffreType[] = offres.map(
          (offre) => (offre.id === idOffre ? newObj : offre)
        );

        // Mettre à jour l'état avec le nouveau tableau
        setOffres(updatedOffres);
        setIsModalOpen(false);
        setIdOffre("");
      });
    } else {
      // Si idOffre n'existe pas, on ajoute une nouvelle offre
      addOffre(title, company, place, duration, paid, img).then(() => {
        const newObj = {
          id: "6563b3ec03c9e12c4e1fc67d",
          title: title,
          company: company,
          place: place,
          duration: duration,
          paid: paid,
          img: img,
        };

        // Ajouter la nouvelle offre à la liste actuelle
        setOffres([...offres, newObj]);
        setIsModalOpen(false);
      });
    }
  };

  useEffect(() => {
    if (idOffre) {
      // Si idOffre existe, on récupère les détails de l'offre
      getOffreById(idOffre).then((res: any) => {
        setTitle(res.data.title);
        setCompany(res.data.company);
        setPlace(res.data.place);
        setDuration(res.data.duration);
        setPaid(res.data.paid);
        setImg(res.data.img);
      });
    }
  }, 
  [idOffre]);;
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="your title "
        />
        
      </div>
    
      <div className="mb-2">
        <label
          htmlFor="company"
          className="block text-gray-700 text-sm font-bold mb-2">
         Company Name 
        </label>
        <input
          type="string"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="name"
        />
      </div>
      <div className="mb-4">
  <label
    htmlFor="place"
    className="block text-gray-700 text-sm font-bold mb-2"
  >
    Place
  </label>
  <input
    type="text"
    id="place"
    value={place}
    onChange={(e) => setPlace(e.target.value)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter place"
  />
</div>
        <label
          htmlFor="duration"
          className="block text-gray-700 text-sm font-bold mb-2">
         Duration
        </label>
        <input
          type="string"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="duration"
        />
        <div className="mb-4">
  <label
    htmlFor="paid"
    className="block text-gray-700 text-sm font-bold mb-2"
  >
    Paid
  </label>
  <input
    type="checkbox"
    id="paid"
    checked={paid}
    onChange={(e) => setPaid(e.target.checked)}
    className="form-checkbox h-5 w-5 text-blue-500"
  />
</div>

        
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
        <button
          onClick={() => setIsModalOpen(false)}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Fermer
        </button>
      </div>
    </form>
  );
};

export default FormComponent;