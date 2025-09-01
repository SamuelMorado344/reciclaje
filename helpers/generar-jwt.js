const jwt= require('jsonwebtoken');

const generarJWT=( uid = '')=>{
   
    return new Promise((resolve,reject)=>{
        let status=false;
        
        
        if (uid != process.env.USER_TOKEN)
        {
            msg ="User code does not correspond to create token";
            resolve({status,msg, token:'',uid});
            
        }
        
            const payload = {uid};
            jwt.sign(payload,process.env.SECRET_TOKEN,{
                expiresIn:'24h'
            },(err,token) =>{
                if (err){
                    resolve({status,msg:'the token was not generated',token:'',uid});
                }else{
                    status=true;
                    resolve({status,msg:'OK',token,uid});
                }
            })
        
    })
}






module.exports={generarJWT}