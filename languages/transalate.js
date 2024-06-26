

module.exports.languages = async(lang)=>{
   
    var lan =["en","hindi"]
   
    if(lang !=='' && lang !== undefined &&  lan.includes(lang)){
      
        var language =require('../languages/'+lang+'.json')

       
    }else{
        var language =require('../languages/en.json')
    }
    return language
}