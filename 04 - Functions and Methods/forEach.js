// Methods:

//forEach Method: Like a LOOP, bit a bit more elegant:


//forEAch is built-in Array Method that iterates through an array

let people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-Li"];

// people.forEach((person, index) => {       // we can add two paramters to this callback function 
//   console.log(index, person);
// }); 

// Callback Functions are functions that are passed through as arguments

// ANOTHER WAY:

const logPerson = (person, index) => {
  console.log(`${index} - Hello ${person}`)};

people.forEach(logPerson);    // --> best to write Callback Functions directly here)