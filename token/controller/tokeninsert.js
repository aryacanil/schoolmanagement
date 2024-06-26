let FIRSTMODEL = require('../model/tokeninsertt')
const bcrypt = require("bcrypt")
var randtoken = require('rand-token');
const {validationResult}=require("express-validator")
const { languages } = require('../../languages/transalate');
module.exports.inserttoken= async (req, res) => {

    const errors = validationResult(req);          
    if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
    }
    
    else{


    var useremail=req.body.useremail
    var token_app_type=req.body.token_app_type;
    var password=req.body.password
    var lang = req.body.language;

    var language = await languages(lang);

    var check_email_phoneno= await FIRSTMODEL.selectemailpass(useremail)
 
    if(check_email_phoneno.rowCount > 0)
    {
    var hashpass = check_email_phoneno.rows[0].user_password
    var compare_password=await FIRSTMODEL.comparePassword(password,hashpass)
    if(compare_password==true){
    var token = randtoken.generate(5)
   
    var userid = check_email_phoneno.rows[0].user_id
    

    var selectuser=await FIRSTMODEL.selectuserid(userid)

    if(selectuser.rowCount>0){
        
        var update=await FIRSTMODEL.updatetoken(token,userid)
      
        res.send({result: true,msg:language.tokenupdated});
    }else{
        var insert = await FIRSTMODEL.inserttoken(userid,token,token_app_type)
        res.send({result: true,msg: language.loginsucessful });
    }

    }else{res.send({result: false,msg: language.passwordincorrect });}
    }
    else{res.send({result: false,msg: language.emailincorrect});}

}
}


