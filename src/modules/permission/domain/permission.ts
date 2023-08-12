export interface PermissionEssentials{
    readonly name: string;
    readonly slug: string;
}

export interface PermissionOptionals{
    readonly role: any[];
    readonly createAt: Date;
    readonly updateAt: Date | null;
    readonly deleteAt: Date | null;
}

export type PermissionProperties = PermissionEssentials & Partial<PermissionOptionals>;

export class Permission{
    private readonly id: number;
    private readonly slug: string;
    private name: string;
    private role: any[];
    private readonly createAt: Date;
    private updateAt: Date | null;
    private deleteAt: Date | null;

    constructor(properties: PermissionProperties){
        Object.assign(this, properties);
    }

    properties(): PermissionProperties{
        return {
            slug: this.slug,
            name: this.name,
            role: this.role,
            createAt: this.createAt,
            updateAt: this.updateAt,
            deleteAt: this.deleteAt
        }
    }

    update(properties: PermissionProperties){
        Object.assign(this, properties);
    }

    delete(){
        this.deleteAt = new Date();
    }
}

