const { expect } = chai;

describe('regex-problems', () => {
    describe('extractTotal()', () => {
        it('can find the total from a single code string', () => {
            const inputCode = 'abcd67yuio';
            const actual = extractTotal(inputCode);
            const desiredOutcome = 67;
            expect(actual).to.equal(desiredOutcome);
        });
        it('can find the total from multiple codeStrings', () => {
            let inputCode = 'abcd32audio\ncdhjkd10sudf';
            let actual = extractTotal(inputCode);
            let desiredOutcome = 42;
            expect(actual).to.equal(desiredOutcome);
            inputCode = 'c67281uidvm\nowfderkgzbpjmynuilx760453mxgcpej';
            actual = extractTotal(inputCode);
            desiredOutcome = 827734;
            expect(actual).to.equal(desiredOutcome);
        });
        it('can find the total from large number of multiple codeStrings', () => {
            let inputCode = codeStrings;
            let actual = extractTotal(inputCode);
            let desiredOutcome = 27581814788;
            expect(actual).to.equal(desiredOutcome);
        });
    });
    describe('getIDs()', () => {
        it('can get a single letter id from a div string with no inner text', () => {
            let inputCode = ['<div id="a"></div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["a"];
            expect(actual).to.eql(desiredOutcome);
            inputCode = ['<div id="z"></div>'];
            actual = getIDs(inputCode);
            desiredOutcome = ["z"];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get a mutliple letter id from a div string with no inner text', () => {
            let inputCode = ['<div id="menu"></div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["menu"];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get a multiple letter id from a single div containing a single word of inner text', () => {
            let inputCode = ['<div id="menu">Carte</div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["menu"];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get a multiple letter id from a single div containing multiple words of inner text', () => {
            let inputCode = ['<div id="menu">A La Carte</div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["menu"];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get a mutiple character id (including hyphens) from a div containing multiple words of inner text', () => {
            let inputCode = ['<div id="online-menu">A La Carte</div>']
            let actual = getIDs(inputCode);
            let desiredOutcome = ["online-menu"];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get ids from an array of multiple div strings', () => {
            let inputCode = ['<div id="online-menu">A La Carte</div>', '<div id="red-box">Welcome to the site</div>', '<div id="northcoders-in-leeds">Hello</div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["online-menu", "red-box", "northcoders-in-leeds"];
            expect(actual).to.eql(desiredOutcome);
        });
    });
    describe('collectABs()', () => {
        it('can get letter sequence consisting of just numbers', () => {
            let inputSequence = ['2', '123'];
            let actual = collectABs(inputSequence);
            let desiredOutcome = ['2'];
            expect(actual).to.eql(desiredOutcome);
            inputSequence = ['2', '123'];
            actual = collectABs(inputSequence);
            desiredOutcome = ['2', '123'];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get letter sequence consisting of just some numbers possibly followed by the letter a only', () => {
            let inputSequence = ['2', '3a'];
            let actual = collectABs(inputSequence);
            let desiredOutcome = ['2', '3a'];
            expect(actual).to.eql(desiredOutcome);
            inputSequence = ['2a', '123a', '1', '25c'];
            actual = collectABs(inputSequence);
            desiredOutcome = ['2a', '123a', '1'];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get letter sequence consisting of mixed sequences (some containing another lettrr)', () => {
            let inputSequence = ['2a', '123a', '25'];
            let actual = collectABs(inputSequence);
            let desiredOutcome = ['2a', '123a', '25'];
            expect(actual).to.eql(desiredOutcome);
            inputSequence = ['2a', '123a', '1', '25c'];
            actual = collectABs(inputSequence);
            desiredOutcome = ['2a', '123a', '1'];
            expect(actual).to.eql(desiredOutcome);
        });
    });
});