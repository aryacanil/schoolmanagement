const { appendFile } = require('fs');
let DBCONNECT=require('../../db');

async function subjectinsert(subjectname,subjectstatus){
    let insert =`INSERT INTO public.subject(subject_name,subject_status)values('${subjectname}','${subjectstatus}')`;
    console.log(insert);
    var inserted= await DBCONNECT.query(insert);
    console.log(inserted);        
    return inserted
    }

async function checktokenkey(tokenkey){
let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
var selected= await DBCONNECT.query(select,[tokenkey]);      
return selected
 }
        

module.exports = {subjectinsert,checktokenkey};