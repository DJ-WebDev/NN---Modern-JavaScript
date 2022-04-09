// LOOSE COMPARISONS

let age = 25;
//console.log(age == 25);
// --> loose comparison (different types can still be equal)
//--------------------------------------------------------------------------- 
// == sign is loose comparison, meaning different types can still be equal

// strict comparison (different types cannot be equal)
console.log(age === 25);        // TRUE -> 25 as a number is STRICTLY EQUAL to the variable 25
console.log(age === "25");     // FALSE -> 25 as a string returns false, as its NOT a string its a number -- STRICT meaning EXACTLY SAME 
console.log(age !== 25);      // FALSE -> 25 is not strictly NOT Equal -- ITS EQUAL  -- STRICT meaning EXACTLY SAME 
console.log(age !== "25");   // TRUE -> 25 as a string is strictly NOT EQUAL, so its TRUE, as its NOT a string its a number -- STRICT meaning EXACTLY SAME 

//  ****  IT IS BEST PRACTICE TO USE STRICT COMPARISONS ***