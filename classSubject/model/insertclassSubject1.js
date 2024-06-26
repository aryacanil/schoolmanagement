
let DBCONNECT=require('../../db');

async function insertclass(classsubjectclasss,classsubjectsubject){
    console.log(classsubjectclasss,classsubjectsubject);
    let insert =`INSERT INTO public.classSubject(class_subject_class,class_subject_subject,class_subject_status)values('${classsubjectclasss}','${classsubjectsubject}','active')`;
    var inserted= await DBCONNECT.query(insert);      
    return inserted
    }


async function cls(classname){
    console.log(classname,"fgefg");
    var s = `SELECT class_id FROM public.class WHERE lower(class_name)=$1`
    var sout = await DBCONNECT.query(s,[classname]);
    return sout
}  


async function sub(classsub){
    var s = `SELECT subject_id FROM public.subject WHERE lower(subject_name)=$1`
    var sout = await DBCONNECT.query(s,[classsub]);
    return sout
}   

async function checktokenkey(tokenkey){
    let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
    var selected= await DBCONNECT.query(select,[tokenkey]);      
    return selected
    }

module.exports = {insertclass,cls,sub,checktokenkey};


