var asyncAwaitModule ={
    fetchData:async function(input){
        try{
            let resp= await asyncAwaitModule.delay(3000,input);
            return resp;
        }catch(err){
            return err;
        }
       
    },
    delay:function(ms,input){
        return new Promise(function(resolve,reject){
            if(input==1){
                return setTimeout(resolve("resolve"),ms)
            }else{
                return setTimeout(reject("reject"),ms)
            }
        });
    }
}

module.exports=asyncAwaitModule;