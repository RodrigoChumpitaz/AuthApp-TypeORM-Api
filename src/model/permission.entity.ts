import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../core/infraestructure/base-entity";
import { RoleEntity } from "./role.entity";

@Entity('permission')
export class PermissionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    slug: string;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @ManyToMany(() => RoleEntity, role => role.permission)
    role: RoleEntity[];
}