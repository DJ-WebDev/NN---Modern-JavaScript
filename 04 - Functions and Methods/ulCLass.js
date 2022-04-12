// get a reference to the 'ul'

//  <ul class="people"></ul>   
// has been added to the index.html file

// Callback function in ACTION:  

// Callback Function that generates an HTML Template for each person in the array

// const ul = document.querySelector(".people");   //  Reference to the <ul></ul> element of the index.html file -- like CSS
// const people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-Li"];
// let html = ``;  // empty `${template string}`  - back-ticks

// people.forEach(function(person){    //callback function (take in the person which is the elemnt we are iterating over)
//   //create html template
//   html += `<li style="color: purple">${person}</li>`;   // appends this HTML template to each iteration -
//   //  += Cocatenates the HTML value (an empty ${template string}) with another `${template string}` containing the HTML Code
// });

// console.log(html);   // But How do we ouput this to the browser??? 
// ul.innerHTML = html;  // Places the HTML template we created in the <ul></ul> element of the index.html file
              
// --> ARROW SYNTAX VERSION:
//-----------------------------------------------------------------------------------------------

const ul = document.querySelector(".people");   //  Reference to the <ul></ul> element of the index.html file -- like CSS
const people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-Li"];
let html = ``;  // empty `${template string}`  - back-ticks

people.forEach (person =>{    //callback function (take in the person which is the elemnt we are iterating over)
  //create html template
  html += `<li style="color: purple">${person}</li>`;   // appends this HTML template to each iteration -
  //  += Cocatenates the HTML value (an empty ${template string}) with another `${template string}` containing the HTML Code
});
        // logs the HTML template to the console 
console.log(html);   // But How do we ouput this to the browser??? 
ul.innerHTML = html;  // -->  Places the HTML template we created in the <ul></ul> element of the index.html file


//------------------------------------------------------------------------------------------------------------------
// END OF LESSON