let FIRSTMODEL = require("../model/insertSubject");
const {validationResult}=require("express-validator");
const { languages } = require("../../languages/transalate");

module.exports.insertsubject= async (req, res) => {
    const errors = validationResult(req);          
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        } else 
        {
    var subjectname = req.body.subjectname;
    var subjectstatus=req.body.subjectstatus;
    var tokenkey=req.body.tokenkey
    var lang = req.body.language;
    var language = await languages(lang);

    var selecttokenkey=await FIRSTMODEL.checktokenkey(tokenkey)
    if(selecttokenkey.rowCount>0)
    {
            
    var insert=await FIRSTMODEL.subjectinsert(subjectname,subjectstatus)
    if(insert.rowCount>0)
    {
        res.send({result:true,msg:language.insertedsucessfully})
    }
    else 
    {
        res.send({result: false,msg:language.somthingwrong});
    }
        }  res.send({ result: false, msg: language.tokenerror });


    }
}