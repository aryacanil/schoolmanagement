const { appendFile } = require('fs');
let DBCONNECT=require('../../db');

async function markinsert(markscore,studentid,examid){
    let insert =`INSERT INTO public.mark(mark_score,mark_status,mark_student_id,mark_exam_id)values('${markscore}','${markstatus}','${studentid}','${examid}','active')`;
    var inserted= await DBCONNECT.query(insert);      
    return inserted
    }

    async function selectstudentname(studentname){
    var select=`select student_id from public.student join public.mark where student_name=$1`
    var selected= await DBCONNECT.query(select,[studentname]);      
    return selected
    }

    async function selectexamname(examname){
        var select=`select exam_id from public.exam
        join public.termexam on exam_term=termexam_id where termexam_name=$1`
        var selected= await DBCONNECT.query(select,[examname]);      
        return selected
        }
        async function checktokenkey(tokenkey){
            let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
            var selected= await DBCONNECT.query(select,[tokenkey]);      
            return selected
            }

module.exports = {markinsert,selectstudentname,selectexamname,checktokenkey};