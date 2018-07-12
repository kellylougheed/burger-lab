# Welcome to the Burger Drive-Through!

You are a developer at a burger start-up, and you have been tasked with making the online burger order page. The page should allow the user to click on items and keep track of the customer's total price.

Luckily, you are a skilled JavaScript developer, and you can tackle this!

Clone this repo to Cloud 9 and open index.html and burger.js. The JS code has been started for you, but there are still some remaining tasks detailed in the comments.

1. For each of the items, select it using `document.querySelector` and store it in a variable.
2. Add an event listener to each item that increases the `total` variable by a certain amount of dollars (given in the comments).
3. Select the `#button` button and the `#totalPrice` paragraph elements with `document.querySelector`.
4. Add an event listener to the `button` that uses `innerHTML` to print the customer's current total in the `#totalPrice` paragraph.

## Extensions

1. Add in more foods that the user can select and be charged for!
2. Include New York sales tax in the total price when the button is clicked.
3. **Challenge**: When the button is clicked, check to see which items have the 'active' class, and only charge for those items.