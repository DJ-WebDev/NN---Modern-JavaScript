/* 
Selecting Elements:   
              querySelector | querySelectorAll
-> Summary: single elements | multiple elements (node list) 

*/

// Lets Query the Dom and select a paragraph element:

// We can interact much like CSS

// const para = document.querySelector("p");  // selects the first P element on the page
//   console.log(para);                // We can select more specifically

// const para1 = document.querySelector(".error");  // error and div are both used,
//   console.log(para1);
        
//                       //unique CSS-style selector syntax | div with class of error
//   const para2 = document.querySelector("div.error")
//     console.log(para2);              // Parent.Child
  
//                                       //Parent > Child syntax
//   const para3 = document.querySelector("body > h1")
//   console.log(para3);                  // 'Copy Selector' from DevTools right click 
                                          //gives us the syntax we can paste into our code

//--------------------------------------------

// What if wanted to grab multiple elements? 
// querySelectorALl  (stores as a collection)

// const paras = document.querySelectorAll("p");   //like an array, but has unique features
//   console.log(paras[2]);                        // stores as a node liSt, 
//               //Square Notation can select index position of elements  
  
//--------------------------------------------


// forEach
// const paras1 = document.querySelectorAll("p");
     
//      // forEach cycles through the node list
// paras1.forEach(para => {  
//   console.log(para);  // Cycles through and logs each node list element to the console
// }

//   )
// console.log(paras1[2]);  // logs twice because of this line

//---------------------------------------------------------------------------

const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");

console.log(errors);
//--------------------------------------------------------------


