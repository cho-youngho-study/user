import userDB from "../models/User"

export const home = (req,res) =>{
    res.render('index', { title: 'Express' });
}

export const register = (req,res) =>{
    // 클라이언트에서 정보를 가져와서 db에 넣어준다.
    
    const user = new userDB(req.body)
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