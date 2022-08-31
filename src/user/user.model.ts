import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cpf: { type: String, required: true },
    birthday: { type: String, required: true },
    motherName: { type: String, require: true },
    //active: { type: Boolean, required: true },
});

export interface User {
    name: string;
    login: string;
    password: string;
    email: string;
    phone: string;
    cpf: string;
    birthday: string;
    motherName: string;
    //active: boolean;
}