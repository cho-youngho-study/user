import userDB from "../models/User"

export const home = (req,res) =>{
    res.render('index', { title: 'Express' });
}

export const register = (req,res) =>{
    // 클라이언트에서 정보를 가져와서 db에 넣어준다.
    const user = new userDB(req.body)
    //save하기 전에 비밀번호 암호화 해야 한다.
    user.save((err, data)=>{
        if(err){
            return res.json({success: false, err})
        }else{
            return res.status(200).json({
                success: true
            })
        }
    })
}

export const login = (req,res) =>{
    userDB.findOne({email: req.body.email},(err, userInfo)=>{
        if(!userInfo){
            return res.json({
                success: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        user.comparePassword(req.body.password, (err, isMatch) =>{
            if(!isMatch){
                return res.json({
                    success:false,
                    message: "비밀번호가 틀렸습니다."
                })
            }
            //토큰 생성
            user.generatorToken((err,user)=>{

            })
        })
    })
}