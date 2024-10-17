/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// ------------------ Complete the functions written below ------------------------------ //

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  // TODO: use `forEach`

  // List out every item using forEach
  items.forEach((item) => {console.log(item.name)});
};

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  // TODO: use `map`

  // Did not work when I put code in curly braces
  // return items.map((item) => {item.name.toUpperCase()});

  // Removed curly braces and the code worked, I'm confused why?
  // return items.map((item) => {item.name.toUpperCase()});
 
  // This doesn't work, I feel like I'm just confusing myself doing it this way
//   const itemMap = items.map((item) => {
//     return `($items}`}
//   )
// }

  // Googled .toUpperCase() method to apply to .map
  return items.map((item) => item.name.toUpperCase());
};

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  // TODO: use `find`

  // Removed curly braces again and the code worked, very confused at this point
  // return items.find((item) => {item.id === id});

  // Finds an item based on inputted item id #. Will give keys and values of inputted id #. For each item in the items array, the arrow function checks if the inputted id is equal to the provided id argument.
  return items.find((item) => item.id === id);
  // console.log(itemFind)
};

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */
function getItemPriceByName(items, name) {
  // TODO: use a loop!
  for(let i = 0; i < items.length; i++) {
    // console.log(items[i])

    // If the inputted name of the item exists and is the same starting from index 0. Will loop through every single index searching if the name exists.
    if (items[i].name === name) {
      // Then it returns the price of the inputted item. 
      return items[i].price; // 1.75
    };
  };
};

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  // TODO: use `filter`

  // Tried this code, didn't work
//   items.filter((item, category) => {
//     return item.category === category
//   }
// );

  // Removed curly braces again to make code work. Very Very confused
  // return items.filter((item) => {item.category === category});

  // Filter method creats a new array with all the items in the item array. Then checks for each item in the items array, if the inputted category is equal to the provided category argument. If true, it pushes the item to the new array. If false, removes it.
  return items.filter((item) => item.category === category);
};

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  // TODO: use `reduce`

  // Removed curly braces and ";" to make code work. Moved "return" from inside the curly braces to beginning of line instead. VERY CONFUSED WHY THIS WORKS INSTEAD
  // items.reduce((total, item) => {
  //   return total + item.quantity;
  // }, 0)

  // Returns total value of the item quantity
  return items.reduce((total, item) => total + item.quantity, 0)
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function calculateTotalPrice(items) {
  // TODO: use `reduce`

  // Ran into same issues as the previous function
  // items.reduce((total, item) => {
  //   return total + (item.price * item.quantity);
  // }, 0)

  // Returns total value of all item prices. In this case, used multiplication to calculate the total price of a certain item that is in stock
  return items.reduce((total, item) => total + (item.price * item.quantity), 0)
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

console.log("Welcome! We carry the following items:");
logNames(INVENTORY);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(INVENTORY));

console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);

const totalCost = calculateTotalPrice(INVENTORY);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(INVENTORY, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(INVENTORY, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(INVENTORY, category));