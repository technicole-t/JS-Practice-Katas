const removeComments = (text) => {
    return text.replace(/\/\/[ \w;]+/g, '');
};