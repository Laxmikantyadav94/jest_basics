/**
 * jest mocks out timmer function with the mocked function so that there is no time lapse.
 */
var timmerModule = require('./timmer');
jest.useFakeTimers();

test('testing timmer - setTimeout',() =>{
    
    timmerModule.timerGame();

    expect(setTimeout).toHaveBeenCalledTimes(1);
})

test('calls the callback after 2 second', () => {
    const callback = jest.fn();
  
    timmerModule.timerGame(callback);
  
    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();
  
    // Fast-forward until all timers have been executed
    jest.runAllTimers();
  
    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });