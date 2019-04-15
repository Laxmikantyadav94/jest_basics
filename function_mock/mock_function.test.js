var mockModule= require('./mock_function');

test('mock callback test',() => {
    let mockedFunction=jest.fn().mockImplementation(x =>{
        return x;
    })

    const mockCallback = jest.fn(x => {
        return x;
    });

    mockModule.callBackTest([1,2],mockedFunction);
    //console.log(mockedFunction.mock.calls);
    //console.log(mockedFunction.mock.results);
    expect(mockedFunction.mock.calls.length).toBe(2);
    expect(mockedFunction.mock.calls[0][0]).toBe(1); //first argument to callback
    expect(mockedFunction.mock.results[0].value).toBe(1)
})

test('mock and spy inner function ',() =>{
    //jest.mock('mockModule.testDateFunction', () => jest.fn(() => {return 0}))

    const spy = jest.spyOn(mockModule, 'testDateFunction');
    spy.mockReturnValue(0);

    expect(mockModule.testFunction()).toBe(0);  // Success!

    spy.mockRestore();

})