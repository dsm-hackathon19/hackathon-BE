import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('setup')
export class Setup{
    @PrimaryGeneratedColumn('uuid')
    id:String;

    @Column()
    progress:String;

    @Column({ type: 'timestamp' })
    study_time: Date;

    @Column()
    level:String;
    
    @Column('bigint')
    levelPrefer: number;
    
    @Column()
    user_id:String
}