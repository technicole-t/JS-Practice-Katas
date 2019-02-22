const getFirstElement = arr => {
    return arr[1];
}

const getLastElement = arr => {
    return arr[arr.length - 1];
};

const getOuterSum = arr => {
    return getFirstElement(arr) + getLastElement(arr);
};

const getAnyItem = (arr, position) => {
    return arr[position % arr.length];
};

const getMiddleItem = (arr) => {
    return arr.length % 2 === 0 ? [arr[Math.floor((arr.length - 1) / 2)], arr[Math.floor((arr.length + 1) / 2)]] : arr[Math.floor(arr.length / 2)];
};