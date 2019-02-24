const { expect } = chai;

describe('object practice', function () {
  describe('object access...', () => {
    it('check object properties with dot notation', function () {
      const father = {
        firstname: 'Michael',
        lastname: 'Bluth',
        age: 33
      };
      expect(father.firstname).to.equal(FILL_ME_IN);
      expect(father.lastname).to.equal(FILL_ME_IN);
      expect(father.firstName).to.equal(FILL_ME_IN);
      expect(father.car).to.equal(FILL_ME_IN);
    });
    it('add properties with normal assignment', function () {
      const son = {};
      son.name = 'George Michael';
      son.lastname = 'Bluth';
      son.age = 16;
      son.jobs = ['Frozen Banana Salesman', 'CEO of Fakeblock'];

      expect(son.name).to.equal(FILL_ME_IN);
      expect(typeof son.jobs).to.equal(FILL_ME_IN);
      expect(son.jobs[1]).to.equal(FILL_ME_IN);
    });

    it('access properties with square bracket notation', function () {
      const starWars = {
        episode4: 'A New Hope',
        episode5: 'Empire Strikes Back',
        episode6: 'Return of the Jedi',
        episode7: 'The Force Awakens'
      };
      const worstOne = starWars['episode' + (10 - 4)];
      expect(worstOne).to.equal(FILL_ME_IN);
      expect(starWars[FILL_ME_IN]).to.equal('The Force Awakens');
    });

    it('should delete properties of an object', function () {
      const brotherInLaw = {
        name: 'Tobias',
        lastname: 'Funke',
        job: 'therapist'
      };
      expect(brotherInLaw.job).to.equal(FILL_ME_IN);
      brotherInLaw.job = 'actor';
      expect(brotherInLaw.job).to.equal(FILL_ME_IN);

      delete brotherInLaw.job;
      expect(brotherInLaw.job).to.equal(FILL_ME_IN);
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

      expect(bluthFamily.father.name).to.equal(FILL_ME_IN);
      expect(bluthFamily.mother['name']).to.equal(FILL_ME_IN);
      expect(bluthFamily['sons'][2].name).to.equal(FILL_ME_IN);
    });
  });
  describe('further object access', () => {

    describe('accessName()', () => {
      it('can acess name property from a person object', () => {

        let person = { name: 'Haz' };
        let actual = accessName(person);
        let expected = 'Haz';
        expect(actual).to.equal(expected);
        actual = accessName({ name: 'Sam' });
        expected = 'Sam';
        expect(actual).to.equal(expected);
      });
    });
    describe('accessObject()', () => {
      it('can access any value in an object given an arbitrary key', () => {
        const item = {
          fruit: 'apple'
        };
        const faveBook = {
          title: 'Blood Meridian',
          author: 'Cormac McCarthy'
        };
        let actual = accessObject(item, 'fruit');
        let expected = 'apple';
        expect(actual).to.equal(expected);
        actual = accessObject(faveBook, 'title');
        expected = 'Blood Meridian';
        expect(actual).to.equal(expected);
      });
    });
    describe('checkHasProperty()', () => {
      it('can check if a given object has a particular property', () => {
        const author = {
          name: 'Zadie Smith',
          debut: 'White Teeth'
        }
        let actual = checkHasProperty(author, 'name');
        expect(actual).to.be.true;
        actual = checkHasProperty(author, 'debut');
        expect(actual).to.be.true;
        actual = checkHasProperty(author, 'prizes');
        expect(actual).to.be.false;
      });
    });
    describe('removeName()', () => {
      it('removes the name property from an object', () => {
        const author = {
          name: 'Zadie Smith',
          debut: 'White Teeth'
        }
        let actual = removeName(author);
        expect(actual).to.eql({ debut: 'White Teeth' });
      });
    });
    describe('removeProperty()', () => {
      it('removes a given property from an object', () => {
        const oscarWinner = {
          title: 'Moonlight',
          director: 'Barry Jenkins'
        };
        let actual = removeProperty(oscarWinner, 'title');
        expect(actual).to.eql({ director: 'Barry Jenkins' });
        actual = removeProperty(oscarWinner, 'director');
        expect(actual).to.eql({ title: 'Moonlight' });
      });
      it('returns the same object if a property inside the object is passed', () => {
        const oscarWinner = {
          title: 'Moonlight',
          director: 'Barry Jenkins'
        };
        let actual = removeProperty(oscarWinner, 'cast');
        expect(actual).to.eql({
          title: 'Moonlight',
          director: 'Barry Jenkins'
        });
      });
    });
    describe('addProperty()', () => {
      it('adds a key-value pair to an object', () => {
        const keyValuePair = ['name', 'mitch'];
        const person = { job: 'teacher' };
        let actual = addProperty(person, keyValuePair);
        expect(actual).to.eql({ name: 'mitch', job: 'teacher' });
      });
      it('returns the same object if no key-value pair is passed', () => {
        const person = { job: 'teacher' };
        let actual = addProperty(person);
        expect(actual).to.eql({ job: 'teacher' });
      });
    });
  });
});





var FILL_ME_IN;
