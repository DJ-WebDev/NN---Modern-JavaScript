// Callback Functions:

// We can pass a function in as an argument:
// The following code contains a callback function



const myFunc = (callbackFunc) => {
  //do something
  let value  = 50;
  callbackFunc(value);    //--->  Callback Function
};
                          // Passing in a function as an argument
myFunc(function(value){   // defines the callback function 
  //do something
  console.log(value);
});

// -->  Arrow Syntax :

myFunc(value =>{        // Written with arrow syntax instead
  //do something
  console.log(value);
});

//--------------------------------------------------------------------------