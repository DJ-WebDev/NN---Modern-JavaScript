

//Primitive Values

let scoreOne =50;                
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);
//----------------------------------------------------
scoreOne = 100;  // Updates a pointed copy of the new Primitive Value, does not affect the previous value in the stack
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

/* --> Note:
 When we update a Primitive Type Value, it does not change anything else in the stack

---> Whats the difference? 

// Reference Values 
-->Note:
When we update a Reference Type Value, it changes and updates the previous original object values in the Heap
*/
userOne = { name: "Ryu", age: 30 };   // Only Stored once on the heap, so any changes will affect it
userTwo = userOne;

console.log(userOne, userTwo);  // Changes BOTH values on the Heap, and updates the previous original values

userTwo.age = 40;  // overwrites the value of userOne in the heap, eventhough its userTwo, because there is only one original object
userOne.name = 'Chun-Li';
console.log(userOne, userTwo);  // Both pointers userOne and userTwo reference the SAME Object Value. 
//If you change either pointers value, it changes them both as they both point to the same value


// Hence the name Reference Type!

// END OF LESSON------------------------------------------------------------------------------------------