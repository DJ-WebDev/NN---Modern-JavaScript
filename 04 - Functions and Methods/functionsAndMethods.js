// Functions and Methods:

// Functions - A Block of Code {CodeBlock} that can do something, and we can call on it to execute
// Methods  -  What distinguishes a method from a function is where we invoke them and where they are defined  

const firstName = "Duncan"

// functions
const greet = () => "Hello"

let resultOne = greet();
console.log(resultOne);

// methods  -- dotNotation
                                            // Methods are functions that are associated with an object or a data type
let resultTwo = firstName.toUpperCase();   // like a function, but uses dotNotation
console.log(resultTwo);