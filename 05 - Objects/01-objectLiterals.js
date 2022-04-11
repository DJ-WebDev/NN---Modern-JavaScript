/*  Chapter 05

     Objects:

Objects in JavaScript are like real-life Objects: 
They have properties and things that they can do:  

eg. Let's Look at a Phone:

              Properties:       Things it can do:
              - colour          - ring
PHONE:        - size            - take a picture
              - model           - play music
         
--> Objests in JavaScript have properties and things they can do (methods)
--> eg.

                Properties:       Methods:
USER OBJECT:    - email          - login
                - username       - logout
                - gender         
--> 
                Properties:       Methods:
BLOG OBJECT:    - title          - publish
                - content        - unpublish
                - author         - delete

// JavaScript has built-ib objects like DATE and MATH
                */
// Object Literal Notation
let user = {
  name: "Crystal",    // Properties --> KEY:VALUE pair,  
  age:30,             // key:value,
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: ["Why Mac & Cheese Rules!","10 Things To Make With Marmite!"]           
};

console.log(user);
console.log(user.name);      // Access properties and log them using dotNotation

user.age = 35;               // How to update a property of an object with dotNotation
console.log(user.age)        // Access properties using dotNotation

console.log(user["email"])   // [Square Bracket Notation]  - Another way to access and update properties 
user["name"] = "Chun-Li";    // update name property     
console.log(user);             

//--------------------------------------------------------
//  Use dontNotation for most part, but [squareBracket] is good for assigning variables to a property:

const key = "location"   // passing the property "location" into the variable: key
console.log(user[key]);  // ---> Same as: console.log(user["location"])  - but with no variable assigned to it

console .log(typeof user);

//---------------------------------------------------------------------------------------