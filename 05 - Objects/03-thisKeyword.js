/*        This   --> KEYWORD

The THIS Keyword is a "Context Object"
It represents the context in which the current code is executed
Depending on where and how we use it, the value is going to be different 

If we use "this" inside the ROOT of a document, it will refer to the: 
GLOBAL context -> the Window Object -- 
See Below                             */
                    
//-----------------------------------------------------------------------------------------------

let user = {
  firstName: "Crystal",    
  age:30,             // key:value,
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: ["Why Mac & Cheese Rules!","10 Things To Make With Marmite!"],
  
  // regualr function syntax must be used, not arrow =>
  login: function(){      
    console.log("The User Logged In");
  },
// Shorthand version: write a REGULAR function this way with just ()
  logout(){
    console.log("The User Logged Out");
  
  },    // We need to use the: 'THIS KEYWORD" 
 
 // Note: Cannot use arrow => syntax
   // regular function MUST be used, if => was used here, 'this.' keyword would refer to the GLOBAL Window Object, not the Object Context!!!    
  logBlogs: function(){  // this Object Context)
    //console.log(this.blogs);    //  this. refers to the USER OBJECT CONTEXT--> user
    console.log ("This User Has Written The Following Blogs");           // The THIS Keyword is a "Context Object", so the CONTEXT is the object
    this.blogs.forEach(blog => { // forEach array method, Callback Function
      console.log(blog);         // logs each item in the array to the console
    })
  },
};                    // this. represents the context in which the current code is executed -> Global or Object
 
       // When we call this method, JavaScript sets the value of the 'this.' keyword to be the object that this method was used on:   
user.logBlogs();  //In this case, this refers to the object defined as user

console.log(this);  //  logs the Window Object 
//          --> this GLOBAL CONTEXT (outside of the object)
// Just an example to demonstrate GLobal context vs Object COntext
