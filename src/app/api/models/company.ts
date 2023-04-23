import { Address } from "./address";

export interface Company {
    name: string;
    businessName: string;
    phoneCode: string;
    phoneNumber: string;
    email: string;
    addressId: number;
    address: Address;
    contacts?: any;
    id: number;
    createdUser: number;
    createdDate: Date;
    updatedUser: number;
    updatedData?: any;
    isActive: boolean;
}