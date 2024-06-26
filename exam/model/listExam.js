
   

const { appendFile } = require('fs');
let DBCONNECT=require('../../db');

async function examlist(condition){
    let select =`SELECT 
    LOWER(subject_name) as subject_name,LOWER(termexam_name) as termexam_name,mark_total,exam_date,exam_duration FROM public.exam 
    JOIN public.classsubject ON class_subject_id=exam_classsub
    JOIN public.mark ON mark_id=exam_mark 
    JOIN public.termexam ON termexam_id=exam_term 
    JOIN public.class ON class_id=class_subject_class
    JOIN public.subject ON subject_id=class_subject_subject `+ condition
    console.log(select);
    
    var listed= await DBCONNECT.query(select);
    return listed
    }

    async function checktokenkey(tokenkey){
        let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
        var selected= await DBCONNECT.query(select,[tokenkey]);      
        return selected
        }

        

module.exports = {examlist,checktokenkey};
