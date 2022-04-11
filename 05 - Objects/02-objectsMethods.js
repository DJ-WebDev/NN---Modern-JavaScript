
// How do we add methods to an object? 

// Lets ADD some methods to an Object:

let user = {
  firstName: "Crystal",    // Properties --> KEY:VALUE pair,  
  age:30,             // key:value,
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: ["Why Mac & Cheese Rules!","10 Things To Make With Marmite!"],
  
  // A method is a function, but is defined in an object -- Essentially, this method has attached to this User Object "user"
  login: function(){      // <--- adding method (same way -- key:value pair)
    console.log("The User Logged In");
  
  },           // , if we want to add more methods
  logout: function(){
    console.log("The User Logged Out")
  
  },              // lets add a method to log the array: blogs  -to the console
};               //  But How ? ---> SEE NEXT LESSON
                // We need to use a: 'THIS KEYWORD"

// --> Calls the method - login
user.login()      //like string method dotNotation
user.logout();

// console.log(typeof user)  // logs the data type of the object, user
//---------------------------------------------------------------
