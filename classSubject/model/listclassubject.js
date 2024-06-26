const { appendFile } = require('fs');
let DBCONNECT=require('../../db');

async function classsubjectlist(){
    
    var select=`select class_subject_id,class_name,subject_name,class_subject_status from public.classsubject
    JOIN public.class ON class_id=class_subject_class
    JOIN public.subject ON subject_id=class_subject_subject`
    var listed= await DBCONNECT.query(select);
    return listed
    }

    async function checktokenkey(tokenkey){
        let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
        var selected= await DBCONNECT.query(select,[tokenkey]);      
        return selected
        }
        

module.exports = {classsubjectlist,checktokenkey};
