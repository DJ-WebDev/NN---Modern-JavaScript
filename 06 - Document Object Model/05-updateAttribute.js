// Selecting and updating attributes // --------------------------------

//  How do we select PaymentRequestUpdateEvent, and create attributes?

//-----------getAttribute  / setAttribute // ---------------------------------


const link = document.querySelector("a");

console.log(link.getAttribute("href"));  //--> href is standard tag
// update attribute value
link.setAttribute("href", "https://www.thenetninja.co.uk") // updates href link attribute
link.innerText = "The Net Ninja Webpage";  // updates text attribute

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class")); // selects the class attribute
mssg.setAttribute("class", "success"); // sets new value for class error->Success
console.log(mssg.getAttribute("class")); // logs update
mssg.setAttribute("style", "color: green")  // Can create NEW attributes


// We can: Get, Set, & Create Attributes This Way
//----------------------------------------------------------------------------------------