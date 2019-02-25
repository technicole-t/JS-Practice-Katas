const extractTotal = (codeStrings) => {
    return codeStrings.split('\n').reduce((total, code) => {
        if (code.match(/\d+/)) return +code.match(/\d+/)[0] + total;
        return total;
    }, 0);
};