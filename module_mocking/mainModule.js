var module1= require('./module1.js');

var mainModule={
    testFunction:function(input){
        let resp= module1.multiplyByTwo(input);
        if(resp == 2 ){
            return true
        }else{
            return false;
        }
    }
}

module.exports=mainModule;