//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["Albert Einstein", "Marie Curie", "ABU BAKAR", "UMAR", "USMAN", "ALI", "Leonardo da Vinci"];
//console.log("Great news! I found a bigger dinner table!");
//let friends:string[] = ["ABU BAKAR","UMAR","USMAN","ALI"]
//console.log("Good News! I found a bigger dinner table!")
// Adding more guests
//guests.unshift("Isaac Newton");
//guests.splice(guests.length / 2, 0, "Charles Darwin");
//guests.push("Ada Lovelace");
//Adding more guests
//friends.unshift("Khalid")
//friends.splice(friends.length / 4, 0,"Sufyaan")
//friends.push("Ismail")
//guests.forEach(guest => {
//   console.log(`Dear ${guest}, would you like to join me for dinner?`);
//});
//friends.forEach(friends =>{
//   console.log(`DEAR RESPECTABLE ${friends}, would you like to jion me for dinner?`)
//});
//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
