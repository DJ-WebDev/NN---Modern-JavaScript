// Change the style element with style

const title = document.querySelector("h1");

//title.setAttribute("style", "margin: 50px;"); // NO --> this way overwrites value
// How do we add  extra styles instead of overwriting them?

console.log(title.style); // style property of title element
console.log(title.style.color); // logs the value name of the property: -> ie. orange

// How do we add  extra styles instead of overwriting them?

title.style.margin = "50px" //-- In this method we have added to the Value, NOT overwritten it
// much preferred method as it does not overwrite the style, it ADDS to it 

title.style.color = "crimson"; // this now Updates the color value without overwriting the margin 

// what about font size?
// in JS camelCase:
title.style.fontSize = "60px"

// ** Note --> How do we delete a style or REMOVE a value?

title.style.margin = ""; // empty string re-sets the margin to null

//----------------------------------------------------------------