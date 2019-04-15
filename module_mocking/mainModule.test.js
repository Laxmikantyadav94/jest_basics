jest.mock('./module1');

var mainModule= require('./mainModule');
var module1= require('./module1');

test('mocking a module',() => {    
    
    module1.multiplyByTwo.mockReturnValue(2);

    let resp=  mainModule.testFunction(5);

    expect(resp).toBe(true);

})
test('mocking a module -2',() => {

    module1.multiplyByTwo.mockReturnValue(1);

    let resp=  mainModule.testFunction(1);

    expect(resp).toBe(false);

})


/*
use below spyOn syntex for mocking particular function of another module or same module.
test('mocking a module with Spy',() => {
    
    const spy = jest.spyOn(module1, 'multiplyByTwo');
    spy.mockReturnValue(2);

    let resp=  mainModule.testFunction(5);

    expect(resp).toBe(true);

    spy.mockRestore();
})
*/