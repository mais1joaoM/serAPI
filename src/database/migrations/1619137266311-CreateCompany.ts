import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompany1619137266311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.createTable(
            new Table({
                name: "company",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "companyname",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("company")

    }

}
