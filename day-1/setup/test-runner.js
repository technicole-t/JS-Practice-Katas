// const progressBar = document.querySelector('progress');

class TestSuite {
    constructor() {
        this.passing = 0
        this.noOfTests = 0
        this.nestedDescribe = 0
    }
    it(description, func) {
        this.noOfTests++;
        const currentList = document.querySelector(`ul[class=nested-${this.nestedDescribe}]`);
        try {
            func();
            const newSuccessMessage = generateMessage(description);
            this.passing++;
            currentList.appendChild(newSuccessMessage);
        } catch (e) {
            let newErrorMessage;
            if (e instanceof ReferenceError) newErrorMessage = `Something hasn't been declared properly!`;
            else newErrorMessage = e.message;
            const newErrorElement = generateError(description + '\n' + newErrorMessage);
            currentList.appendChild(newErrorElement);
        }
        this.updateDisplay();
    };
    describe(description, func) {
        this.nestedDescribe++;
        let size;
        if (this.nestedDescribe === 1) size = 2;
        if (this.nestedDescribe === 2) {
            size = 4;
            description = `  ${description}`
        }
        const descriptionBlock = createDescriptionBlock(this.nestedDescribe);
        descriptionBlock.info = description;
        const blockAbove = findNestedDescription(this.nestedDescribe - 1);
        const newList = document.createElement('ul');
        newList.classList.add(`nested-${this.nestedDescribe}`);
        const newDescription = createDescriptionHeading(description, size);
        descriptionBlock.appendChild(newDescription);
        descriptionBlock.appendChild(newList);
        if (blockAbove) {
            blockAbove.appendChild(descriptionBlock);
        } else {
            document.body.appendChild(descriptionBlock);
        }
        func();
        this.updateDisplay();
    };
    updateDisplay() {
        // progressBar.value = Math.floor((this.passing / this.noOfTests) * 100);
    };
};

const stringTests = new TestSuite();
let { it, describe } = stringTests;
it = it.bind(stringTests);
describe = describe.bind(stringTests);