const { appendFile } = require('fs');
let DBCONNECT=require('../../db');

async function checkstudentname(studentname){
    var c = `SELECT * FROM public.student WHERE student_name=$1`
    var sclass= await DBCONNECT.query(c,[studentname]);
    return sclass
}  


async function checkid(classid){
    var c = `SELECT class_id FROM public.class WHERE class_name=$1`
    var checkclass= await DBCONNECT.query(c,[classid]);
    return checkclass
}  

async function checkstudentid(studentid){
    var c = `SELECT student_id FROM public.student WHERE student_id=$1`
    var sclass= await DBCONNECT.query(c,[studentid]);
    return sclass
}  


async function studentinsert(studentname,studentage,id){
    let insert =`INSERT INTO public.student(student_name,student_age,student_class,student_status) values('${studentname}','${studentage}','${id}','active')`;
    var inserted= await DBCONNECT.query(insert); 
    return inserted
    }

    async function classid(classname){
        let select=`SELECT class_id FROM public.class WHERE class_name= $1`;
        var selected= await DBCONNECT.query(select,[classname]); 
        return selected
        }
    

        async function checktokenkey(tokenkey){
            let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
            var selected= await DBCONNECT.query(select,[tokenkey]);      
            return selected
    
            }

module.exports = {checkstudentname,checktokenkey,checkid,studentinsert,checkstudentid,classid};