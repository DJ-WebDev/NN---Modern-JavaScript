//
//  Arguments and Parameters:
//
// --> Sometimes we like like to pass VALUES into functions, 
// and do soemthing with those values 
//
//

//  For example, lets add a name to the speak function below, and output that name to the console:

// we need to create a local variable that stores the value of the name:

const speak = function(name){        // Parameter (name) is a LOCAL variable that can ONLY BE ACCESSED INSIDE the {FUNCTION}
  console.log(`Good Day, ${name}`);  // the variable (name) becomes a parameter in the function once it recieves its value, "Mario" 
}
speak("Mario");     //  The value, or 'argument' "Mario" is first assigned to the local variable (name), 
                    // which is then accessed by the {CodeBlock} inside the Functio

console.log(name)  // ERROR! The scope of this variable is ONLY inside the scope of the {Function}

// --> Important take-away -->   The idea of passing values into a functions, which we can then use..
// ----------------------------------------------------------------------------------------------------------------
//   Lets Add More Values://
//
const talk = function(title, names, time){          //  Can be in any order, but must match the arguments 
  console.log(`Good ${time} ${title} ${names}`);    //  
}
talk("Dr.", "Mario", "Morning"  );     //  The order of the arguments MUST match the order of the parameters

//-----------------------------------------------------------------------------------------------------------
// Parameters with default values:

const convo = function(firstName = "Luigi", time = "Night"){  // We have assigned defalut values to the parameters
  console.log(`Good ${time} ${firstName}`);
};
convo();   // If no arguments are passed into the function, The parameters use the default values defined in the Function Expression
convo("Shaun", "Morning");  // Overwrites the default paramter values

// -->>>  ^^^^^^ This is how we pass new arguments into functions

//------------------------------------------------------------------------------------------------------------------------