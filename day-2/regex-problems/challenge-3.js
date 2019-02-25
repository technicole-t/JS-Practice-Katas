const getIDs = (divs) => {
    return divs.map(divString => {
        return divString.match(/\<div id\="([\w-]+)">[\w ]*<\/div>/)[1];
    });
};
