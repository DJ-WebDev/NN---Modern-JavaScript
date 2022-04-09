// Else If Statements

const password = "p@ssword"

if (password.length >= 8){
  console.log("Your Password Is Too Long!")
}
// This only logs if the password is over 8 characters, 
// but what if we want feedback if the password is too short?

// We use an ELSE statement

const passwords = "p@ssw"

if (passwords.length >= 8){     // If This conditon is met, the If {CodeBlock} will execute,      
  console.log("Your Password Is Too Long!");
} else {    //If the first condition is NOT met, the Else {CodeBlock} will execute. 
  console.log("Your Password Is Too Short!"); 
}
// In the example above ^^^,  
// Only one {CodeBlock} can run: Either the IF (Statement) or the ELSE {Statement}.

//________________________________________________________________________________________
//----------------------------------------------------------------------------------------

// How do we check an additional condition, and give additional feedback ? 
// -- > For Example, lets also check if the password is AT LEAST 12 characters, 
//  and if it is, log the additional feedback   
//
//  Instead of having 2 if Statements log to the console, 
//  Like Below:  
const passwordss = "megap@ssword"

if (passwordss.length >= 12) {
  console.log ("Your Password is VERY Strong!")
}

if (passwordss.length >= 8){     // If This conditon is met, the If {CodeBlock} will execute,      
  console.log("Your Password Is Too Long!");
} else {    //If the first condition is NOT met, the Else {CodeBlock} will execute. 
  console.log("Your Password Is Too Short!"); 
}

//----------------------------------------------------------------------------------------------
// We can use the 'else iF' keyword to make a new statement like this:

const passwordsss = "megap@ssword"

if (passwordsss.length >= 12) {         // If This conditon is met, the If {CodeBlock} will execute,
  console.log ("Your Password is VERY Strong!")
}

else if (passwordsss.length >= 8){      // Else If the first condition is NOT met, the Else IF {CodeBlock} will execute.     
  console.log("Your Password Is Too Long!");
} else {                                // ELSE, If no other conditons have been met, the ELSE  {CodeBlock} will execute
  console.log("Your Password Is Too Short!"); 
}

// We can have MANY else if statements, 
//but only ONE {CodeBlock} will run if the condition is TRUE
//
//  --> How do we check multiple conditions inside one () statement? 
// --> Logical Operators  --> See next Lesson
//---------------------------------------------------------------------------------------------

