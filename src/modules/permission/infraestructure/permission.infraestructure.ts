import DatabaseBootstrap from "../../../server/database.bootstrap";
import { Permission } from "../domain/permission";
import { PermissionRepository } from "../domain/permission.repository";
import { PermissionEntity } from "../../../model/permission.entity";
import { PermissionModelDto } from "./dto/permission-model.dto";

export class PermissionInfraestructure implements PermissionRepository{
    getAll(): Permission[] {
        throw new Error("Method not implemented.");
    }
    async insert(permission: Permission){
        const repository = DatabaseBootstrap.AppDataSource.getRepository(PermissionEntity);
        const permissionEntity = PermissionModelDto.fromDomainToData(permission);
        await repository.save(permissionEntity);
    }

}