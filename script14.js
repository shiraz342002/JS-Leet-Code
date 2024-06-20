// 13. The Shopping Cart Totalizer:
//You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const items = [
    {
        id: 1,
        name: "Espresso",
        price: 2.5,
        category: "Coffee",
        description: "A full-flavored, concentrated form of coffee.",
        country: "Italy"
    },
    {
        id: 2,
        name: "Latte",
        price: 3.0,
        category: "Coffee",
        description: "A coffee drink made with espresso and steamed milk.",
        country: "Italy"
    },
    {
        id: 3,
        name: "Cappuccino",
        price: 3.0,
        category: "Coffee",
        description: "An espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.",
        country: "Italy"
    },
    {
        id: 4,
        name: "Mocha",
        price: 3.5,
        category: "Coffee",
        description: "A chocolate-flavored variant of a caffè latte.",
        country: "Yemen"
    },
    {
        id: 5,
        name: "Americano",
        price: 2.0,
        category: "Coffee",
        description: "A style of coffee prepared by brewing espresso with added hot water.",
        country: "USA"
    },
    {
        id: 6,
        name: "Green Tea",
        price: 1.5,
        category: "Tea",
        description: "A type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas.",
        country: "China"
    },
    {
        id: 7,
        name: "Chai Latte",
        price: 3.0,
        category: "Tea",
        description: "A tea beverage made by brewing black tea with a mixture of aromatic Indian spices and herbs.",
        country: "India"
    },
    {
        id: 8,
        name: "Croissant",
        price: 2.0,
        category: "Pastry",
        description: "A buttery, flaky, and soft pastry that is a common breakfast food.",
        country: "France"
    },
    {
        id: 9,
        name: "Blueberry Muffin",
        price: 2.5,
        category: "Pastry",
        description: "A small, cake-like bread baked in muffin tins, often sweetened and filled with blueberries.",
        country: "USA"
    },
    {
        id: 10,
        name: "Bagel with Cream Cheese",
        price: 2.0,
        category: "Pastry",
        description: "A dense bread product originating from the Jewish communities of Poland, typically topped with sesame or poppy seeds.",
        country: "Poland"
    },
    {
        id: 11,
        name: "Tacos",
        price: 4.0,
        category: "Food",
        description: "A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.",
        country: "Mexico"
    },
    {
        id: 12,
        name: "Sushi",
        price: 10.0,
        category: "Food",
        description: "A Japanese dish consisting of prepared vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits.",
        country: "Japan"
    },
    {
        id: 13,
        name: "Hamburger",
        price: 5.0,
        category: "Food",
        description: "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
        country: "Germany"
    },
    {
        id: 14,
        name: "Pizza Margherita",
        price: 8.0,
        category: "Food",
        description: "A pizza topped with tomatoes, mozzarella, and fresh basil.",
        country: "Italy"
    },
    {
        id: 15,
        name: "Pasta Carbonara",
        price: 7.5,
        category: "Food",
        description: "An Italian pasta dish from Rome made with egg, hard cheese, pancetta, and pepper.",
        country: "Italy"
    },
    {
        id: 16,
        name: "Falafel",
        price: 4.5,
        category: "Food",
        description: "A deep-fried ball or patty made from ground chickpeas, fava beans, or both.",
        country: "Middle East"
    },
    {
        id: 17,
        name: "Butter Chicken",
        price: 9.0,
        category: "Food",
        description: "A type of curry made from chicken with a spiced tomato and butter (makhan) sauce.",
        country: "India"
    },
    {
        id: 18,
        name: "Tom Yum Soup",
        price: 6.0,
        category: "Food",
        description: "A type of hot and sour Thai soup, usually cooked with shrimp.",
        country: "Thailand"
    },
    {
        id: 19,
        name: "Baklava",
        price: 3.5,
        category: "Dessert",
        description: "A rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened and held together with syrup or honey.",
        country: "Turkey"
    },
    {
        id: 20,
        name: "Cheesecake",
        price: 4.0,
        category: "Dessert",
        description: "A sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese, eggs, and sugar.",
        country: "Greece"
    }
];

function CalculateTotal(cart, items) {
    return cart.reduce((total, cartItem) => {
        const item = items.find(product => product.id === cartItem.id);
        if (item) {
            total += item.price * cartItem.quantity;
        }
        return total;
    }, 0);
}
const cart = [
    { id: 1, quantity: 2 },
    { id: 5, quantity: 3 },
    { id: 12, quantity: 1 },
    { id: 20, quantity: 4 }
];

const total = CalculateTotal(cart, items);
console.log("The total price of your items is: $" + total.toFixed(2));

