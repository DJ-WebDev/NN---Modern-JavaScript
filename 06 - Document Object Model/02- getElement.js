//Selecting Elements:

// Another method to grab elements:

// Get an Element by ID    // grabs SINGLE element
const title = document.getElementById("page-title");
  console.log(title);                //name of id required

// Get elements by their class name

// we named the object errors because we are grabbing 2 error classes (can declare anything)
const errors =  document.getElementsByClassName("error");
  console.log(errors)         //  multiple elements are logged as an HTML Collection 
  console.log(errors[0]) // Like a NODE list, we can use Square Notation to gety a single element from the collection
/*  logs an HTML Collection   -- We cannot use forEach method on 
--> similar but not identical

  Get elements by their tag name  */