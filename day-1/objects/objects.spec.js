describe("object practice", function () {
  describe('object access...', () => {
    it('check object properties with dot notation', function () {
      const father = {
        firstname: 'Michael',
        lastname: 'Bluth',
        age: 33
      };
      expect(father.firstname).toEqual(FILL_ME_IN);
      expect(father.lastname).toEqual(FILL_ME_IN);
      expect(father.firstName).toEqual(FILL_ME_IN);
      expect(father.car).toEqual(FILL_ME_IN);
    });
    it('add properties with normal assignment', function () {

      const son = {};
      son.name = 'George Michael';
      son.lastname = 'Bluth';
      son.age = 16;
      son.jobs = ['Frozen Banana Salesman', 'CEO of Fakeblock'];

      expect(son.name).toEqual(FILL_ME_IN);
      expect(typeof son.jobs).toEqual(FILL_ME_IN);
      expect(son.jobs[1]).toEqual(FILL_ME_IN);
    });

    it('access properties with square bracket notation', function () {
      const starWars = {
        episode4: 'A New Hope',
        episode5: 'Empire Strikes Back',
        episode6: 'Return of the Jedi',
        episode7: 'The Force Awakens'
      };
      const worstOne = starWars['episode' + (10 - 4)];
      expect(worstOne).toEqual(FILL_ME_IN);
      expect(starWars[FILL_ME_IN]).toEqual('The Force Awakens');
    });

    it('should delete properties of an object', function () {
      const brotherInLaw = {
        name: "Tobias",
        lastname: 'Funke',
        job: 'therapist'
      };
      expect(brotherInLaw.job).toEqual(FILL_ME_IN);
      brotherInLaw.job = 'actor'
      expect(brotherInLaw.job).toEqual(FILL_ME_IN);

      delete brotherInLaw.job;
      expect(brotherInLaw.job).toEqual(FILL_ME_IN);
    });

    it('should be able to nest objects and arrays inside objects', function () {

      const bluthFamily = {
        father: {
          name: 'George'
        },
        mother: {
          name: 'Lucille'
        },
        sons: [{ name: 'GOB' }, { name: 'Michael' }, { name: 'Buster' }],
        daughters: [{ name: 'Lindsay' }]
      };

      expect(bluthFamily.father.name).toEqual(FILL_ME_IN);
      expect(bluthFamily.mother['name']).toEqual(FILL_ME_IN);
      expect(bluthFamily['sons'][2].name).toEqual(FILL_ME_IN);

    });
  });
  describe('further object access', () => {
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
  });
});


var FILL_ME_IN;


// describe('accessings objects', () => {

//     describe('accessObject()', () => {
//         it('can access any value in an object given an arbitrary key', () => {
//             const item = {
//                 fruit: 'apple'
//             }
//             const faveBook = {
//                 title: 'Blood Meridian',
//                 author: 'Cormac McCarthy'
//             }
//             let actual = accessObject(item, 'fruit');
//             let expected = 'apple';
//             expect(actual).toEqual(expected);
//             actual = accessObject(faveBook, 'title');
//             expected = 'Blood Meridian';
//             expect(actual).toEqual(expected);
//         });
//     });
//     describe('checkHasProperty()',() => {
//         it('',() => {

//         });
//     });
// });