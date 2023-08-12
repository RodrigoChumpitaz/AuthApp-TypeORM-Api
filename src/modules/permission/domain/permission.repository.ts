import { Permission } from "./permission"

export interface PermissionRepository{
    getAll(): Permission[];
    insert(permission: Permission): Promise<void>;
}