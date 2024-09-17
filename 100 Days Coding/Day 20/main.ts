//🚀 Day 20 Challenge: Start Coding! 🚀

//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores given
//function averageScore(...scores: number[]): number {
    // Adds all scores together and divides by the number of scores
 //   let total = scores.reduce((sum, score) => sum + score, 0);
  //  return total / scores.length;
//}

// Example: finding the average of four scores
//console.log(averageScore(80, 200, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.



//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
      total += scores[i];
    }
    return total / scores.length;
  }
  
  // Example usage:
  const scores = [75, 88, 95, 100, 70]; // Add as many scores as you like
  const averageeScore = calculateAverage(scores);
  console.log(`The average score is: ${averageeScore}`);
  
  //Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
  // This profile sets itself up and can share info about the user
let userProfile = (function() {
  // The user's details are kept inside
  let name = "John";
  let age = 30;

  // This part shares the user's details
  return {
      displayInfo: function() {
          console.log(`Name: ${name}, Age: ${age}`);
      }
  };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.