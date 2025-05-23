import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    fone: string;

    @Column()
    password: string;

    @BeforeInsert()
    async encryptPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }

}
