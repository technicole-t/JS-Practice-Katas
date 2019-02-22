

const createListElement = (message, colour) => {
    const li = document.createElement('li');
    li.style.color = colour;
    li.innerText = message;
    return li;
};

const findNestedDescription = (nestedDepth) => {
    return document.querySelector(`.nested-${nestedDepth}`);
};

const createDescriptionBlock = (nestingDepth) => {
    const newDescriptionBlock = document.createElement('div');
    newDescriptionBlock.classList.add('description');
    newDescriptionBlock.classList.add(`nested-${nestingDepth}`)
    return newDescriptionBlock;
};

const generateMessage = (description) => {
    const newMessage = createListElement(description, 'green');
    return newMessage;
};

const generateError = (errorMessage) => {
    // const
    // <p>I will display &#10006;</p>
    const newErrorMessage = createListElement(errorMessage, 'red');
    return newErrorMessage;
};

const createDescriptionHeading = (description, size) => {
    const newDescription = document.createElement(`h${size}`);
    newDescription.style.color = 'black';
    if (size === 4) newDescription.style.fontWeight = 'lighter';
    newDescription.innerText = description;
    return newDescription;
}

