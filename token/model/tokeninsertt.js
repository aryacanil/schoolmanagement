const { appendFile } = require('fs');
let DBCONNECT=require('../../db');
var bcrypt=require("bcrypt")
var randtoken = require('rand-token');

        
    async function comparePassword(password,hashpass) {
        const result = bcrypt.compare(password,hashpass);
        return result;
        } 
        
    async function selectemailpass(useremail) {
        var select=`select user_email,user_id, user_mobileno , user_password from public.user where user_email=$1 or user_mobileno=$1`
        
        var selected= await DBCONNECT.query(select,[useremail]);      
        return selected
        }

        async function selectuserid(userid) {
            var select=`select token_user_id from public.token where token_user_id=$1`
            var selected= await DBCONNECT.query(select,[userid]);      
            return selected
            }


        async function updatetoken(token,userid) {
            var select=`update public.token set token_api_token=$1 where token_user_id=$2`
            var selected= await DBCONNECT.query(select,[token,userid]); 
            console.log(token,userid);     
            return selected
            }       
            
            
        async function inserttoken(userid,token,token_app_type) {
            var select=`INSERT INTO public.token(token_user_id,token_api_token,token_app_type)values('${userid}','${token}','${token_app_type}')`
            var selected= await DBCONNECT.query(select);      
            return selected
        }


module.exports = {comparePassword,updatetoken,selectemailpass,inserttoken,selectuserid};
