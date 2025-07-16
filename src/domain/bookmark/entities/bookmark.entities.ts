import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('bookmark') //테이블 이름
export class Bookmark{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    book_mark:string;

    @Column()
    user_id:string;
}