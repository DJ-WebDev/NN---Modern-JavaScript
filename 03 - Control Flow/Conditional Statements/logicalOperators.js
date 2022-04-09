// Control FLow Techniques:
 

//Conditional Statements:
// 
//--> How do we check multiple conditions inside one () statement? 
//
// --> Logical Operators:
//  
// --->  Logical Operators: 
// --->  OR || and AND &&

const password = "p@sswo"

if (password.length >= 12 && password.includes("@")) {         // If both conditons are met, {CodeBlock} will execute,
  console.log ("Your Password is VERY Strong!")
}
else if (password.length >= 8 || password.includes("@") && password.length >= 5){ //if condition is TRUE,execute {CodeBlock}     
  console.log("Your Password Is Strong Enough.");
} else {                                // ELSE, If no other conditons have been met, the ELSE  {CodeBlock} will execute
  console.log("Your Password Is NOT Strong Enough!"); 
}

// WE CAN ADD LOGICAL OPERATORS TO OUR "if STATEMENTS" 
// To evaluate a combination of conditions, and execute {CodeBlock} when a condition is TRUE.
//-------------------------------------------------------------------------------
//  BUT....
//--> What if we only want to Execute {CodeBlock} when a condition is false? 
// Logical NOT (!) --> SEE NExt Lesson

