import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('user') //테이블 이름
export class User{
    @PrimaryColumn()
    user_id:string;

    @Column()
    user_password:string
}