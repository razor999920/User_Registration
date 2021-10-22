"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMigration1633757266734 = void 0;
class UserMigration1633757266734 {
    constructor() {
        this.name = 'UserMigration1633757266734';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.UserMigration1633757266734 = UserMigration1633757266734;
//# sourceMappingURL=1633757266734-UserMigration.js.map