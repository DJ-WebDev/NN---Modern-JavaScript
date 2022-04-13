// forEach array method, Callback Function

let user = {
  firstName: "Crystal",    
  age:30,             
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: ["Why Mac & Cheese Rules!","10 Things To Make With Marmite!"],
  login(){      
    console.log("The User Logged In");
  },
  logout(){
    console.log("The User Logged Out");
  },    
  logBlogs(){  
    //console.log(this.blogs);
    console.log ("This User Has Written The Following Blogs");           
    this.blogs.forEach(blog => {  //
      console.log(blog);         // logs each item in the array to the console
    });
  },
};                   

user.logBlogs();  
