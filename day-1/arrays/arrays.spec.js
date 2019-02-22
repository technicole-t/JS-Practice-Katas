'use strict'

describe('accessing arrays', () => {
    describe('getFirstElement()', () => {
        it('can access the first element of an array', () => {
            const words = ['a', 'b', 'c', 'd', 'e'];
            const actual = getFirstElement(words);
            const expected = 'a'
            expect(actual).toEqual(expected);
        });
    });
    describe('getLastElement()', () => {
        it('can access last element of an array', () => {
            const words = ['hello', 'there', 'I', 'am', 'coding!'];
            const actual = getLastElement(words);
            const expected = 'coding!';
            expect(actual).toEqual(expected);
        });
    });
    describe('getOuterSum()', () => {
        it('can get the outer sum of an array of two numbers', () => {
            const numberPair = [100, 3];
            const actual = getOuterSum(numberPair);
            const expected = 103;
            expect(actual).toEqual(expected);
        });
        it('can get the outer sum for an array of three items', () => {
            const numberPair = [100, 4, 3];
            const actual = getOuterSum(numberPair);
            const expected = 103;
            expect(actual).toEqual(expected);
        });
        it('can get the outer sum for an array of multiple items (more than 3)', () => {
            const numberPair = [100, 4, 3, 57, 98, 2, 41];
            const actual = getOuterSum(numberPair);
            const expected = 141;
            expect(actual).toEqual(expected);
        });
    });
    describe('getAnyItem()', () => {
        it('can access an array using an index less than the array length', () => {
            let arr = ['a', 'b', 'c'];
            let actual = getAnyItem(arr, 0);
            let expected = 'a';
            expect(actual).toEqual(expected);
            actual = getAnyItem(arr, 1);
            expected = 'b';
            expect(actual).toEqual(expected);
            actual = getAnyItem(arr, 2);
            expected = 'c';
            expect(actual).toEqual(expected);
        });
        it('can access an array using an index equal to the array length', () => {
            let arr = ['a', 'b', 'c'];
            let actual = getAnyItem(arr, 3);
            let expected = 'a';
            expect(actual).toEqual(expected);
        });
        it('can access an array using an index greater than the array length', () => {
            let arr = ['a', 'b', 'c'];
            let actual = getAnyItem(arr, 4);
            let expected = 'b';
            expect(actual).toEqual(expected);
            actual = getAnyItem(arr, 5);
            expected = 'c';
            expect(actual).toEqual(expected);
        });
    });
    describe('getMiddleItem()', () => {
        it('can access middle item for an array containing one item', () => {
            let arr = ['LEEDS!'];
            let actual = getMiddleItem(arr);
            let expected = 'LEEDS!';
            expect(actual).toEqual(expected);
        });
        it('can access middle two items in an array contaning two items', () => {
            let arr = ['NORTHCODERS', 'LEEDS'];
            let actual = getMiddleItem(arr);
            let expected = ['NORTHCODERS', 'LEEDS'];;
            expect(actual).toEqual(expected);
        });
    });
});










var STRING_HERE;
var INDEX_HERE;
var YOUR_EXPRESSION_HERE;
var EXPRESSION_HERE;
var NAME_OF_STRING;
var FILL_ME_IN;