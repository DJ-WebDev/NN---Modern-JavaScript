

// ARRAYS

// String Array
let ninjas = ["Sean", "Ryu", "Chun-li"];
//overirde it
//ninjas[1] = "ken";  // overrides position 1 in the array
//console.log(ninjas[1]); 

//------------------------------
//NUMBER Array

//let ages = [20, 25, 30, 35];
//console.log(ages[2]); 


// Arrays NOT limited to ONE type of DATA
// 
// let random = ["SEAN", "CRYSTAL", 30 , 20];
// //console.log(random);

// console.log (ninjas.length);
// console.log (random.length);


// ARRAY METHODS

// ----> .join                       (joins array elements, this method adds a comma to each value in the array. can use "-" etc. ) 
//let result = ninjas.join (",");
//console.log(result);


// ----> .indexOf                       (returns  position)
//let result = ninjas.indexOf("Chun-li");
//console.log(result);


// ----> .concat                        (takes an array and joins (Concatenates) another arrary with it)
//let result = ninjas.concat(["Ken", "Crystal"]);
//console.log(result);

//----> .push                                              // appends item to the array
// let result = ninjas.push("Ken");                        // returns length of new array (if 'result' is console.log)
// console.log(result);
// console.log(ninjas);                                    // considered destructive as it alters the original values

//----> .pop
let result = ninjas.pop();                              // removes and returns last item in array
console.log(result);                                    //    
                                                        // also considered destructive as it changes the original value
//----------------------------------------------------
