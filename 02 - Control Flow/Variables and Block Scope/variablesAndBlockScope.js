// Control FLow Techniques:

// Code Block {} {CodeBlock} refers to section of code that runs when a conditon is met.

// Block Level Scope with Variables

// -- > Scope:  The area by which a value is relevant. 
// -- > Same Rules apply to const and let Variables
// -- > *Note* var is deprecated and ignores Block Scope
//                 
// Global Scope: This variable is in the ROOT of the document: 
let age = 30;    // Global Scope Variable --> age can only be declared once in THE SAME SCOPE
                 // Can be accessed anywhere in the file.  
if(true){
  let age = 40; 
  let name = "Shaun";      // Can update the Global Scope variable from INSIDE the Block Scope  
  console.log("Inside the 1st {CodeBlock}: ", age, name);  // Only logs the values from INSIDE the {CodeBlock}

  if(true){           //local Scope: Does not overwrite Block Scope
    let age = 50;     // Nested {CodeBlock} takes the most recent declared value, inside the local scope, then Block -> Global.. 
    console.log("Inside the 2st {CodeBlock}: ", age, name);
  }
}

console.log("Outside the {CodeBlock}: ", age, name);   // ONLY Logs value of Variable from OUTSIDE the {CodeBlock}

//-------------------------------------------------------------------------------------------------

