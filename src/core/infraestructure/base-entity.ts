import { Column } from "typeorm";

export class BaseEntity{
    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false})
    createAt: Date;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false})
    updateAt: Date;

    @Column({type: "timestamp", nullable: true})
    deleteAt: Date;
}