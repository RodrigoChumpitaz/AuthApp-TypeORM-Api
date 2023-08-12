import { Permission } from "../../domain/permission";
import { PermissionEntity } from "../../../../model/permission.entity";

export class PermissionModelDto {
    static fromDomainToData(permission: Permission): PermissionEntity{
        const permissionProperties = permission.properties();

        const permissionEntity = new PermissionEntity();
        permissionEntity.name = permissionProperties.name;
        permissionEntity.slug = permissionProperties.slug;
        permissionEntity.role = permissionProperties.role;
        permissionEntity.createAt = permissionProperties.createAt;
        permissionEntity.updateAt = permissionProperties.updateAt;
        permissionEntity.deleteAt = permissionProperties.deleteAt;

        return permissionEntity;
    }
}