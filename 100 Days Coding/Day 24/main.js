//🚀 Day 24 Challenge: Start Coding! 🚀
//Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable
//function printNumbersWithLet () {
//    for (let i = 1; i <= 5; i++) {
//        // Uses `let` for loop variable `i`
//        console.log(i); // Logs numbers 1 through 5
//    }
// `i` is not accessible here , outside the loop, because it's defined with `let`
//}
//printNumbersWithLet();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.
//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Using `let` for a variable that can be reassigned
//let age= 25;
//age = 30;  //work fine because "let" allows reassigment
//console.log(age);
// Trying to reassign a `const`-declared variable
//const nam = "Alice";
//try {
//    nam = "Bob"; // This line will cause an error
//} catch (error) {
//    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
//}
// This example illustrates that `const` prevents changing the variable once it's set.
//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Demonstrate block scope 
//{
// 
//    let age = 25; // `age` is only accessible inside this block
//    const name = "Alice"; // `name` is only accessible inside this block
//    console.log(age); //Work fine here
//    console.log(name); // Also works fine here 
//}
//
//try  {
//    console.log(age) // This will fail
//}catch(error) {
//    console.log("Error: `age` is not accessible outside the block.");
//}
