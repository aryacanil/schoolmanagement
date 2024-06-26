let FIRSTMODEL = require('../model/insertClass');
const { languages } = require('../../languages/transalate');
const {validationResult}=require("express-validator")

module.exports.insertclasss= async (req, res) => {
    

    const errors = validationResult(req);          
    if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
    }
    else{

    var tokenkey=req.body.tokenkey
    var lang = req.body.language;
    var classname=req.body.classname;
    var classstatus=req.body.classstatus

    var language = await languages(lang);
    if(tokenkey!=" "){

    
    var selecttokenkey=await FIRSTMODEL.checktokenkey(tokenkey)
    if(selecttokenkey.rowCount>0)
    {
    var insert=await FIRSTMODEL.classinsert(classname,classstatus)
    if(insert.rowCount>0){
        res.send({result:true,msg:language.classdetailsinsertedsucessfully})
    }
    else{
        res.send({result: false,msg:language.somthingwrong});
    }


    }else{
        res.send({result: false,msg:language.tokenerror });
    }
    }else{
        res.send({result: false,msg:language.tokeninvalid });
    }

}
}
