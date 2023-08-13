import { Permission } from "./permission"

export interface PermissionRepository{
    getAll(): Promise<Permission[] | Error>;
    insert(permission: Permission): Promise<void | Error>;
    update(slug: string, permission: Partial<Permission>): Promise<void | Error>;
    disabled(slug: string): Promise<void | Error>;
}