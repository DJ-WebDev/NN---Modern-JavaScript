// TYPE CONVERSION

let score = "100";            // Because 100 is a string, "100" + Concatenates with the number 1
// console.log(score + 1);      //  -- > 1001 is logged to console   
                              // -- > we want 100 + 1 ie 101
//---------------------------------------------------------------------------

// How we convert a string to a NUMBER -->

// score = Number(score);          //   UPDATES / CONVERTS the variable 'score', the string 100 into a NUMBER
// console.log(score + 1);         //  evaluates the numbers and returns the correct result -- > 101
// console.log(typeof score);      // FYI --> You can check the type of something by using the TypeOf operator

//---------------------------------------------------------------------------

// let result = Number("hello");   // NaN --> Not a Number 
// console.log(result);
//---------------------------------------------------------------------------
// TURN A NUMBER INTO A STRING

// let result = String(50);        // converts string into a number
// console.log(result);            // logs 50 
// console.log(typeof result);      // lets check the type!

//--------------------------------------------------------
let result = Boolean(-10);      //  -10 is TRUTHY
// let result = Boolean(0);      //  100 is TRUTHY
//let result = Boolean(0);      //  0 is FALSY  
console.log(result);
console.log(typeof result);      // lets check the type!

//   the terms Truthy and Falsy are used to describe the value when converting data types to Boolean. 
// what about a boolean string of ZERO?

// let result = Boolean("0");     //   TRUE --> Strings of any length are TRUTHY (True), even ZERO
// //let result = Boolean("");     //   FALSE --> String has NO characters, FALSY (False)

// console.log(result);
// console.log(typeof result);

//-----------------------------------------------------------