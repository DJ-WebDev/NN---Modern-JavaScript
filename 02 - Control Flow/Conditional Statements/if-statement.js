// CONDITIONAL STATEMENTS

//  A Conditional statement that checks if the condition is true. 

// IF Statement:   If a certain condition is true, execute the {CodeBlock}

// An 'if statement' is a conditional statement that will only execute if the condition evaluates to true
// There is no "counter" variable like a loop, as an If Statement only executes the {CodeBlock} once, or not at all.
// IF STATEMENTS DO NOT LOOP

// Number ----------------

const age = 25;

if(age > 20){             // Conditon (what we want to evaluate)
  console.log ("You are over 20 years old.")    //this {CodeBlock} will execute if the condition is true
}

// Array -----------

const ninjas = ["Shaun", "Ryu", "Chun-Li", "Yoshi"];
if (ninjas.length > 3){
  console.log ("That's a lot of ninjas!")
}

// -- In the real world, IF statements are used for things like:
// If the password is under 8 characters, Then {do something}
// If a user is logged on, then {do something}

// for example:

const password = "p@ssword"

if (password.length >= 8){
  console.log("Your Password Is Long Enough!")
}
// This only logs if the password is over 8 characters, 
// but if we also want to know the password is under 8?
//  
// ELSE IF Statements --> See Next Lesson
//---------------------------------------------------------------------------------------------

