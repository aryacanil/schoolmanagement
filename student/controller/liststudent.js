let FIRSTMODEL = require('../model/listStudent');
const { languages } = require('../../languages/transalate');

module.exports.listofstudent= async (req, res) => {
    var lang = req.body.language;
    var language = await languages(lang);
    var tokenkey=req.body.tokenkey
    var selecttokenkey=await FIRSTMODEL.checktokenkey(tokenkey)
    if(selecttokenkey.rowCount>0)
    {
    var select=await FIRSTMODEL.studentlist()
    if(select.rowCount>0)
    {
        res.send({data:select.rows})
        console.log(select.rows);
    }
    else 
    {
        res.send({result: false,msg:language.somthingwrong });
    }
}{
    res.send({result: false,msg:language.tokenerror });
}
}