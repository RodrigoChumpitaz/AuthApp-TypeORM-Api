import { Permission } from "../modules/permission/domain/permission";
import { PermissionRepository } from "../modules/permission/domain/permission.repository";

export default class PermissionService{
    private readonly repository: PermissionRepository;
    
    constructor(repository: PermissionRepository){
        this.repository = repository;
    }

    getAll(): Permission[] {
        return this.repository.getAll();
    }
    async insert(permission: Permission): Promise<void> {
        return await this.repository.insert(permission);
    }
}