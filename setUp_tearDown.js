/*Setup and Teardown -used to perform some task before and after every text */

//beforeEach : Executes before every test in a file 

beforeEach(() => {
    before();
  });


//afterEach :Executes after every test in a file

afterEach(() => {
after();
});

//beforeAll- Execute once before all  tests in a file
beforeAll(() => {
    return initializeCityDatabase();
  });

//afterAll- Execute once after all  tests in a file
afterAll(() => {
return clearCityDatabase();
});
 
//Describe - describe block groups multiple tests

describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      return initializeFoodDatabase();
    });
  
    test('Vienna <3 sausage', () => {
      expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
  
    test('San Juan <3 plantains', () => {
      expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});


//Execution Flow
//1. top-level beforeEach is executed before the beforeEach inside the describe block.

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('2 - beforeAll'));
    afterAll(() => console.log('2 - afterAll'));
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));
    test('', () => console.log('2 - test'));
});
    
// 1 - beforeAll

// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll


//2.Jest executes all describe handlers in a test file before it executes any of the actual tests

describe('outer', () => {
console.log('describe outer-a');

describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
    console.log('test for describe inner 1');
    expect(true).toEqual(true);
    });
});

console.log('describe outer-b');

test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
});

describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
    console.log('test for describe inner 2');
    expect(false).toEqual(false);
    });
});

console.log('describe outer-c');
});
  
// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
