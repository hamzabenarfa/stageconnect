import axios, { AxiosInstance } from 'axios';

interface UserData {
  email: string;
  password: string;
}

class AuthService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:8080/api/auth',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  public async login(email: string, password: string): Promise<UserData> {
    try {
      const response = await this.http.post<UserData>("/login", { email, password });
      
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  public async register(nom: string, prenom: string, email: string, password: string): Promise<UserData> {
    try {
      const response = await this.http.post<UserData>("/register", { nom,prenom,email, password });
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
