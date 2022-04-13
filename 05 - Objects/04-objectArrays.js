// Storing Objects in an array
// Lets make each blog an object in an array

// const blogs = [
//   { title: "Why Mac & Cheese Rules!", likes: 30 },
//   { title: "10 Things To Make With Marmite!", likes: 50 },
// ];

// console.log(blogs);  // logs the blogs array to the console

let user = {
  firstName: "Crystal",    
  age:30,             
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: [ 
    { title: "Why Mac & Cheese Rules!", likes: 30 },
    { title: "10 Things To Make With Marmite!", likes: 50 },
],
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
      console.log(blog.title, blog.likes);         // logs each item in the array to the console
    });
  },
};                   

user.logBlogs();  
