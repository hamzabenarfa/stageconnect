export interface DataItem {
    id: string;
    title: string;
    place: string;
    location: string;
    duration: number;
    phone: string;
    description: string;
    entrepriseId: string;
    studentIds : string[];
    status? : boolean;
    nom? : string;
  };