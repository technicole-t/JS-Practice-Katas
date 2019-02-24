'use strict';
const { expect } = chai;

describe('accessing arrays', () => {
  describe('basic array access', () => {
    it('acccess individual elements inside an array', () => {
      const multiTypeArray = ['I am a string', 42, true, [1, 2, 3]];

      const position0 = multiTypeArray[0];
      expect(position0).to.equal(FILL_ME_IN);

      const position1 = multiTypeArray[1];
      expect(position1).to.equal(FILL_ME_IN);

      const position2 = multiTypeArray[2];
      expect(position2).to.equal(FILL_ME_IN);

      const position3 = multiTypeArray[3];

      expect(position3).to.eql(FILL_ME_IN);
    });

    it('access arrays nested inside arrays', () => {
      const rows = [[1, 2, 3], ['a', 'b', 'c'], [true, true, false]];

      expect(rows[0]).to.eql(FILL_ME_IN);
      expect(rows[1]).to.eql(FILL_ME_IN);
      expect(rows[2]).to.eql(FILL_ME_IN);

      const firstRow = rows[0];
      expect(firstRow[0]).to.equal(FILL_ME_IN);
      expect(firstRow[1]).to.equal(FILL_ME_IN);

      expect(rows[1][1]).to.equal(FILL_ME_IN);
      expect(rows[2][2]).to.equal(FILL_ME_IN);
      expect(rows[0][2]).to.equal(FILL_ME_IN);
    });

    it('find elements with the indexOf() method', () => {
      const haystack = [
        'hay',
        'more hay',
        'so much hay',
        'needle',
        'even more hay',
        'ALL THE HAY!'
      ];
      expect(haystack.indexOf('needle')).to.equal(FILL_ME_IN);
      expect(haystack.indexOf('watch')).to.equal(FILL_ME_IN);
    });

    it('use push() method to add items to the end of the array', () => {
      const news = ['northcoders', 'in', 'Leeds!', 'woo'];
      news.push('yorkshire');

      expect(news).to.eql(FILL_ME_IN);
      expect(news.length).to.equal(FILL_ME_IN);

      news.push(['oop', 'north!']);

      expect(news).to.eql(FILL_ME_IN);
      expect(news.length).to.equal(FILL_ME_IN);

      news.push('hello');

      expect(news).to.eql(FILL_ME_IN);
      expect(news.length).to.equal(7);
    });

    it('get the last element of an array with pop()', () => {
      const nums = [1, 2, 3];
      const lastElement = nums.pop();
      expect(nums).to.eql(FILL_ME_IN);
      expect(nums.length).to.equal(FILL_ME_IN);
      expect(lastElement).to.equal(FILL_ME_IN);
    });

    it('get the slice of an array', () => {
      const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

      expect(alphabet.slice(1, 4)).to.eql(FILL_ME_IN);
      expect(alphabet.slice(2, 3)).to.eql(FILL_ME_IN);
      expect(alphabet.slice(3, 5)).to.eql(FILL_ME_IN);
      expect(alphabet.slice(-1)).to.eql(FILL_ME_IN);
      expect(alphabet.slice(1, -3)).to.eql(FILL_ME_IN);
    });

    it('use the join method to create strings from arrays', () => {
      const list = ['Here', 'is', 'a', 'list', 'of', 'words'];

      const sentenceWithNoGaps = list.join(FILL_ME_IN);
      expect(sentenceWithNoGaps).to.equal('Hereisalistofwords');

      const sentenceWithSpaces = list.join(FILL_ME_IN);
      expect(sentenceWithSpaces).to.equal('Here is a list of words');

      const sentenceWithHyphens = list.join(FILL_ME_IN);
      expect(sentenceWithHyphens).to.equal('Here-is-a-list-of-words');
    });
  });
  // go to the array-chall
  describe('getFirstElement()', () => {
    it('can access the first element of an array', () => {
      const words = ['a', 'b', 'c', 'd', 'e'];
      const actual = getFirstElement(words);
      const expected = 'a';
      expect(actual).to.equal(expected);
    });
  });
  describe('getLastElement()', () => {
    it('can access last element of an array', () => {
      const words = ['hello', 'there', 'I', 'am', 'coding!'];
      const actual = getLastElement(words);
      const expected = 'coding!';
      expect(actual).to.equal(expected);
    });
  });
  describe('getOuterSum()', () => {
    it('can get the outer sum of an array of two numbers', () => {
      const numberPair = [100, 3];
      const actual = getOuterSum(numberPair);
      const expected = 103;
      expect(actual).to.equal(expected);
    });
    it('can get the outer sum for an array of three items', () => {
      const numberPair = [100, 4, 3];
      const actual = getOuterSum(numberPair);
      const expected = 103;
      expect(actual).to.equal(expected);
    });
    it('can get the outer sum for an array of multiple items (more than 3)', () => {
      const numberPair = [100, 4, 3, 57, 98, 2, 41];
      const actual = getOuterSum(numberPair);
      const expected = 141;
      expect(actual).to.equal(expected);
    });
  });
  describe('getAnyItem()', () => {
    it('can access an array using an index less than the array length', () => {
      let arr = ['a', 'b', 'c'];
      let actual = getAnyItem(arr, 0);
      let expected = 'a';
      expect(actual).to.equal(expected);
      actual = getAnyItem(arr, 1);
      expected = 'b';
      expect(actual).to.equal(expected);
      actual = getAnyItem(arr, 2);
      expected = 'c';
      expect(actual).to.equal(expected);
    });
    it('can access an array using an index equal to the array length', () => {
      let arr = ['a', 'b', 'c'];
      let actual = getAnyItem(arr, 3);
      let expected = 'a';
      expect(actual).to.equal(expected);
    });
    it('can access an array using an index greater than the array length', () => {
      let arr = ['a', 'b', 'c'];
      let actual = getAnyItem(arr, 4);
      let expected = 'b';
      expect(actual).to.equal(expected);
      actual = getAnyItem(arr, 5);
      expected = 'c';
      expect(actual).to.equal(expected);
    });
  });
  describe('getMiddleItem()', () => {
    it('can access middle item for an array containing one item', () => {
      let arr = ['LEEDS!'];
      let actual = getMiddle(arr);
      let expected = 'LEEDS!';
      expect(actual).to.equal(expected);
    });
    it('can access middle two items in an array contaning two items', () => {
      let arr = ['NORTHCODERS', 'LEEDS'];
      let actual = getMiddle(arr);
      let expected = ['NORTHCODERS', 'LEEDS'];
      expect(actual).to.eql(expected);
    });
  });
});

var STRING_HERE;
var INDEX_HERE;
var YOUR_EXPRESSION_HERE;
var EXPRESSION_HERE;
var NAME_OF_STRING;
var FILL_ME_IN;
