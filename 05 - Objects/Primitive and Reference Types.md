                  
                
                  7 Data Types   
                  
          Primitive and Reference Types

       Primitive Types           Reference Types

       - Numbers                 - All Types of Objects
       - Strings                 - Object literals
       - Booleans                - Arrays
       - Null                    - Functions          
       - Undefined               - Dates  
       - Symbols                 - All other Objects, like Math etc.

---> Note:
          6 of the 7 JavaScript Data Types are Primitive
          7th Type is Reference Type
//-------------------------------------------------------
      Whats the difference between Primitive and Reference Types?
      
      Its How they are stored: Reference types are stored and used in Memory,
      he values are stoired in the Stack.

The Stack is just a stack of Primitive Types with different values in memory. (Its a bit quicker, but limited in space)
The Heap is where Reference Types like objects and arrays are stored. (Its a bit slower, but more space)  
              Stack and Heap
       
       Stack              Heap
       
       true               function
       100                {a: 1,b:2}
       "hello"            ["Ryu", "Mario"]
                          [0,1, ..]

---> Primitive Types are stored on the Stack, Reference Types are stored on the Heap
//------------------------------------------------------------------------

How it works:

The Array is stored in the HEAP, but a Pointer is stored with the VAriable on the Stack, which references to the Array

       Stack              Heap
       
     pointer|names       ["Ryu", "Mario"]

*Thje Stack stores the variable and a pointer to the array-- See Image
               
![image](Modern JavaScript Tutorial/05 - Objects/stackAndHeap.png)
//--------------------------------------------------------------------------------

