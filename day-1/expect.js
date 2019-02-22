

const checkArrays = (arr1, arr2) => {

    if (arr1.length !== arr2.length) return false;
    let areDeeplyEqual = true;
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) areDeeplyEqual = checkArrays(arr1[i], arr2[i])
        else areDeeplyEqual = arr1[i] === arr2[i];
        if (!areDeeplyEqual) return false;
    };
    return areDeeplyEqual;
}


const expect = (val1) => {
    return {
        toEqual(val2) {
            if (Array.isArray(val1) && Array.isArray(val2)) {
                if (!checkArrays(val1, val2)) throw new Error(`${val1} isn't the right answer!`);
            } else if (val1 !== val2) throw new Error(`${val1} isn't the right answer!`);
        }
    };
}