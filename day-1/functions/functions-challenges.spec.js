const { expect } = chai;
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
            expect('a').to.equal(firstParameter);
            expect('b').to.equal(secondParameter);
            sum(1000, 98);
            expect('a').to.equal(firstParameter);
            expect('b').to.equal(secondParameter);
        });
        it('can identify the arguments of a function', () => {
            sum(1000)
            expect(1000).to.equal(firstArgument);
            expect(undefined).to.equal(secondArgument);
            sum(35, 78);
            expect(35).to.equal(firstArgument);
            expect(78).to.equal(secondArgument);
        });
        it('can identify arguments when no arguments are passed', () => {
            sum();
            expect().to.equal(firstArgument);
            expect().to.equal(secondArgument);
        });
    });
});






var FILL_ME_IN;