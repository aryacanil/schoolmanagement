let FIRSTMODEL = require("../model/insertclassSubject1");
const { languages } = require("../../languages/transalate");
const { validationResult } = require("express-validator");

module.exports.insertclasssubjectt = async (req, res) => {
  var lang = req.body.language;
  var language = await languages(lang);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    if (
      tokenkey != " " ||
      classubjectclass != " " ||
      classsubjectsubject != " "
    ) {
      var classubjectclass = req.body.classubjectclass.toLowerCase();
      var classsubjectsubject = req.body.classsubjectsubject.toLowerCase();
      var classname = req.body.classname;

      var tokenkey = req.body.tokenkey;
      var selecttokenkey = await FIRSTMODEL.checktokenkey(tokenkey);
      if (selecttokenkey.rowCount > 0) {
        let checkclss = await FIRSTMODEL.cls(classubjectclass);
        console.log(checkclss.rows);
        if (checkclss.rowCount > 0) {
          var value = checkclss.rows[0].class_id;
          var checksub = await FIRSTMODEL.sub(classsubjectsubject);
        }
        if (checksub.rowCount > 0) {
          let insertcls = await FIRSTMODEL.insertclass(
            value,
            checksub.rows[0].subject_id
          );
          res.send({ result: true, msg: language.classinsertedsucessfully });
        } else {
          res.send({ result: false, msg: language.subjectId });
        }
      } else {
        res.send({ result: false, msg: language.tokenerror });
      }
    }else {
        res.send({ result: false, msg:" NOT FOUND"});
      }
  }
};
