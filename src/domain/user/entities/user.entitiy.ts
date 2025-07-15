import { Column, Entity } from "typeorm";


@Entity('user') //테이블 이름
export class User{
    @Column()
    user_id:string;

    @Column()
    user_password:string
}