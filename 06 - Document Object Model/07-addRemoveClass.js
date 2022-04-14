// How to:

// Add, Remove or Change classes on HTML elements

// // How to get classes: .classList 
// const content = document.querySelector("p");
// console.log(content.classList); //gives us a list of all the different classes of the content, "p" element

// // How to Add and Remove classes:
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

//----------------------------------------------------------------------
//Challenge: Query all the p elements and ADD a class where error and success are located.
//First, we need a reference to all the p tags:

const paras = document.querySelectorAll("p");

paras.forEach(p => { // cycle through p elements to search for content that includes
  if(p.textContent.includes("error")){    // textContent Gets ALL content incld. hidden content. 
    p.classList.add("error");  // adds the class error to content with word error
  };       
  if(p.innerText.includes("success")) {  //innerText only gets whats visible
    p.classList.add("success");  //adds the class success to content with word success
  }                                  
});

//----------------------------------------------------------------------------------------
// How to Toggle classes on and off:
// --> If an element doesn't have a classs, add it. 
// --> If an element does have a class remove it.
//---------------------------------------------------------------------------------------

const title = document.querySelector(".title");

title.classList.toggle("test");
//----------------------------------------------------------------------------------------