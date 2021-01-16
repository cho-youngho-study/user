import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;
 
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

//비밀번호를 암호화 시킨다. 
UserSchema.pre('save', function (next) {
    let user = this;
    //비밀번호가 변경되면 실행
    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
});

const model = mongoose.model("User",UserSchema);
export default model;