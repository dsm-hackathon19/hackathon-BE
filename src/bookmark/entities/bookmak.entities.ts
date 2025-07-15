import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('bookmark') //테이블 이름
export class Bookmark{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    bookmark:string;

    @Column()
    user_id:string;
}