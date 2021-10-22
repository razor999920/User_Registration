import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UserMigration1633757266734 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
