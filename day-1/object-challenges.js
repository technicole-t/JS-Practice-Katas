
const accessName = (person) => {
    // given a person object of the form {name: 'Bob', age: 42}
    // should return 'Bob'
    return person.name;
};

const accessObject = (obj, key) => {
    return obj[key];
};