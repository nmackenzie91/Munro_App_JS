/*plan of apption

Learning Objectives
Be able to attach event listeners to DOM elements to respond to events
Be able to access data from the event object
Be able to use the document object to add information to the page by manipulating the DOM

Brief
Your task is to create a front-end JavaScript application that allows users to input items and see them displayed in a list. 
Choose a theme for the application, such as a list of endangered Animals / favourite Sports Stars / any other theme of your choice. 
Users should be able to enter values for different properties relating to the theme (Name, Species and Continent, for example) 
and see them displayed below.

MVP
Create a form in HTML with inputs for relevant data
When the form is submitted, access the data from the form in the form's submit event object
Create a list in HTML
Append the submitted data to the list
Add a "Delete All" <button> which clears all of the list items from the list

*/


document.addEventListener('DOMContentLoaded', () => {
    const newMunro = document.querySelector('#new-munro-form');
    //query selector on the form created in the HTML

    newMunro.addEventListener('submit', handleNewMunroSubmit);
    //if a submit happens, it will call the following function, which is defined out of the DOM function


    const deleteAllButton = document.querySelector('#delete-all');

    deleteAllButton.addEventListener('click', handleDeleteAllClick);

    deleteAllButton.addEventListener('mouseover', handleDeleteAllHover);

})


const handleNewMunroSubmit = function (event) {
    event.preventDefault();

    const munroCompletedItem = createMunroCompletedItem(event.target);
                                //^^^this is defined below
    const munroCompleted = document.querySelector('#munro-list');
    munroCompleted.appendChild(munroCompletedItem);

    event.target.reset();                            
}


const createMunroCompletedItem = function (form) {
    const munroCompletedItem = document.createElement('li'); //this is creating the list that will show once the form has been submitted
    munroCompletedItem.classList.add('munro-completed-item');  //this will add a class so it can be linked to CSS. CSS name goes in brackets


    const munroName = document.createElement('h2')
    munroName.textContent = form.munro_name.value;
    munroCompletedItem.appendChild(munroName);

    const altitude = document.createElement('h3')
    altitude.textContent = `${form.altitude.value}m`;
    munroCompletedItem.appendChild(altitude);

    const dateClimbed = document.createElement('p')
    dateClimbed.textContent = `Bagged on: ${form.date_climbed.value}`;
    munroCompletedItem.appendChild(dateClimbed);

    const views = document.createElement('p')
    views.textContent = `The views were ${form.views.value}`;
    munroCompletedItem.appendChild(views);

    // const difficulty = document.createElement('p')
    // difficulty.textContent = `Difficulty Rating: ${form.difficulty.value}`;
    // munroCompletedItem.appendChild(difficulty);

    const difficultyRatingFive = document.createElement('p')
    difficultyRatingFive.textContent = `Difficulty Rating: ${form.rating.value}`;
    munroCompletedItem.appendChild(difficultyRatingFive);

    // const difficultyRatingFour = document.createElement('p')
    // difficultyRatingFour.textContent = `Difficulty Rating: ${form.rating.value}`;
    // munroCompletedItem.appendChild(difficultyRatingFour);

    // const difficultyRatingThree = document.createElement('p')
    // difficultyRatingThree.textContent = `Difficulty Rating: ${form.rating.value}`;
    // munroCompletedItem.appendChild(difficultyRatingThree);

    // const difficultyRatingTwo = document.createElement('p')
    // difficultyRatingTwo.textContent = `Difficulty Rating: ${form.rating.value}`;
    // munroCompletedItem.appendChild(difficultyRatingTwo);

    // const difficultyRatingOne = document.createElement('p')
    // difficultyRatingOne.textContent = `Difficulty Rating: ${form.rating.value}`;
    // munroCompletedItem.appendChild(difficultyRatingOne);


    

    return munroCompletedItem;    
}


const handleDeleteAllClick = function (event) {
    const munroCompleted = document.querySelector('#munro-list');
    munroCompleted.innerHTML = ' ';
}
