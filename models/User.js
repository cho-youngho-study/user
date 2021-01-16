import mongoose from "mongoose";
 
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        maxlength: 50,
        required: 'name is required'
    },
    email:{
        type: String,
        trim: true,
        unique: 1,
        required:"'email is required'"
    },
    password:{
        type: String,
        minlength: 5,
        required: "password is required"
    },
    lastname:{
        type:String,
        maxlength: 50
    },
    role:{ //0: 일반 유저, 1: 관리자
        type:Number,
        default: 0
    },
    image: String,
    token: String, //토큰 생성(유효성 관리)
    tokenExp: Number //토큰 유효기간
});

const model = mongoose.model("User",UserSchema);
export default model;