
export interface Address {
    street: string;
    number: string;
    district: string;
    complement?: any;
    postalCode: string;
    countryId: number;
    country?: any;
    stateId: number;
    state?: any;
    cityId: number;
    city?: any;
    id: number;
    createdUser: number;
    createdDate: Date;
    updatedUser: number;
    updatedData?: any;
    isActive: boolean;
}