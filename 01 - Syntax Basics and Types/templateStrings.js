


// TEMPLATE STRINGS
// 


const title = "Best Reads of 2022";
const author = "Ian";
const likes = 30;


// Concatenation Way -- very long winded method

// let result = "The blog called " + title + " by " + author + " has " + likes + " likes.";
// console.log(result)

//--------------------------------------------------------------

// Template Strings / Literals Way - much preferred method to write code, esp for many variables
// (allows us to directly inject variables into the string, with using + signs)

// USE BACK TICKS `

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result)

// ----------------------------------------------------------------------------

// Creating HTML templates
// good use case is to create HTML templates to use later.
// for example we have some dynamic content we got back from a database 
// we want to create a template with that content inside of it

let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);

// Currently, this outputs as a string, to the console only, later we will learn how to use the template in the HTML itself


