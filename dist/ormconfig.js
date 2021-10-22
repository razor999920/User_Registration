"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root999920',
    database: 'NestJS_User',
    entities: ['dist/src/users/entities/**/*.entity.js'],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map