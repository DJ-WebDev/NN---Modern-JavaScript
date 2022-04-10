// ------  =>  Arrow Syntax

//   =>   Arrow Functions are a recent addition to JavaScript

// Regular Function Syntax:
const calcArea = function(radius){
  return 3.14 * radius**2;
};
const area = calcArea(5);
console.log("The Area Is:", area);



// --> The Modern Way:
// ARROW FUNCTION SYNTAX
                  // NO Function keyword
const calcCircle = (radius) => {   // <--  () are NOT required if only one parameter is present
  return 3.14 * radius**2;
};
const circleArea = calcCircle (15);
console.log("The Circle's Area Is:", circleArea);

//--------------------------------------------------------------------------------------------

const calcCircle2 = radius => 3.14 * radius**2;           // EVEN SHORTER WAY !!
const circleArea2 = calcCircle2 (25);                     // SUPER Streamlined
console.log("The 2nd Circle's Area Is:", circleArea2);


// EXERCISE:
// change this to arrow syntax:

const bill = function(products, tax){
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products [i] * tax
  }
  return total;
};
console.log(bill([10,15,20], 0.2));

//---------------------------------------------------------------------

// ARROW SYNTAX:

const bills = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products [i] * tax
  }
  return total;
}
console.log(bills([20,30,40], 0.2));

//---------------------------------------------------------------







