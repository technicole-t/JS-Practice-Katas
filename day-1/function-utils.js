let firstParameter;
let firstArgument;

let secondParameter;
let secondArgument;

function sum(a, b) {
    [[firstParameter, firstArgument]] = Object.entries({ a });
    [[secondParameter, secondArgument]] = Object.entries({ b });
    return a + b;
};

let args;
function sumNums(...nums) {
    args = nums;
}
