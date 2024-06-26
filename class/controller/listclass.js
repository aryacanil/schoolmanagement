let FIRSTMODEL = require('../model/listClass');
const { languages } = require('../../languages/transalate');
module.exports.listofclasss= async (req, res) => {
    var lang = req.body.language;

    var language = await languages(lang);
    var tokenkey=req.body.tokenkey
    var selecttokenkey=await FIRSTMODEL.checktokenkey(tokenkey)
    if(selecttokenkey.rowCount>0)
    {
    var select=await FIRSTMODEL.classlist()
    console.log(select); 
    if(select.rowCount>0)
    {
        res.send({data:select.rows})
    }
    else 
    {
        res.send({result: false,msg:language.somthingwrong});
    }
}
}