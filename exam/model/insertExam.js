const { appendFile } = require('fs');
let DBCONNECT=require('../../db');

async function insertexam(examduration,examdate,value1,value3,examscheduledate,examcreated){
    let insert =`INSERT INTO public.exam(exam_duration,exam_date,exam_classsub,exam_max_mark,exam_term,exam_schedule_date,exam_created,exam_status)values('${examduration}','${examdate}','${value1}','${value3}','${examscheduledate}','${examcreated}','active')`;
    var inserted= await DBCONNECT.query(insert);      
    return inserted
    }

 async function selectterm(termexamname){
            let select=`SELECT termexam_id FROM public.termexam WHERE termexam_name=$1`;
            var selected= await DBCONNECT.query(select,[termexamname]);      
            return selected
            }
            
   async function checktokenkey(tokenkey){
            let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
            var selected= await DBCONNECT.query(select,[tokenkey]);      
            return selected
            }
               
async function selectclasssubject(classname,subjectname){
             let select=`SELECT class_subject_id,class_subject_class,class_subject_subject FROM public.classsubject 
             JOIN public.class ON class_id=class_subject_class
             JOIN public.subject ON subject_id=class_subject_subject WHERE class_name=$1 AND subject_name=$2`;
             var selected= await DBCONNECT.query(select,[classname,subjectname]);      
             return selected
              }

 async function check(value1,value3){
    let check=`SELECT exam_term,exam_classsub FROM public.exam WHERE exam_classsub=$1 AND exam_term=$2 `
    var selected= await DBCONNECT.query(check,[value1,value3]);      
    return selected

 }


module.exports = {insertexam,selectterm,selectclasssubject,check,checktokenkey};


