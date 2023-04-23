import { Profile } from './profile';
export class User {
    id?: number;
    name?: string;
    email?: string;
    IsActive?: boolean;
    IsAuthorised?: boolean;
    profile?: Profile;
  
    constructor() { }
  }
  