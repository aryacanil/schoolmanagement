const { appendFile } = require('fs');
let DBCONNECT=require('../../db');

async function termexamlist(){
    let select =`SELECT * FROM public.termExam`;
    var listed= await DBCONNECT.query(select);
    return listed
    }

    async function checktokenkey(tokenkey){
        let select=`SELECT token_api_token FROM public.token WHERE token_api_token=$1`;
        var selected= await DBCONNECT.query(select,[tokenkey]);      
        return selected
        }
        

module.exports = {termexamlist,checktokenkey};