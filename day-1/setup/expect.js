const areDeeplyEqual = (coll1, coll2) => {

    let areEqual = true;
    if (typeof coll1 === 'object' && typeof coll2 === 'object') {
        if (Array.isArray(coll1) === Array.isArray(coll2)) {
            for (let key1 in coll1) {
                if (coll2[key1] === undefined) return false;
                else areEqual = areDeeplyEqual(coll1[key1], coll2[key1]);
                if (areEqual === false) return false;
            }
        } else return false;

    } else areEqual = coll1 === coll2;
    return areEqual;
}



const expect = (val1) => {
    return {
        toEqual(val2) {
            if (typeof val1 === 'object' && typeof val2 === 'object') {
                if (!areDeeplyEqual(val1, val2)) throw new Error(`${val1.toString()} isn't the right answer!`);
            } else if (val1 !== val2) throw new Error(`${val1} isn't the right answer!`);
        }
    };
}