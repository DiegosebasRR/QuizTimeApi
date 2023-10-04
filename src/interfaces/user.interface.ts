import { Auth } from "./auth.interface";

export interface User extends Auth {
  firstname: string;
  lastname: string;
  image: any;
}
