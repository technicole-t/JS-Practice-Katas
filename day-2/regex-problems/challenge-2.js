const getIDs = (divs) => {
    return divs.map(eachDiv => eachDiv.match(/\<div id="([\w+]+)"\>[\w ]*\<\/div\>/)[1]);
};