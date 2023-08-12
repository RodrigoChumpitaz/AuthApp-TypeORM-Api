import { BaseEntity } from "../core/infraestructure/base-entity"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: 100})
    username: string;

    @Column({type: "varchar", length: 100})
    lastname: string;

    @Column({type: "varchar", length: 100})
    email: string;

    @Column({type: "varchar", length: 150})
    password: string;

    @Column({type: "boolean", default: true})
    active: boolean;

}