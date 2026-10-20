import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductAndEmployee1700000000000
  implements MigrationInterface
{
  name = "CreateProductAndEmployee1700000000000";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "products" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "category" VARCHAR NOT NULL,
        "price" NUMERIC(10,2) NOT NULL,
        "quantity" INTEGER NOT NULL
      )`);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "employees" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "email" VARCHAR NOT NULL,
        "phone" VARCHAR NOT NULL,
        "password" VARCHAR NOT NULL,
        "age" INTEGER NOT NULL,
        "years_of_working" INTEGER NOT NULL
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "employees"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "products"`);
  }
}
