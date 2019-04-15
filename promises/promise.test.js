var promiseModule= require('./promise')

test('testing promises resolve 1',()=>{
   return promiseModule.fetchData(1).then(function(data){
        expect(data).toBe("promise resolved"); 
    })
})

test('testing promises resolve 2 ',()=>{
    return expect(promiseModule.fetchData(1)).resolves.toBe("promise resolved");
 })

test('testing promises reject',()=>{
    return promiseModule.fetchData(0).catch(function(data){
         expect(data).toBe("promise reject");
     })
 })

 test('testing promises reject 2 ',()=>{
    return expect(promiseModule.fetchData(0)).rejects.toBe("promise reject");
 })