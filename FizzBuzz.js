let Fizz = [];
let Buzz = [];
let FizzBuzz = [];
let other  = [];

for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) 
    {
       console.log("FizzBuzz");
     } 
    else if (i % 3 === 0) {
            console.log("Fizz");
     } 
    else if (i % 5 === 0) {
           console.log("Buzz");
     } 
    else {
            console.log(other);
    }
}


console.log("Total Number of Fizz = "      + Fizz.length);
console.log("Total Number of Buzz = "      + Buzz.length);
console.log("Total Number of FizzBuzz = "  + FizzBuzz.length);
console.log("Total Number of Other = "    + other.length);
