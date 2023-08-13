import { Permission, PermissionProperties } from "./permission";
import {v4 as uuidv4} from "uuid"

export class PermissionFactory{
    static error: any = new Error();
    static create(name: string, role?: any[]): Permission{
        if(name.length < 3){
            this.error.message = `The atributte name: /${name}/ is not valid, the name must be greater than 3 characters`;
            this.error.statusCode = 400;
            return this.error;
        }
        
        const properties: PermissionProperties = {
            slug: uuidv4(),
            name,
            role,
        }

        return new Permission(properties);
    }   
}