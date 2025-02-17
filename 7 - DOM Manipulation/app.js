// getElementByID Method
let elementWithID = document.getElementById('first-div');
console.log("Element accessed using ID:", elementWithID);

// Modify element .textContent property
elementWithID.textContent = "Div 1"

// getElementsByClass method
let elementsWithClass = document.getElementsByClassName('sample-div');
console.log("Elements accessed using class:", elementsWithClass);
// Modify Element .textContent property using index
elementsWithClass[1].textContent = "Div 2"

// getElementsByTagName() method
let listItems = document.getElementsByTagName('li');
console.log("Elements accessed using tags:", listItems);
// Modify element .backgroundColor property using index
listItems[0].style.backgroundColor = "crimson";

// .querySelector() method
// #id, .class, tag
// Return: first element or null
let orderedListItem = document.querySelector('.ordered-list');
console.log("Ordered List Items:", orderedListItem);
orderedListItem.style.color = 'blue';

// .querySelectorAll() method
let headings3 = document.querySelectorAll('h3');
console.log("Heading 3 Tags:", headings3);
// Modify elements
headings3[3].style.backgroundColor = "aqua";

// using looping statements (for loop)
/**
 * 1st argument: variable initialization
 * 2nd argument: condition expression
 * 3rd argument: increment/decrement
 */
for(let i = 0; i < headings3.length; i++){
    let heading = headings3[i];
    heading.style.backgroundColor = "aqua";
}

// Update Elements using Attributes: .setAttribute()
let dayNightIcon = document.getElementById('day-night-icon');
dayNightIcon.setAttribute(
    'src',
    'https://cdn-icons-png.flaticon.com/512/3688/3688129.png'
);

// Append New Elements
let parentElement = document.getElementById('parent-element');
let createdElement = document.createElement('div');
createdElement.textContent = "This is the created element."
parentElement.appendChild(createdElement)

// Removing Element
let elementToBeRemoved = document.getElementById('element-to-be-removed');
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Elements Styles
let darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', function(){
    let pageContainer = document.getElementById('page-container');
    pageContainer.style.backgroundColor = 'black';
    pageContainer.style.color = 'white';
    let pageModeText = document.getElementById('page-mode-text');
    pageModeText.textContent = 'Dark Mode';
})