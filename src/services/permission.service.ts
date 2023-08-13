import { Permission } from "../modules/permission/domain/permission";
import { PermissionRepository } from "../modules/permission/domain/permission.repository";

export default class PermissionService{
    private readonly repository: PermissionRepository;
    
    constructor(repository: PermissionRepository){
        this.repository = repository;
    }

    async getAll(): Promise<Permission[] | Error> {
        return await this.repository.getAll();
    }
    async insert(permission: Permission): Promise<void | Error> {
        return await this.repository.insert(permission);
    }

    async update(slug: string, permission: Partial<Permission>): Promise<void | Error> {
        return await this.repository.update(slug, permission);
    }

    async disabled(slug: string): Promise<void | Error> {
        return await this.repository.disabled(slug);
    }
}