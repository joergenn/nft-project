import { MigrationInterface, QueryRunner } from "typeorm";

export class Token1697097120301 implements MigrationInterface {
    name = 'Token1697097120301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`token\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tokenId\` bigint NOT NULL, \`owner\` varchar(255) NOT NULL, \`metadata\` json NOT NULL, UNIQUE INDEX \`IDX_bb402e674ae9363a98e291ac2b\` (\`tokenId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_bb402e674ae9363a98e291ac2b\` ON \`token\``);
        await queryRunner.query(`DROP TABLE \`token\``);
    }

}
