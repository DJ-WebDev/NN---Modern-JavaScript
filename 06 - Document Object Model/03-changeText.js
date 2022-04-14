
/* Change the TEXT in an element:
Lets use the query selector to select a <P> element, and change the text inside of the element text */

//set para to select all P tags    // By using simply P, 
                                   //CS Selector will select the first <P tag by default    
// const para = document.querySelector("p"); 
  
  // console.log(para.innerText); // innerText is a property
 
  //-----------------------------------------------------------------
 
 //How to change the element's text?
 //The .innerText property
  
// para.innerText = " Ninjas Are Awesome!"; // = Completely Overwrites P element 
      // can use += to append the new string:
       
// para.innerText += " Ninjas Are Awesome!"; // will append orig. <p> element to new string

   //------------------------------------------------------------------

   // What if we want to change the text for several elements at once? 
   // The  innerText Property
  //  const para = document.querySelector("p");
  //  // Select ALL of the P tags, and use the property innerText
  //  const paras = document.querySelectorAll("p"); // Will generate a Node list reference
  
// we can cycle through the elements with the forEach method.
// paras.forEach(para  => { // pass in a callback function
//   console.log(para.innerText); // logs each individual p element to the console
//     para.innerText += " New Text" ; // Update the content of each p element
// });  // appends "New String" to every p element in the HTML Document
 // 
 // This is how we can change the text
//---------------------------------------------------------------

