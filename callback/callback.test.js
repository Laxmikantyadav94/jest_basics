const callbackModule = require('./callback');

test('testing Async callback  function',done => {
    function callback(message){
        expect(message).toBe("callback called")
        done();
    }
    callbackModule.fetchData(callback);
})

test("callback",()=>{
    let callback = jest.fn((input)=>{
        expect(input).toBe("callback called");
    })

    return callbackModule.fetchData(callback);
})