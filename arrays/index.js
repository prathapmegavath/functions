let arr = [1, 2, 3, 4, 5];
console.log(arr.length); 

// Output: 5


arr.push(6);
console.log(arr); 

// Output: [1, 2, 3, 4, 5, 6]


arr.pop();
console.log(arr); 

// Output: [1, 2, 3, 4, 5]


arr.unshift(0);
console.log(arr); 

// Output: [0, 1, 2, 3, 4, 5]


arr.shift();
console.log(arr); 

// Output: [1, 2, 3, 4, 5]


arr.reverse();
console.log(arr); 

// Output: [5, 4, 3, 2, 1]


let index = arr.indexOf(3);
console.log(index);

// Output: 2 (assuming the array is [5, 4, 3, 2, 1])


let exists = arr.includes(3);
console.log(exists);

// Output: true


arr.sort((a, b) => a - b);
console.log(arr);

// Output: [1, 2, 3, 4, 5]


let str = arr.join(',');
console.log(str);

// Output: "1,2,3,4,5"

// -------------------------------------------------------------

let arr1 = [1, 2, 3, 4, 5];
arr.push(6); 
arr.shift();
console.log(arr); 

// Output: [2, 3, 4, 5, 6]


let arr2 = [1, 2, 3, 4, 5];
let reversedString = arr.reverse().join('-'); 
console.log(reversedString);

// Output: "5-4-3-2-1"



let arr3 = [5, 3, 8, 1, 4];
arr.sort((a, b) => a - b); 
arr.pop(); 
console.log(arr); 

// Output: [1, 3, 4, 5]



let arr4 = [3, 4, 5];
arr.unshift(1, 2);
arr.shift(); 
let length = arr.length; 
console.log(arr);
console.log(length);


 // Output: [2, 3, 4, 5]
// Output: 4



let arr5 = [5, 3, 8];
let arr6 = [7, 2, 6];
let combined = arr5.concat(arr6); 
combined.sort((a, b) => a - b);
combined.pop(); 
console.log(combined);

// Output: [2, 3, 5, 6, 7]

// ----------------------------------------------------



let a = ["Alice", "Bob", "Charlie", "David"];
a.unshift("Eve");

a.pop();

let List = a.includes("Bob");
console.log(List);     

console.log(a); 

// Output: true

// Output: ["Eve", "Alice", "Bob", "Charlie"]


let str7 = "Learn,Practice,Improve";


let words = str7.split(",");


words.reverse();


let result = words.join(" ");

console.log(result);


// Output: "Improve Practice Learn"


let playlist1 = ["Song1", "Song2", "Song3"];
let playlist2 = ["Song4", "Song5"];


let playlist = playlist1.concat(playlist2);

playlist.shift();

playlist.push("Song6");

console.log(playlist); 


// Output: ["Song2", "Song3", "Song4", "Song5", "Song6"]



let movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];

let middleMovies = movies.slice(1, 4);

let additionalMovies = ["The Matrix", "The Godfather"];
let combinedMovies = middleMovies.concat(additionalMovies);

combinedMovies.reverse();

console.log(combinedMovies);

// Output: ["The Godfather", "The Matrix", "Interstellar", "Avatar", "Titanic"]


let str8 = "John,Doe,Jane,Smith";

let namesArray = str8.split(",");

let includesJane = namesArray.includes("Jane");
console.log(includesJane); 

let reversedNames = namesArray.reverse().join(" ");

console.log(reversedNames);

// Output: true

// // Output: "Smith Jane Doe John"


let numbers = [1, 2, 3, 4, 5];

numbers.shift();
numbers.push(6, 7);

let b = numbers.length;

console.log(numbers); 
console.log(b);  


// Output: [2, 3, 4, 5, 6, 7]

// // Output: 6


let shoppingCart = ["Milk", "Bread", "Eggs", "Butter"];

let c = shoppingCart.includes("Eggs");
console.log(c); 

let d= shoppingCart.indexOf("Butter");
if (d !== -1) {
    shoppingCart.splice(d, 1); 
}

shoppingCart.push("Cheese", "Juice");

console.log(shoppingCart);

// Output: true

// Output: ["Milk", "Bread", "Eggs", "Cheese", "Juice"]


let array1 = ["Alice", "Bob", "Charlie"];
let array2 = ["David", "Eve"];

array1.reverse();

let Array = array1.concat(array2);

 Array.unshift("Frank");

console.log(Array); 
