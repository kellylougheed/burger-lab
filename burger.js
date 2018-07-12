let items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener('click', e => {
        item.classList.toggle('active');
    });
});

let total = 0;

// Select the fries

// Add an event listener that adds $2 to the total if the fries are clicked. Hint: use the += operator.

// Select the bacon

// Add an event listener that adds $3 to the total if the bacon is clicked

// Select the salad

// Add an event listener that adds $5 to the total if the salad is clicked

// Select the #button button

// Select the #total p

// Add an event listener to the button that updates the innerHTML of the #totalPrice p to reflect the price (the value of the variable total)



// EXTENSIONS
// Add in more foods that the user can select and be charged for!
// Include New York sales tax in the total price when the button is clicked.
// CHALLENGE: when the button is clicked, check to see which items have the 'active' class, and only charge for those items.