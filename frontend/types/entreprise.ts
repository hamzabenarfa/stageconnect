export interface DataItem {
    id: string;
    title: string;
    place: string;
    duration: number;
    description: string;
    entrepriseId: string;
    studentIds : string[];
    status? : boolean;
    nom? : string;
  };