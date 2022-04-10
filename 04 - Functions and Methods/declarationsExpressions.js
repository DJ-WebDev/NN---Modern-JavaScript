//
// Functions and Methods:
/* A Method is just a function that does something

Function Declarations and Function Expressions

FUNCTIONS:
--> Functions fall under the OBJECT Data type

Functions allow us define a block of code, that we can call and execute any time we want

Think of functions like a box with some code inside of it, that does a particular thing
When we want to run the code inside the box
We can call the functions and execute the code from outside of the box 

--> We can define a function once, and call it multiple times to run
            */
//---------------------------------------------------------------------------------
// ----> Function Declaration: 

// function declaration
function greet(){                   // Using the Function KEYWORD to declare a function
  console.log("Hello There");      // {CodeBlock} will NOT execute without being invoked, or called
};
// We need to call the function   
greet();                           //  funcName();
greet();                           //  can be called multiple time
greet();                           
// function() <--  () is what "calls" or invokes the {CodeBlock}

//---------------------------------------------------------------------------------------------------
//    Function Expression --> When we Store a function inside of a variable. 
// ** Whenever a variable is = to something, that is called an expression
// Function Expressions store functions inside variables, and invokes them in a similar way to a function declaration:

const speak = function(){     // The function does not require a name, as it is now stored as the variable speak
  console.log("Good Day!");

};   // <---- ; Semi-Colon at the end of EVERY expression               

speak();            // varName();           
speak();            // We invoke the function in the exact same way, but use the variable name instead of the function name
speak();

//-----------------------------------------------------------------------------------------------------------
//  ** IMPORTANT NOTE:   Function Declarations and Function Expressions behave in similar ways; however,
// --------------------> Hoisting refers to a built-in JavaScript heirarchy, 
//     HOISTING          Function Declarations are HOISTED to the top of the of the enclosing fucntion, or global scope 
//

//You can use the function before you declare it; however, this is NOT best practice
   
salutation();         
salutation();         // Note --> This will not work with an expression -->
salutation();         // -- See Below :

function salutation(){                   
  console.log("Salut");     
};
//---------------------------------------------------------------------
//  -- The Expression Below, sadly, will generate an error - Hoisting only applies to Declarations, not Expressions

cheer();            //  Uncaught ReferenceError: Cannot access 'cheer' before initialization - line :63          
cheer();            //            
cheer();            //   JS cannot Initialise a Function Expression before Accessing the Function Expression itself        

const cheer = function(){     // EXPRESSIONS CANNOT BE HOISTED LIKE DECLARATIONS
  console.log("Slava Ukraini!");
};  
//----------------------------------------------------------------------------------------------------------------------
// Best Practice --> Keep to logical ordering when writing code: 
//                    Declare Functions before you call them, to avoid errors and keep your code organised

//-----------------------------------------------------------------------------------------------------------------










