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
        it('can get the id from an array with a single empty html div string', () => {
            let inputCode = ['<div id="menu"></div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["menu"];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get the id from an array with a single html div string containing a word', () => {
            let inputCode = ['<div id="menu">A La Carte</div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["menu"];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get the id from a a html element where the id contains a -', () => {
            let inputCode = ['<div id="online-menu">A La Carte</div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["online-menu"];
            expect(actual).to.eql(desiredOutcome);
        });
        it('can get the id from an array of multiple html div strings', () => {
            let inputCode = ['<div id="menu">A La Carte</div>', '<div id="box"></div>'];
            let actual = getIDs(inputCode);
            let desiredOutcome = ["menu", "box"];
            expect(actual).to.eql(desiredOutcome);
        });
    });
});