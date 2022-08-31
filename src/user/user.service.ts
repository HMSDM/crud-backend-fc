import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';


@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {
    }

    async create(doc: User) {
        const result = await new this.userModel(doc).save();
        return result.id;
    }

    async remove(id: string) {
        await this.userModel.deleteOne({ id: id });
    }

    async login(login, password) {
        const user = await this.userModel.findOne(
            { login: login });

        if (user && password === user.password) {
            if (!user)
                return {
                    errorMsg: "usuario inativo",
                    errorCode: 1000
                };

            return user;
        }

        return {
            errorMsg: "Usuário e/ou senha inválidos, tente novamente",
            errorCode: 1001
        }
    }

    async emailVerify(email, mailService) {
        const user = await this.userModel.findOne(
            { email: email });;

        if (user) {
            await mailService.sendMail({
                to: email,
                from: 'melohenrique1999@gmail.com',
                subject: 'Recuperação de senha',
                text: "Sua senha é " + user.password,
            });
            return 'sucess'
        }
        else return 'E-mail inválido'
    }

    async findById(id: number) {
        const user = await this.userModel.findById(id);
        return user;
    }

    async listAllUsers() {
        const users = await this.userModel.find();
        return users;
    }

    async update(user: User) {
        await this.userModel.updateOne(user);

    }


}