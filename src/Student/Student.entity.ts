import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Student{

    @PrimaryColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    password:string

}