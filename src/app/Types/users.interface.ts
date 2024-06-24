export interface User {
    id: number;
    name?: string;
    email: string;
    password: string;
  }

export interface Error {
  message? : string;
  error?: string | null;
}