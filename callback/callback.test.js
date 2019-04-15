const callbackModule = require('./callback');

test('testing Async callback  function',done => {
    function callback(message){
        expect(message).toBe("callback called")
        done();
    }

    callbackModule.fetchData(callback);
})