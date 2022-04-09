// Control FLow Techniques:

// Someitmes using If Statements can be longwinded and redundant
// For Example:

// using IF Staements 

 const grades = "D";

  if (grades === "A") {
    console.log("You got an A!")
  
  } else if(grades === "B"){
    console.log("You got a B!")
    
  } else if(grades === "C"){
    console.log("You got a C!")

  } else if(grades === "D"){
    console.log("You got a D!")

  } else if(grades === "E"){
    console.log("You got a E!");
  
  } else {
  console.log("You FAILED!");
}

console.log("----------------------")
 // The above ^^^ is tiresome to write, too much code..
 
 // -------------------------------------------------------------------------- 

// ---> SWITCH STATEMENTS
 
 // Switch Statements are good for evalutaing a variable with several different values
//  Best way to do this is with a switch statement:
//  Use the SWITCH statement to select one of the many {CodeBlocks} to be executed



// ** NOTE--> once the statement finds the correct case, 

//            it will continue to log the remaining {CodeBlock}

//  ** NOTE --> SWITCH STAEMENTS USE STRICT EQUAlITY TO EVALAUATE ie. === The TYPE MUST MATCH  string , number etc      

const grade = "B";    // If Outside the cases in the statement, default will log to console
    // If Outside the cases in the statement, default will log to console


switch(grade){
  case "A":                    // case KEYWORD (We are checking all the different possible "cases" -> ie. what it could be)
    console.log("You got an A!");
    break;                      // break; -->To Prevent the statement from logging EVERY case after it meets the condition,
  case "B":                     // Without using break, the remaining {CodeBlock} after the case would log to the console
      console.log("You got a B!");
      break;                    // Breaks out of the Switch Statement
  case "C":
    console.log("You got a C!");
    break; 
  case "D":
    console.log("You got a D!");
    break;  
  case "E":
    console.log("You got a E!");
    break;  
  default:                        
    console.log("Not A Vaild Grade");  // Default does not require a break
}
// -----------------------------------------------------------------
