import { Permission } from "../../domain/permission";
import { PermissionEntity } from "../../../../model/permission.entity";

export class PermissionModelDto {

    static fromDataToDomain(permissionEntity: PermissionEntity[]): Permission[]{
        return permissionEntity.map(permission => {
            return new Permission({ id: permission.id ,name: permission.name, slug: permission.slug, role: permission.role, active: permission.active, createAt: permission.createAt, updateAt: permission.updateAt, deleteAt: permission.deleteAt })
        })
    }

    static fromDomainToData(permission: Permission): PermissionEntity{
        const permissionProperties = permission.properties();

        const permissionEntity = new PermissionEntity();
        permissionEntity.name = permissionProperties.name;
        permissionEntity.slug = permissionProperties.slug;
        permissionEntity.role = permissionProperties.role;
        permissionEntity.active = permissionProperties.active;
        permissionEntity.createAt = permissionProperties.createAt;
        permissionEntity.updateAt = permissionProperties.updateAt;
        permissionEntity.deleteAt = permissionProperties.deleteAt;

        return permissionEntity;
    }
}