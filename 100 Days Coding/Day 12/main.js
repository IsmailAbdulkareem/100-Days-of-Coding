//Question 34: Pizzas: Share your favorite pizzas and express your love for them.
var pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
//Question 35: Animals: Highlight animals with a common trait.
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animals) {
    console.log("A ".concat(animals, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
//Question 36: T-Shirt: Create a function for customizing t-shirts.
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("medium", "Code is Life");
