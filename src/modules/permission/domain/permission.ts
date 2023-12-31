export interface PermissionEssentials{
    readonly name: string;
    readonly slug: string;
}

export interface PermissionOptionals{
    readonly id: number;
    readonly role: any[];
    readonly active: boolean;
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
    private active: boolean;
    private readonly createAt: Date;
    private updateAt: Date | null;
    private deleteAt: Date | null;

    constructor(properties: PermissionProperties){
        Object.assign(this, properties);
    }

    properties(): PermissionProperties{
        return {
            id: this.id,
            slug: this.slug,
            name: this.name,
            role: this.role,
            active: this.active,
            createAt: this.createAt,
            updateAt: this.updateAt,
            deleteAt: this.deleteAt
        }
    }

    update(properties: PermissionProperties){
        Object.assign(this, properties);
        this.updateAt = new Date();
    }

    delete(){
        this.active = false;
        this.deleteAt = new Date();
    }
}
