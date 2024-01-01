export interface UserType {
    data(data: any): unknown;
    id: string;
    email: string;
    password: string;
    role: string;
    entreprise: string[];
    student : string[];
  };