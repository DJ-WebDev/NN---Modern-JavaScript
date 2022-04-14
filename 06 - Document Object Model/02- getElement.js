//Selecting Elements:  Another method to grab elements:

// Get an Element by ID    // grabs SINGLE element

// const title = document.getElementById("page-title");
//   console.log(title);   //name of id required

/* Get elements by their class name
--------------------------------------------------------------------------
lets select the elements classed as error, we name the object errors, 
because we are grabbing 2 error classes (can name it anything)      
*/
// const errors =  document.getElementsByClassName("error");                                 
//   console.log(errors)         //  multiple elements are logged as an HTML Collection 
//   console.log(errors[0])   // [0] to select the first error element
 
  // Like a NODE list, we can use Square Notation to get a single element from the collection
/* but we CANNOT use the forEachmethod on an HTML Collection    

--> Node Lists and HTML Collections are similar, but not identical
ie --> -- We cannot use forEach method on an HTML Collection
  ---------------------------------------------------------------------------

  Lets grab a reference to all the P tags in the document
Get elements by their tag name  */

const paras = document.getElementsByTagName("p");
console.log(paras);  // logs an HTML collection with the 3 <p></p> elements 
console.log(paras[1]) // Isolate single <p></p> tag

/* Similar method to Query Selector   */