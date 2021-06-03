import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid";
import { Company } from "./Company";

@Entity("calculation")
class Calculation {


    @PrimaryColumn()
    id: String;

    @Column()
    readingOne: number;

    @Column()
    readingTwo: number;

    @Column()
    readingThree: number;

    @Column()
    readingFour: number;

    @Column()
    readingFive: number;

    @Column()
    defaultValue: number;

    @Column()
    ures: number;

    @Column()
    udefault: number;

    @Column()
    weightedAverage: number;

    @Column()
    errorDefault: number;

    @Column()
    ue: number;

    @JoinColumn({ name: "company_id" })
    @ManyToOne(() => Company)
    company: Company;

    @Column()
    company_id: string;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }


}

export { Calculation }