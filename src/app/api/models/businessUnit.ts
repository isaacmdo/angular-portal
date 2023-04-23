import { Company } from "./company";
    export interface BusinessUnit {
        companyId?: number;
        company?: Company;
        id?: number;
        createdUser?: number;
        createdDate?: Date;
        updatedUser?: number;
        updatedData?: any;
        isActive?: boolean;
    }

