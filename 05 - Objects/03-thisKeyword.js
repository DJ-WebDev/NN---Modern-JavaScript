/*        This   --> KEYWORD

The THIS Keyword is a "Context Object"
It represents the context in which the current code is executed
Depending on where and how we use it, the value is going to be different 

If we use "this" inside the ROOT of a document, it will refer to the: 
GLOBAL context -> the Window Object -- 
See Below                              */
console.log(this);  //  logs the Window Object, Global Context
//-----------------------------------------------------------------------------------------------

let user = {
  firstName: "Crystal",    
  age:30,             // key:value,
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: ["Why Mac & Cheese Rules!","10 Things To Make With Marmite!"],
  login: function(){      
    console.log("The User Logged In");
  },           
  logout: function(){
    console.log("The User Logged Out")
  
  },    // We need to use the: 'THIS KEYWORD" 

  logBlogs: function(){  // '
    this.blogs    //  This', refers to the USER OBJECT --> user

  },
};



// user.logBlogs();