// 

//--> What if we only want to Execute {CodeBlock} when a condition is false? 

// Logical NOT (!) 

// When (!) is placed in front of a Boolean, it reverses it's status    

let user = false;    // FALSE means "not logged in"
  if(!user){          // We want to execute the (CodeBlock}, only when the user is false 
    console.log("You must be logged in")                  // the !user only affects INSIDE the expression, 
                                                          // not the global variable
}
console.log(!true);       // When (!) is placed in front of a Boolean, it reverses it's status 
console.log(!false);    // When (!) is placed in front of a Boolean, it reverses it's status 
