// Control FLow Techniques:


// DO WHILE LOOPS

// 

// Do while loops are an extension of a while Loop

// --> ??  How can we run this loop once, when it can never execute the code block because the condition is always falsey? 

// --->

// let i = 5;            
//   while (i < 5) {      //This {CodeBlock} can never execute because the condition does not evaluate to TRUE                    
//    console.log ("The Value of i is: ", i);
//    i++;
// }

//---------------------------------

// The diff between a 'While Loop', and a 'Do While Loop':  
// Do While will execute a block of code regardless of the condition being initially true or false.

let i = 3;
  do {       // -->  ?? The DO keyword will execute the {CodeBlock} first, regardless if the condition is true or false.
  console.log("val of i is: ", i);
  i++;
} while(i < 5);

//  The DO While Loop will  Execute the {CodeBlock} ---> FIRST, regardless if the condition is true or false.
// then it will loop until the condition evaluates to false
