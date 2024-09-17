//🚀 Day 5 Challenge: Start Coding! 🚀
//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});


//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests : string[ ] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner ?`);
})


//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let unableToAttennd = "Nikola Tesla";
console.log(`${unableToAttennd} can't make it to dinner.`);

let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttennd)] = newGuest;

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
})