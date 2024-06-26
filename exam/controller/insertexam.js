const { log } = require('console');
let FIRSTMODEL = require('../model/insertExam')
const {validationResult}=require("express-validator");
const { languages } = require('../../languages/transalate');


module.exports.insertExam= async (req, res) =>
{
    const errors = validationResult(req);          
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        } else 
        {

    var tokenkey=req.body.tokenkey
    var termexamname=req.body.termexamname;
    var classname=req.body.classname
    var subjectname=req.body.subjectname
    var examduration=req.body.examduration;
    var examdate=req.body.examdate;
    var lang = req.body.language;
    var language = await languages(lang);

    var selecttokenkey=await FIRSTMODEL.checktokenkey(tokenkey)
    if(selecttokenkey.rowCount>0)
    {
    var check_classsubjectname= await FIRSTMODEL.selectclasssubject(classname,subjectname)
    console.log(check_classsubjectname,"check_classsubjectname");
    if(check_classsubjectname.rowCount > 0)
    {
    var value1 = check_classsubjectname.rows[0].class_subject_id
    console.log(value1,"class_subject_name");  

        var check_termexam= await FIRSTMODEL.selectterm(termexamname)
        if(check_termexam.rowCount > 0)
    {
        var value3 = check_termexam.rows[0].termexam_id
        console.log(value3,"check_termexam");

        var checkid= await FIRSTMODEL.check(value3)
        if(checkid.rows==false)
        {
        var insertexm= await FIRSTMODEL.insertexam(examduration,examdate,value1,value3,examscheduledate,examcreated)
        if(insertexm.rowCount>0){
            res.send({result: true,msg:language.insertedsucessfully });
        }else
        {
            res.send({result:false,msg:language.insertedfail});
        }
    }
    else
    {
        res.send({result: true,msg: language.alreadyinserted})
    }


    }else
    {
        res.send({result: false,msg:language.somthingwrong})
    }

    
    }else
    {
        res.send({result: false,msg:language.somthingwrong})
    }

    }else
        {
            res.send({result: false,msg:language.tokenerror })
        }
} res.send({result: false,msg: language.validationerror })
}
    