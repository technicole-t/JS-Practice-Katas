const { expect } = chai;

describe('using map()', () => {
    describe("incrementNums()", () => {
        it("returns the same list when no increment is provided", () => {
            const list = [1, 2];
            const actual = incrementNums(list);
            const expected = [1, 2];
            expect(actual).to.eql(expected);
        });
        it("an array of one number is increased by increment of 1", () => {
            const list = [3];
            const actual = incrementNums(list, 1);
            const expected = [4];
            expect(actual).to.eql(expected);
        });
        it("an array of two numbers can be incremented by 1", () => {
            const list = [3, 4];
            const actual = incrementNums(list, 1);
            const expected = [4, 5];
            expect(actual).to.eql(expected);
        });
        it("an array of more than 2 distinct numbers can be incremented by 1", () => {
            const list = [3, 4, 66, 74];
            const actual = incrementNums(list, 1);
            const expected = [4, 5, 67, 75];
            expect(actual).to.eql(expected);
        });
        it("an array of more than 2 distinct numbers can be incremented by more than 1", () => {
            let list = [3, 4, 66, 74];
            let actual = incrementNums(list, 10);
            let expected = [13, 14, 76, 84];
            expect(actual).to.eql(expected);
            list = [3, 4, 5, 6, 7];
            actual = incrementNums(list, 100);
            expected = [103, 104, 105, 106, 107];
            expect(actual).to.eql(expected);
        });
    });
    describe("multiplyNums()", () => {
        it("returns an array with original numbers, when no increment is passed ", () => {
            const list = [1, 2, 3];
            const actual = multiplyNums(list);
            const expected = [1, 2, 3];
            expect(actual).to.eql(expected);
        });
        it("single number in array is multipled by num for an array of length 1", () => {
            let list = [2];
            let num = 10;
            let actual = multiplyNums(list, num);
            let expected = [20];
            expect(actual).to.eql(expected);
            list = [3];
            num = 5;
            actual = multiplyNums(list, num);
            expected = [15];
            expect(actual).to.eql(expected);
        });
        it("all items in array multipled by number for an array of length greater than 2", () => {
            const list = [1, 2];
            const num = 2;
            const actual = multiplyNums(list, num);
            const expected = [2, 4];
            expect(actual).to.eql(expected);
        });
        it("returns a longer array multiplied by a larger num", () => {
            const list = [1, 2, 24, 31];
            const num = 10;
            const actual = multiplyNums(list, num);
            const expected = [10, 20, 240, 310];
            expect(actual).to.eql(expected);
        });
    });
    describe("extractCatNames()", () => {
        it("returns empty object when it is an empty object", () => {
            const actual = extractCatNames([]);
            const expected = [];
            expect(actual).to.eql(expected);
        });
        it("extracts name of cat from one object and returns as a string", () => {
            const actual = extractCatNames([{ name: "Zelda" }]);
            const expected = ["Zelda"];
            expect(actual).to.eql(expected);
        });
        it("extracts name of cat from one object with more than one key and returns as a string", () => {
            const actual = extractCatNames([{ name: "Zelda", breed: "silky" }]);
            const expected = ["Zelda"];
            expect(actual).to.eql(expected);
        });
    });
    describe("getFullNames()", () => {
        it("returns fullName in a new array for an array with a single person", () => {
            const people = [{ firstName: "Veronica", surName: "Grape" }];
            const actual = getFullNames(people);
            const expected = ["Veronica Grape"];
            expect(actual).to.eql(expected);
        });
        it("returns fullNames for an array of multiple distinct people", () => {
            const people = [
                { firstName: "Veronica", Surname: "Harradence" },
                { firstName: "Grape" }
            ];
            const key = "firstName";
            const keyTwo = "Surname";
            const actual = getFullNames(people, key, keyTwo);
            const expected = ["Veronica Harradence", "Grape"];
            expect(actual).to.eql(expected);
        });
    });
    describe("getFilmTitles()", () => {
        it("returns and array of one film title in an object with only one film title", () => {
            const list = [
                {
                    title: "Ponyo"
                }
            ];
            const key = "title";
            const index = 0;
            const actual = getFilmTitles(list, key, index);
            const expected = ["Ponyo"];
            expect(actual).to.eql(expected);
        });
        it("returns and array of one film title in an object with two properties film title and year", () => {
            const list = [
                {
                    title: "Ponyo",
                    year: 2008
                }
            ];
            const key = "title";
            const index = 0;
            const actual = getFilmTitles(list, key, index);
            const expected = ["Ponyo"];
            expect(actual).to.eql(expected);
        });
        it("returns and array of one film title in an object with two properties film title and year", () => {
            const list = [
                {
                    title: "Ponyo",
                    year: 2008
                },
                { title: "Muppets Christmas Carol" }
            ];
            const key = "title";
            const index = 1;
            const actual = getFilmTitles(list, key, index);
            const expected = ["Ponyo", "Muppets Christmas Carol"];
            expect(actual).to.eql(expected);
        });
        it("returns and array of two film titles in an object with two properties film title and year", () => {
            const list = [
                {
                    title: "Ponyo",
                    year: 2008
                },
                { title: "Muppets Christmas Carol", year: 1992 }
            ];
            const key = "title";
            const index = 1;
            const actual = getFilmTitles(list, key, index);
            const expected = ["Ponyo", "Muppets Christmas Carol"];
            expect(actual).to.eql(expected);
        });
        it("returns and array of three film titles in an object with three properties in each including film title, year and IMDB rating", () => {
            const list = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7
                },
                { title: "Muppets Christmas Carol", year: 1992, ImdbRating: 7.7 },
                { title: "Scarface", year: 1983, ImdbRating: 8.3 }
            ];
            const key = "title";
            const index = 1;
            const actual = getFilmTitles(list, key, index);
            const expected = ["Ponyo", "Muppets Christmas Carol", "Scarface"];
            expect(actual).to.eql(expected);
        });
    });
    describe("getMainDetails()", () => {
        it(" return three objects with three properties from an array of objects only with three properties ", () => {
            const list = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7
                }
            ];

            const key = "title";
            const keyTwo = "year";
            const keyThree = "ImdbRating";

            const actual = getMainDetails(list, key, keyTwo, keyThree);
            const expected = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7
                }
            ];
            expect(actual).to.eql(expected);
        });
        it(" return one object with three properties from an objects with four properties ", () => {
            const list = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7,
                    Writer: "Hayao Miyazaki"
                }
            ];

            const key = "title";
            const keyTwo = ["year"];
            const keyThree = ["ImdbRating"];
            const actual = getMainDetails(list, key, keyTwo, keyThree);
            const expected = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7
                }
            ];
            expect(actual).to.eql(expected);
        });
        it("returns two objects with three properties each from an array of two objects  with three properties each", () => {
            const list = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7
                },
                { title: "Muppets Christmas Carol", year: 1992, ImdbRating: 7.7 }
            ];

            const key = ["title"];
            const keyTwo = ["year"];
            const keyThree = ["ImdbRating"];
            const actual = getMainDetails(list, key, keyTwo, keyThree);
            const expected = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7
                },
                {
                    title: "Muppets Christmas Carol",
                    year: 1992,
                    ImdbRating: 7.7
                }
            ];
            expect(actual).to.eql(expected);
        });

        it("return two objects with chosen three properties, each from objects with originally four properties ", () => {
            const list = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7,
                    Writer: "Hayao Miyazaki"
                },
                {
                    title: "Muppets Christmas Carol",
                    year: 1992,
                    ImdbRating: 7.7,
                    Writer: "Charles Dickens and Jerry Juhl"
                }
            ];

            const key = ["title"];
            const keyTwo = ["year"];
            const keyThree = ["ImdbRating"];
            const actual = getMainDetails(list, key, keyTwo, keyThree);
            const expected = [
                {
                    title: "Ponyo",
                    year: 2008,
                    ImdbRating: 7.7
                },
                {
                    title: "Muppets Christmas Carol",
                    year: 1992,
                    ImdbRating: 7.7
                }
            ];
            expect(actual).to.eql(expected);
        });
        it("returns an empty object when object entered is empty ", () => {
            const list = {};
            const actual = getMainDetails(list);
            const expected = {};
            expect(actual).to.eql(expected);
        });
    });

});
