import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    thumbNail: String,
})
