// //  DATA TYPES:
// // ---> examples

// //strings 
// console.log("Hello, World.");

// let email = "djduncanjames@hotmail.com";
// console.log(email);

// // String Concatenation  (Join strings together)

// let firstName = "Tyson"
// let lastName = "Fury";
// let fullName = firstName + " " + lastName;   // the quotes allow for a space between the strings
// console.log(fullName);


// // selecting specific character position [square brackets]

// console.log(fullName[0]);


// // string (properties) 
// console.log(fullName.length);



// //string methods 
// console.log(fullName.toUpperCase());

// let result = (fullName.toLowerCase());   // storing  value of the variable in memory

// console.log(result, fullName)  // 

// let index = email.indexOf("@");
// console.log (index);

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------


// Common String Methods

let email = "mario@thenetninja.co.uk";

//let result = email.lastIndexOf("n");     // finds last index

//let result = email.slice(2,5);   

// ---> The slice() method extracts parts of a string and returns the extracted parts in a new string. 
//The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

// let result = email.substr(4,10); 

//let result = email.replace ("m", "w");  // replaces first instance of character in a string

let result = email.replace ("n", "w"); // only replaces first "n" 

console.log (result);

//---------------------------------------------------------------------------------


