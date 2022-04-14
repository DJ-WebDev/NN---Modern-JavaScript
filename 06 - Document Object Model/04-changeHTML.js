// How do we change the actual HTML code inside the DOM?

// ---> innerHTML

//const para = document.querySelector("p");
//const paras = document.querySelectorAll("p");
//const content = document.querySelector(" .content");
//console.log(content.innerHTML) //= "<h2>THIS IS A NEW H2</h2>";


// --> What if we want to update it?
//content.innerHTML = "<h2>THIS IS A NEW H2</h2>"; 
//  += to append  = to OVERWRITE 
//-------------------------------------------------------------------------

// lets create an HTML template for each person in a database (Array)
const content = document.querySelector(" .content");
const people = ["Mario", "Luigi", "Yoshi"]; // database
             // We want to cycle thru the database and output an HTML template for each person
 
   people.forEach(person => {   // we can do this with a Callback Function
   content.innerHTML += `<p>${person}</p>`; // Updates the HTML in the browser
 });                                        // Appends new p tags
