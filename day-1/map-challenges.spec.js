describe('using map()', () => {
    describe("incrementNums()", () => {
        it("return list when no increment is provided", () => {
            const list = [1, 2];
            const actual = incrementNums(list);
            const expected = [1, 2];
            expect(actual).toEqual(expected);
        });
        it("an array of one number is incremented once by given n of 1", () => {
            const list = [3];
            const num = 1;
            const actual = incrementNums(list, num);
            const expected = [4];
            expect(actual).toEqual(expected);
        });
        it("an array of two numbers is incremented once by given n of one", () => {
            const list = [3, 4];
            const num = 1;
            const actual = incrementNums(list, num);
            const expected = [4, 5];
            expect(actual).toEqual(expected);
        });
        it("an array of a few numbers is incremented once by given n of more than one", () => {
            const list = [3, 4, 66, 74];
            const num = 10;
            const actual = incrementNums(list, num);
            const expected = [13, 14, 76, 84];
            expect(actual).toEqual(expected);
        });
    });
    describe("multiplyNums()", () => {
        it("returns original array unchanged when nothing is passed in as n ", () => {
            const list = [1];
            const num = 1;
            const actual = multiplyNums(list, num);
            const expected = [1];
            expect(actual).toEqual(expected);
        });
        it("returns original array unchanged when nothing is passed in as n ", () => {
            const list = [1];
            const num = 0;
            const actual = multiplyNums(list, num);
            const expected = [0];
            expect(actual).toEqual(expected);
        });
        it("returns an array multiplied by 2", () => {
            const list = [1, 2];
            const num = 2;
            const actual = multiplyNums(list, num);
            const expected = [2, 4];
            expect(actual).toEqual(expected);
        });
        it("returns a longer array multiplied by a larger num", () => {
            const list = [1, 2, 24, 31];
            const num = 10;
            const actual = multiplyNums(list, num);
            const expected = [10, 20, 240, 310];
            expect(actual).toEqual(expected);
        });
    });
    describe("extractCatNames()", () => {
        it("returns empty object when it is an empty object", () => {
            const actual = extractCatNames([]);
            const expected = [];
            expect(actual).toEqual(expected);
        });
        it("returns zero when a key called name is not inside object", () => {
            const actual = extractCatNames([{ breed: "Shaggy" }]);
            const expected = 0;
            expect(actual).toEqual(expected);
        });
        it("extracts name of cat from one object and returns as a string", () => {
            // const cats = { name: "Zelda" };
            // const key = "name";
            const actual = extractCatNames([{ name: "Zelda" }]);
            const expected = ["Zelda"];
            expect(actual).toEqual(expected);
        });
        it("extracts name of cat from one object with more than one key and returns as a string", () => {
            const actual = extractCatNames([{ name: "Zelda", breed: "silky" }]);
            const expected = ["Zelda"];
            expect(actual).toEqual(expected);
        });
    });
    describe("getFullNames()", () => {
        it("returns an array of strings of a persons first name when the only input if their first name", () => {
            const people = [{ FirstName: "Veronica" }];
            const key = "FirstName";
            const index = 0;
            const actual = getFullNames(people, key, index);
            const expected = ["Veronica"];
            expect(actual).toEqual(expected);
        });
        it("returns an array of strings of two people with just first names", () => {
            const people = [{ FirstName: "Veronica" }, { FirstName: "Grape" }];
            const key = "FirstName";
            // const index = [0];
            // const indexOne = [1];
            const actual = getFullNames(people, key);
            const expected = ["Veronica", "Grape"];
            expect(actual).toEqual(expected);
        });
        it("returns an array of strings of two people with just first names", () => {
            const people = [
                { FirstName: "Veronica", Surname: "Harradence" },
                { FirstName: "Grape" }
            ];
            const key = "FirstName";
            const keyTwo = "Surname";
            const actual = getFullNames(people, key, keyTwo);
            const expected = ["Veronica Harradence", "Grape"];
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
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
            expect(actual).toEqual(expected);
        });
        it("returns an empty object when object entered is empty ", () => {
            const list = {};
            const actual = getMainDetails(list);
            const expected = {};
            expect(actual).toEqual(expected);
        });
    });

});
