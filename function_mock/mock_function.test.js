var mockModule= require('./mock_function');

test('mock callback test',() => {
    let mockedFunction=jest.fn().mockImplementation(x =>{
        return x;
    })
    mockModule.callBackTest([1,2],mockedFunction);
    expect(mockedFunction.mock.calls.length).toBe(2);
    expect(mockedFunction.mock.calls[0][0]).toBe(1); //first argument to callback
    expect(mockedFunction.mock.results[0].value).toBe(1)
})

test('mock and spy inner function ',() =>{
    const spy = jest.spyOn(mockModule, 'testDateFunction');
    spy.mockReturnValue(0);

    expect(mockModule.testFunction()).toBe(0);  // Success!

    spy.mockRestore();

})

test('mock and spy inner function ',() =>{
    const spy = jest.spyOn(mockModule, 'innerFunction1');
    spy.mockReturnValue(2);

    expect(mockModule.testFunction()).toBe(2);  // Success!

    spy.mockRestore();

})

test('without mock spy inner function ',() =>{
    expect(mockModule.testFunction()).toBe(1);  // Success!
})