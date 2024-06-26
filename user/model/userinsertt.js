const { appendFile } = require('fs');
let DBCONNECT=require('../../db');
var bcrypt=require("bcrypt")

    async function userinsert(username,usermobileno,useremail,hashpassword){
        console.log(username,usermobileno,useremail,hashpassword);
    let insert =`INSERT INTO   
    public.user(user_name,user_mobileno,user_email,user_password,user_status)
    values('${username}','${usermobileno}','${useremail}','${hashpassword}','active')`;
    var inserted= await DBCONNECT.query(insert);      
    return inserted
    }

    async function hashPassword(userpassword) {
    const hash = await bcrypt.hash(userpassword, 5);
    console.log(hash);  
    return hash
      
    }
    async function email(useremail){
        let select=`SELECT user_email FROM public.user where user_email=$1`;
        var selected= await DBCONNECT.query(select,[useremail]);      
        return selected
        }
module.exports = {userinsert,hashPassword,email};
