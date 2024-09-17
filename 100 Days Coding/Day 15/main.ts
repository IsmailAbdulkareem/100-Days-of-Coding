//🚀 Day 15 Challenge: Start Coding! 🚀
//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Original array of magicians
var magicians = ["Alice", "David", "Chris"];

// Function to add "the Great" to each magician's name
function make_great(magicians) {
    return magicians.map(magician => magician + " the Great");
}

// Function to show all magicians' names
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}

// Create a new array with "the Great" added to each name
var greatMagicians = make_great(magicians.slice());

// Show the original magicians
console.log("Original magicians:");
show_magicians(magicians);

// Show the great magicians
console.log("Great magicians:");
show_magicians(greatMagicians);



//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo")

//Question 45: Cars: Create detailed car objects with flexible properties.
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

//