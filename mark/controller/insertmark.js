let FIRSTMODEL = require('../model/insertMark');
const {validationResult}=require("express-validator")
const { languages } = require('../../languages/transalate');
module.exports.insertmark= async (req, res) => {
    const errors = validationResult(req);          
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        } else 
        {
    var markscore=req.body.markscore
    var studentname=req.body.studentname
    var examname=req.body.examname
    var tokenkey=req.body.tokenkey
    var lang = req.body.language;
    var language= await languages(lang);

    var selecttokenkey=await FIRSTMODEL.checktokenkey(tokenkey)
    if(selecttokenkey.rowCount>0)
    {
    var check_studentname= await FIRSTMODEL.selectstudentname(studentname)
    if(check_studentname.rowCount > 0)
    {
    var studentid = check_studentname.rows[0].mark_student_id
    console.log(studentid,"mark_student_id");  
    var check_examname=await FIRSTMODEL.selectexamname(examname)
        if(check_examname.rowCount > 0){
        var examid = check_examname.rows[0].mark_exam_id
        console.log(examid,"mark_exam_id"); 
        var insert=await FIRSTMODEL.markinsert(markscore,studentid,examid)
            if(insert.rowCount > 0){
            res.send({result: true,msg: language.insertedsucessfully});}   
        }else{res.send({result: false,msg:language.examname})}
    }else{res.send({result: false,msg:language.studentname})}
    
} res.send({ result: false, msg: language.tokenerror });
}
}

    



