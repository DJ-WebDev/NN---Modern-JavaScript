// Control FLow Techniques:


//**RECAP:

// for (let i = 0; i < 5; i++){
//   console.log("In loop: ", i);
// }  
// console.log("Loop Finished");
// console.log("----------------------");

// //--------------------------------------------------------------------------------
// // While Loops: 

// // WHILE loops are similar to FOR Loops: They cycle through data a certain number of times; 
// // however, they have different syntax:

// // A While loop only has one statement inside the brackets(): the condition itself
// // The variable is declared outside of the loop

// let i = 0;

// while (i < 5) {
//   console.log("In loop: ", i);
//     i++;    // -->  // The final expression now resides in the {CodeBlock}
// }                   // without this increment expression, the loop would become infinite and crash the browser, 
//                     // as 0 can never be greater than 5 
// console.log("Loop Finished");
// console.log("----------------------");

// The WHILE Loop above ^^^ gives the same result as the FOR loop Above that 
//-------------------------------------------------------------------------------

// The WHILE Loop below is an alternative to the FOR Loop from forLoops.js

const names = ["Shaun", "Mario", "Luigi"];
let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
//------------------------------------------------------------------------------


