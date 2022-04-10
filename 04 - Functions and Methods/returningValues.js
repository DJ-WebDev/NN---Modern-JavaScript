
// Returning Values - 
// Storing values in memory to be used later on

// Lets find the area of a circle by passing in some values

const calcArea = function(radius){
  return 3.14 * radius**2;       // ** squared, power of 2 
}                                 // When a function returns a value, it must be stored in a varibale
const result = calcArea(5);    // --> The variable we named result, now stores the returned value in memory
console.log (result)

// --- >  The Returned Value is now stored in memory which can be called on at any time

//-----------------------------------------------------------------------------------------------------------