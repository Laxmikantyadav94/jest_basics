var asyncAwaitModule= require('./async_await');


test('testing async await function',async () =>{
    let resp=await asyncAwaitModule.fetchData(1); //test will fail if promise reject
    expect(resp).toBe("resolve")
})

test('testing async await function 2',async () =>{
        let resp=await asyncAwaitModule.fetchData(0); 
        expect(resp).toBe("reject")
})