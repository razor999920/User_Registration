"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(usersResporitory) {
        this.usersResporitory = usersResporitory;
        this.users = [
            { id: 0, name: 'Raza', username: 'razor', password: 'test123' },
            { id: 1, name: 'Indeep', username: 'indeep99', password: 'test123' },
            { id: 2, name: 'Marc', username: 'marc99', password: 'test123' },
        ];
    }
    findUsers() {
        return this.usersResporitory.find();
    }
    async findById(id) {
        try {
            const user = this.usersResporitory.findOneOrFail(id);
            return user;
        }
        catch (err) {
            throw err;
        }
    }
    async findByUsername(username) {
        try {
            const user = this.usersResporitory.findOne(username);
            return user;
        }
        catch (err) {
            throw err;
        }
    }
    createUser(createUserDto) {
        const newUser = this.usersResporitory.create(Object.assign({}, createUserDto));
        return this.usersResporitory.save(newUser);
    }
    async updateUser(body) {
        const user = await this.findById(body.id);
        user.name = body.name;
        user.username = body.username;
        user.password = body.password;
        return this.usersResporitory.save(user);
    }
    async deleteUser(id) {
        const user = await this.findById(id);
        return this.usersResporitory.remove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map