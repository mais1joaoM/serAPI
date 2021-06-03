import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid";

@Entity("company")
class Company {

    @PrimaryColumn()
    id: string;

    @Column()
    address: string;

    @Column()
    cnpj: string;

    @Column()
    companyname: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: string;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export { Company }