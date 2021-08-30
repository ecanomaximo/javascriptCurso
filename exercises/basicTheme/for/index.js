const myObjects = [
    {tag: 'section', text: 'Hello'},
    {tag: 'div', text: 'World'},
    {tag: 'span', text: 'My'},
    {tag: 'footer', text: 'Friends'}
];

const selectedContainer = document.querySelector('.container')
const createDivElement = document.createElement('div')

function goThroughArray() {
    for (let i = 0; i < myObjects.length; i++) {
        let { tag, text } = myObjects[i];
        let createElementForObjects = document.createElement(tag);
        createElementForObjects.innerHTML = text;
        createDivElement.appendChild(createElementForObjects);
    }

    selectedContainer.appendChild(createDivElement)
};

goThroughArray()