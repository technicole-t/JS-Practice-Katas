
/*
function sum(a,b) {
    return a + b;
}
function sumNums (...args) {
    
}
*/

describe('understanding functions', () => {
    describe('parameters and arguments', () => {
        it('can identify parameters of a function', () => {
            sum(100, 42); // <-- here the function sum is being invoked with 100 and 42
            expect('a').toEqual(firstParameter);
            expect('b').toEqual(secondParameter);
            sum(1000, 98);
            expect('a').toEqual(firstParameter);
            expect('b').toEqual(secondParameter);
        });
        it('can identify the arguments of a function', () => {
            sum(1000)
            expect(1000).toEqual(firstArgument);
            expect(undefined).toEqual(secondArgument);
            sum(35, 78)
            expect(35).toEqual(firstArgument);
            expect(78).toEqual(secondArgument);
        });
        it('can check the parameters of a function using rest parameters', () => {
            sumNums(10, 35, 100, 42);
            expect(args).toEqual([10, 35, 100, 42]);
        });
    });
});




var FILL_ME_IN;