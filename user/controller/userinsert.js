let FIRSTMODEL = require('../model/userinsertt')
const bcrypt = require("bcrypt")
const {validationResult}=require("express-validator")
const { languages } = require('../../languages/transalate');
module.exports.insertuser= async (req, res) => {

    const errors = validationResult(req);          
    if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
    }
    
    else{
        
    var username=req.body.username;
    var userpassword=req.body.userpassword
    var usermobileno=req.body.usermobileno
    var useremail=req.body.useremail;
    var lang = req.body.language;
    var language = await languages(lang);
    

    var insertedemail= await FIRSTMODEL.email(useremail)
    
    if(insertedemail.rowCount==0)
    {     
    var hashpassword=await FIRSTMODEL.hashPassword(userpassword)
    
    var insert=await FIRSTMODEL.userinsert(username,usermobileno,useremail,hashpassword)
    if(insert.rowCount>0){
        res.send({result:true,msg:language.registrationsucessfully})
    }

    }else{
        res.send({result:false,msg:language.emailalreadyexist})
    }
}
}