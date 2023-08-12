import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../core/infraestructure/base-entity";
import { PermissionEntity } from "./permission.entity";

@Entity('role')
export class RoleEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "varchar", length: 100 })
    description: string;

    @ManyToMany(() => PermissionEntity, permission => permission.role)
    @JoinTable({ name: 'role_permission' })
    permission: PermissionEntity[];
}