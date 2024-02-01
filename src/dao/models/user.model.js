import mongoose from "mongoose";

const userCollection = "users";

const UserSchema = new mongoose.Schema({
    first_name: {type:String, require:true, max:100},
    last_name: {type:String, require:true, max:100},
    email: {type:String, require:true, max:100},
    password: {type:String, require:true, max:100},
    age: {type:Number, require:true, max:3}
})

export const UserModel = mongoose.model(userCollection, UserSchema);
