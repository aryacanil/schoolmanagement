let FIRSTMODEL = require("../model/insertStudet");
const {validationResult}=require("express-validator")
const { languages } = require('../../languages/transalate');


module.exports.insertstudent_d= async (req, res) => {

    

    const errors = validationResult(req);           //validation
    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    } else 
    {
     

    var tokenkey=req.body.tokenkey
    var studentname = req.body.studentname;
    var studentage=req.body.studentage;
    var studentid=req.body.studentid;
    var classname=req.body.classname;
    var lang = req.body.language;

    var language = await languages(lang);
   
    
    var selecttokenkey=await FIRSTMODEL.checktokenkey(tokenkey)
    if(selecttokenkey.rowCount>0)
    {
        var selectstudentname=await FIRSTMODEL.checkstudentname(studentname)
        
        if(selectstudentname.rows==studentname){

    var classid=req.body.classname;
    var checkclassid = await FIRSTMODEL.checkid(classid)
    var checkstudentid= await FIRSTMODEL.checkstudentid(studentid)
    
    if(checkstudentid.rowCount > 0)
    {
        var id = checkstudentid.rows[0].checkclassid
        return res.send({result: true,msg:"student id  not found"});
    }
          
    
    else
    {

        var classid= await FIRSTMODEL.classid(classname)
        var id=classid.rows[0].class_id
        var insertstudent = await FIRSTMODEL.studentinsert(studentname,studentage,id);
        return res.send({result: true,msg: language.insertedsucessfully});
    }

    

}else{res.send({result: false, msg:language.studentnameexist})}

}else{res.send({result: true, msg:language.tokenerrorr})}

}
}
