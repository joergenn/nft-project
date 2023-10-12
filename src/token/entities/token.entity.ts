import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Token {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "bigint",
        unique: true,
    })
    tokenId: number;

    @Column()
    owner: string;

    @Column({
        type: "json",
    })
    metadata: Object;
}