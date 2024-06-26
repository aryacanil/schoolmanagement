const { appendFile } = require('fs');
let DBCONNECT=require('../../db');

async function classinsert(classname,classstatus){
    let insert =`INSERT INTO public.class(class_name,class_status)values('${classname}','${classstatus}')`;
    var inserted= await DBCONNECT.query(insert);        
    return inserted
    }


    async function checktokenkey(tokenkey){
        let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
        var selected= await DBCONNECT.query(select,[tokenkey]);      
        return selected
        }

module.exports = {classinsert,checktokenkey};