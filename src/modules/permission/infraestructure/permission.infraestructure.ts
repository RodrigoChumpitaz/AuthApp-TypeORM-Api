import DatabaseBootstrap from "../../../server/database.bootstrap";
import { Permission } from "../domain/permission";
import { PermissionRepository } from "../domain/permission.repository";
import { PermissionEntity } from "../../../model/permission.entity";
import { PermissionModelDto } from "./dto/permission-model.dto";


export class PermissionInfraestructure implements PermissionRepository{
    async getAll(): Promise<Permission[] | Error> {
        try {
            const repository = DatabaseBootstrap.AppDataSource.getRepository(PermissionEntity);
            const permissionsEntity = await repository.find();
            const permissions: Permission[] = PermissionModelDto.fromDataToDomain(permissionsEntity);
            return permissions;
        } catch (error) {
            return new Error(error);
        }
    }
    async insert(permission: Permission){
        try {
            const repository = DatabaseBootstrap.AppDataSource.getRepository(PermissionEntity);
            const permissionEntity = PermissionModelDto.fromDomainToData(permission);
            await repository.save(permissionEntity);
        } catch (error) {
            return new Error(error);
        }
    }

    async update(slug: string, permission: Partial<Permission>): Promise<void | Error> {
        try {
            const repository = DatabaseBootstrap.AppDataSource.getRepository(PermissionEntity);
            const permissionEntity = await repository.findOne({ where: { slug } })
            permissionEntity.name = permission.properties().name;
            await repository.save(permissionEntity);
        } catch (error) {
            return new Error(error);
        }
    }

    async disabled(slug: string): Promise<void | Error> {
        try {
            const repository = DatabaseBootstrap.AppDataSource.getRepository(PermissionEntity);
            const permissionEntity = await repository.findOne({ where: { slug } })
            await repository.save(permissionEntity);
        } catch (error) {
            return new Error(error);
        }
    }
}