const express = require("express")
var bodyParser = require("body-parser");
const app = express()
app.use(express.json());
const port = 3000

let insertclass=require('./class/controller/insertclass');
let {insertclasssubjectt}=require('./classSubject/controller/insertclasssubject')
let {insertExam} =  require('./exam/controller/insertexam')
let {insertmark}= require('./mark/controller/insertmark')
let insertstudents=require('./student/controller/insertstudent');
let insertSsubject=require('./subject/controller/insertsubject')
let termexam =  require('./termExam/controller/inserttermexam')
let {insertuser}=require('./user/controller/userinsert')
let { inserttoken } = require("./token/controller/tokeninsert");

let listclass=require('./class/controller/listclass');
let {listofclasssubject}=require('./classSubject/controller/listclasssubject');
let {examlisted}=require('./exam/controller/listexam');
let {marklisted}=require('./mark/controller/listmark');
let liststudents=require('./student/controller/liststudent');
let {listofstudentssubject} = require('./subject/controller/listsubject')
let {termexamlists} =  require('./termExam/controller/listtermexam')

let {classinsertValidate}=require('./validation')
let {classstudentinsertValidate}=require('./validation')
let {examinsertValidate}=require('./validation')
let {markinsertValidate}=require('./validation')
let {studentinsertValidate}=require('./validation')
let {subjectinsertValidate}=require('./validation')
let {termexaminsertValidate}=require('./validation');
let {signupValidation}=require('./validation');
let {loginValidation}=require('./validation');

app.post('/insertclassdetails',classinsertValidate,insertclass.insertclasss);
app.post('/insertclassstudentdetails',classstudentinsertValidate,insertclasssubjectt);
app.post('/insertexam',examinsertValidate,insertExam);
app.post('/insertingmarks',markinsertValidate,insertmark)
app.post('/insertstudentdetails',studentinsertValidate,insertstudents.insertstudent_d);
app.post('/insertsubjectdetails',subjectinsertValidate,insertSsubject.insertsubject);
app.post('/inserttermexam',termexaminsertValidate,termexam.inserttermexam);
app.post('/insertuser',signupValidation,insertuser)
app.post('/inserttoken',inserttoken)

app.post('/listclassdetails',listclass.listofclasss);
app.post('/listclassstudentdetails',listofclasssubject);
app.post('/examlist',examlisted);
app.post('/marklist',marklisted);
app.post('/liststudentdetails',liststudents.listofstudent);
app.post('/subjectlistdetails',listofstudentssubject)
app.post('/listtermexam',termexamlists);

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})
