import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('memo')
export class Memo{
    
    @PrimaryGeneratedColumn('uuid')  //memo 식별 id
    id:string;

    @Column()
    user_id:string;

    @Column()
    person:string;
    
    @Column()
    memo: string;
}