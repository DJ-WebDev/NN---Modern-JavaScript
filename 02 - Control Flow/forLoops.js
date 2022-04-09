//  Control Flow:

// Loops and Conditional Statements

//  Use Loops for cycling through data
//  Use Conditional Statements for checking conditons
                        
                        // if (some conditon is true) {
                        //   do something...
                        // }
//------------------------------------------------------
// LOOPS  -- there are many types of Loops in JavaScript

//-->  the {}  represents the CODE-BlOCK for the LOOP

// FOR Loops -->  

//'for' KEYWORD  ---> 3 things in the brackets:
// (let i = 0;  --> Variable - The initialisation variable is like a counter for how many times we run the code inside loop)
//  i < 5;      --> Condition - A condition that evaluates true or false. IF Condition is TRUE, the {} CODE-BLOCK will execute
//              --> if the condition evaluates to FAlSE, it will NOT execute the CODE-BLOCK {}.       
//  i++)        --> Final Expression - Will execute every time at the END of every loop, at the END of the CODE-BLOCK

// How this loop works ---> 
// ---> the variable i is equal to zero, then the condition evaluates if i is less than 5. 
// If this evaluates TRUE, the {CODE-BLOCK}  will execute, and then at the end, i will increment++ by 1.  
// The loop will now run again, but the variable i will now be equal to 1. The condition will evaluate again if 1 is less than 5. 
//  If true, the code block executes and then the variable i increases by 1 again. 
//  The loop continues this cycle until i is no longer less than 5.    

// for (let i = 0; i < 5; i++){
//   console.log("In loop: ", i);
// }  
// console.log("Loop Finished");

// ----------------------------------------------------------------
//  A 'real-world' for loop, will cycle through data, like an array of items in a database, and do something with those items:

// imagine the three mnames below are a database of hundreds of names, 
// but we don't know how many names are in the database. 
// how would we find out the amount of names in the database?

// ---> Running a FOR LOOP can determine the amount of names in the database:

// const names = ["Shaun", "Mario", "Luigi"];

// for (let i = 0; i < names.length; i++) {
//   console.log(i);       // The variable (i) will log to the console until the loop finishes  
// }
//  --> THIS  ^^^ lOOP WILL lOG THE NUMBER OF NAMES IN THE DATABASE (ARRAY)   
//----------------------------------------------------------------------------

// --> HOW CAN WE LOG THE NAMES IN ORDER?  

// const names = ["Shaun", "Mario", "Luigi"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);    // We can use square bracket [] notation to log each element, or value in the array
// }
// --> THIS ^^^ LOOP WILL LOG THE NAMES IN ORDER TO THE CONSOLE

//-------------------------------------------------------------------

// --> How can we make an HTML template of each name ? 

const names = ["Shaun", "Mario", "Luigi"];

for (let i = 0; i < names.length; i++) {
  let html =  `<div>${names[i]}</div>`;
  console.log(html)
}
// THIS LOOP ^^ LOGS AN HTML DIV TEMPLATE FOR EACH NAME IN THE ARRAY 
//--------------------------------------------------------------------------------------------

// ** TERMINOLOGY :  ITERATION.  The cycle of each loop pass through the codeblock is called an iteration.  

// ---------------------------------------------------------------------------------------------------------