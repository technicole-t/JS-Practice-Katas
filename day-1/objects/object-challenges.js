
const accessName = (person) => {
    // given a person object of the form {name: 'Bob', age: 42}
    // should return 'Bob'
    // return person.name;
};

const accessObject = (obj, key) => {
    // return obj[key];
};

const checkHasProperty = (obj,key) => {
    // will check if an object has a given key-value pair
};

const removeName = (person) => {
    // remove the age property from a person
    // do NOT use the delete operator
};

const removeProperty = (obj,key) => {
    // remove the key value pair from an object
};

const addProperty = (obj,keyValuePair) => {
    // keyValuePair is an array with a key and a value
    // e.g. ["name","mitch"]
    // use this pair to add the key value pair to a new obj with all the properties of the old obj
    // addProperty({job: 'teacher'},['name','mitch']) // should return {job: 'teacher', name: 'mitch }
};