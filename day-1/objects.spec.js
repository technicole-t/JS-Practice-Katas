describe('accessing objects', () => {
    describe('accessName()', () => {
        it('can acess name property from a person object', () => {
            let person = { name: 'Haz' };
            let actual = accessName(person);
            let expected = 'Haz';
            expect(actual).toEqual(expected);
            actual = accessName({ name: 'Sam' });
            expected = 'Sam';
            expect(actual).toEqual(expected);
        });
    });
    describe('accessObject()', () => {
        it('can access any value in an object given an arbitrary key', () => {
            const item = {
                fruit: 'apple'
            }
            const faveBook = {
                title: 'Blood Meridian',
                author: 'Cormac McCarthy'
            }
            let actual = accessObject(item, 'fruit');
            let expected = 'apple';
            expect(actual).toEqual(expected);
            actual = accessObject(faveBook, 'title');
            expected = 'Blood Meridian';
            expect(actual).toEqual(expected);
        });
    });

});