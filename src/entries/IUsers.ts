import { ERole } from './ERules';

export interface User {
  id?: string;
  lastName: string;
  firstName: string;
  secondName: string;
  birthday: string;
  email: string;
  department: string;
  position: string;
  phone?: string;
  role?: ERole;
  gender: string;
}
