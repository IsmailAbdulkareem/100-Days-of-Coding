//🚀 Day 21 Challenge: Start Coding! 🚀

//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Making a list (enum) for different types of vehicles
//um VehicleType {
//  Car,
//  Truck,
//  Motorcycle,
//  Bus,
//  Train,
//  // Add more types as needed
//
//
// Showing one type of vehicle from the list
//console.log(VehicleType.Truck); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
// Enums are useful when you have a fixed set of distinct values that have some underlying type.

//Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
// Creating a blueprint for student information
//terface Student {
//  name: string;
//  age: string;
//  courses: string[];
//
//
// Filling in the blueprint with an example student
//
//t Student: Student = {
//  name: "ISMAIL ABDUL KAREEM",
//  age: "19",
//  courses: ["HTML", "CSS", "Javascript", "Typescript"],
//
//
//
// Showing the student's information
//nsole.log(Student.name);
// We're using the blueprint to 



//Question 63:
// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Creating a custom type (type alias) for shapes that could be circles or rectangles
// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "Circle" | "Rectangle";
    radious?: number; // Only for circles
    width?: number; // Only for circles
    height?: number; // Only for rectangles

}

// Describing a circle using our Shape type
let Circle:Shape = {
    kind: "Circle",
    radious: 6
};

// Describing a rectangle using our Shape type
let Rectangle:Shape = {
 kind: "Rectangle",
 width:353,
 height:4523
}

// Showing what we described
console.log(Circle) // Here's the circle
console.log(Rectangle) // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.-