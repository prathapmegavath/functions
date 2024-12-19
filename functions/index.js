// Part 1: Print numbers in different orders using while loop

// Printing numbers from 1 to 10
console.log("1 to 10:");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Printing numbers from 10 to 1
console.log("10 to 1:");
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Printing numbers from -1 to -10
console.log("-1 to -10:");
i = -1;
while (i >= -10) {
    console.log(i);
    i--;
}

// Printing numbers from -10 to -1
console.log("-10 to -1:");
i = -10;
while (i <= -1) {
    console.log(i);
    i++;
}

// Part 2: Print even and odd numbers based on user input

// Taking user input
let userInput = prompt("Enter a number: ");
userInput = parseInt(userInput);

// Printing even numbers from 1 to the user input
console.log(`Even numbers from 1 to ${userInput}:`);
i = 2;
while (i <= userInput) {
    console.log(i);
    i += 2;  // Increase by 2 to get even numbers
}

// Printing odd numbers from 1 to the user input
console.log(`Odd numbers from 1 to ${userInput}:`);
i = 1;
while (i <= userInput) {
    console.log(i);
    i += 2;  // Increase by 2 to get odd numbers
}

// Part 3: Calculate the sum of even and odd numbers up to the user input

let sumEven = 0;
let sumOdd = 0;

// Adding even and odd numbers to their respective sums
i = 1;
while (i <= userInput) {
    if (i % 2 === 0) {  // Check if the number is even
        sumEven += i;
    } else {  // If it's not even, it's odd
        sumOdd += i;
    }
    i++;
}

// Printing the sums
console.log(`Sum of even numbers: ${sumEven}`);
console.log(`Sum of odd numbers: ${sumOdd}`);
