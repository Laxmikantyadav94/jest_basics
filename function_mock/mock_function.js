/**
 * MOCK- mock hides/replaces the actual definition of function with the mocked one, It;s used for below reason
 * 1.Track how many times function was called.
 * 2.Arguments to the function.
 * 3.Return mocked result
 */

 var mockModule={
    callBackTest:function(items,callbackfn){
        for (let index = 0; index < items.length; index++) {
            callbackfn(items[index]);
          }
    },
    
    testFunction:function(){

        let input=mockModule.testDateFunction()

        if(input==1){
           return mockModule.innerFunction1(input);
        }else{
            return mockModule.innerFunction2(input);
        }
    },
    testDateFunction:function(){
        return 1;
    },
    innerFunction1:function(value){
        return value;
    },
    innerFunction2:function(value){
        return value;
    }
 }

 module.exports=mockModule;