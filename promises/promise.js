const promiseModule={

    fetchData: function (input){
        return new Promise(function(resolve,reject){
            if(input==1){
               return  resolve("promise resolved")
            }
            return reject("promise reject")
        })
    }
}

module.exports=promiseModule;