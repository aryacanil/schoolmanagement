const { languages } = require("../../languages/transalate");
let FIRSTMODEL = require("../model/listExam");
module.exports.examlisted = async (req, res) => {
   

  var tokenkey=req.body.tokenkey
  var lang = req.body.language;
  var language= await languages(lang);
  var selecttokenkey=await FIRSTMODEL.checktokenkey(tokenkey)
  if(selecttokenkey.rowCount>0)
  {
  var condition = "";
  if (req.body.classname !== "" && req.body.classname !== undefined) {
    if (condition !== "") 
    {
      condition = condition + ` and classname = ${req.body.classname.toLowerCase()}`;
    } else {
      condition = `where classname = ${req.body.classname.toLowerCase()}`;
    }
  }

  if (req.body.subjectname !== "" && req.body.subjectname !== undefined) {
    if (condition !== "") 
    {
      condition =condition + ` and subject_name = '${req.body.subjectname.toLowerCase()}'`;
    } else {
      condition = `where subject_name = '${req.body.subjectname.toLowerCase()}'`;
    }
  }

  if (req.body.termname !== "" && req.body.termname !== undefined) {
    if (condition !== "") 
    {
      condition = condition + ` and termexam_name = '${req.body.termname.toLowerCase()}'`;
    } else {
      condition = `where termexam_name = '${req.body.termname.toLowerCase()}'`;
    }
  }

  if (req.body.totalmark !== "" && req.body.totalmark !== undefined) {
    if (condition !== "") 
    {
      condition = condition + ` and mark_total = '${req.body.totalmark}'`;
    } else {
      condition = `where mark_total = '${req.body.totalmark}'`;
    }
  }

  if (req.body.examduration !== "" && req.body.examduration !== undefined) {
    if (condition !== "") 
    {
      condition = condition + ` and exam_duration = '${req.body.examduration}'`;
    } else {
      condition = `where exam_duration = '${req.body.examduration}'`;
    }
  }

  if (req.body.yyyymmdd !== "" && req.body.yyyymmdd !== undefined) {
    if (condition !== "") 
    {
      condition = condition + ` and exam_date = '${req.body.yyyymmdd}'`;
    } else {
      condition = `where exam_date = '${req.body.yyyymmdd}'`;
    }
  }
  if (req.body.yyyymmdd !== "" && req.body.yyyymmdd !== undefined) {
    if (condition !== "") 
    {
      condition = condition + ` and exam_date = '${req.body.yyyymmdd}'`;
    } else {
      condition = `where exam_date = '${req.body.yyyymmdd}'`;
    }
  }

  console.log(condition);

  var select = await FIRSTMODEL.examlist(condition);

  if (select.rowCount > 0) {
    res.send({ data: select.rows });
    // console.log(select.rows);
  } else {
    res.send({ result: false, msg:language.somthingwrong});
  }
}
}
