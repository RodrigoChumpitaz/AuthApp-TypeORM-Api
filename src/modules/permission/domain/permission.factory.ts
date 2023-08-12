import { Permission, PermissionProperties } from "./permission";
import {v4 as uuidv4} from "uuid"

export class PermissionFactory{
    static error: any = new Error();
    static create(name: string, role?: any[]): Permission{
        if(name.length < 3){
            this.error.message = 'Name must be at least 3 characters long';
            this.error.statusCode = 400;
            throw this.error;
        }
        
        const properties: PermissionProperties = {
            slug: uuidv4(),
            name,
            role,
        }

        return new Permission(properties);
    }   
}