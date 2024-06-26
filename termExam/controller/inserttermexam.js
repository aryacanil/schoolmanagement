const { validationResult } = require("express-validator");
const { languages } = require("../../languages/transalate");
let FIRSTMODEL = require("../model/inserttermExam");

module.exports.inserttermexam = async (req, res) => {
  var lang = req.body.language;
  var language = await languages(lang);
  const errors = validationResult(req);          
  if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
  } else 
  {
  var tokenkey = req.body.tokenkey;
  var selecttokenkey = await FIRSTMODEL.checktokenkey(tokenkey);
  if (selecttokenkey.rowCount > 0) {
    var termname = req.body.termname;
    var insert = await FIRSTMODEL.termexamsinsert(termname);
    if (insert.rowCount > 0) {
      res.send({ result: true, msg: language.insertedsucessfully });
    } else {
      res.send({ result: false, msg: language.somthingwrong });
    }
  }
  res.send({ result: false, msg: language.tokenerror });
}
}
