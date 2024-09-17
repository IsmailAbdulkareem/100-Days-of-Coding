//Q19 - Dinner Guests: Working with one of the programs from Exercises 14
// through 18, print a message indicating the number of people you are inviting to dinner.
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log(`I am inviting ${guests.length} people to dinner.`);

//Q20 - Think of something you could store in a array. For example,
//you could make a list of mountains, rivers, countries, cities, languages, or
// anything else you’d like.
// Write a program that creates a list containing these items.
let countries:string[]= ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);

//Q21 - They think of something you could store in a TypeScript Object. Write a program that
// creates Objects containing these items.
let book : {title:string; writter:string; yearofpublished: number } = {
    title: "THE KING ISMAIL",
    writter: "ISMAIL ABDUL KAREEM",
    yearofpublished:2023
};
console.log(`book Info: ${book.title} by ${book.writter} ,published in ${book.yearofpublished}`);