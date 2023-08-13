import { PermissionOptionals } from "src/modules/permission/domain/permission";

export interface RoleInterface{
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly permission: any[];
    readonly active: boolean;
    readonly createAt: Date | null;
    readonly updateAt: Date | null;
    readonly deleteAt: Date | null;
}

export class Role{
    private readonly id: number;
    private name: string;
    private description: string;
    private permission: any[]
    private active: boolean;
    private readonly createAt: Date | null;
    private updateAt: Date | null;
    private deleteAt: Date | null;

    constructor(properties: Partial<RoleInterface>){
        Object.assign(this, properties);
    }

    properties(): RoleInterface{
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            permission: this.permission,
            active: this.active,
            createAt: this.createAt,
            updateAt: this.updateAt,
            deleteAt: this.deleteAt
        }
    }

    update(properties: Partial<RoleInterface>){
        this.updateAt = new Date();
        Object.assign(this, properties);
    }

    delete(){
        this.active = false;
        this.deleteAt = new Date();
    }
}