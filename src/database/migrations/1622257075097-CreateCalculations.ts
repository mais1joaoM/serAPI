import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCalculations1622257075097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "calculation",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "readingOne",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "readingTwo",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "readingThree",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "readingFour",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "readingFive",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "defaultValue",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "ures",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "udefault",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "weightedAverage",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "errorDefault",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "ue",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "company_id",
                        type: "varchar",
                        isUnique: true
                    },
                ]
            })
        )
        await queryRunner.createForeignKey(
            "calculation",
            new TableForeignKey({
                name: "FKCalculationCnpj",
                referencedTableName: "company",
                referencedColumnNames: ["cnpj"],
                columnNames: ["company_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("calculation")
    }

}
