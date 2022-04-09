//Control Flow:
//
// Break and Continue -- KEYWORDS
// 
// Break  (Breaks the loop and stops it from continuing)

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {

//   console.log("Your Score: ", scores[i]);
//   if (scores[i] === 100){   
//     console.log ("Congratulataions! You Got the HIGH SCORE !!")
//     break;  // Breaks the loop
//   }
// }

// Continue (Continues the loop, and temporarily ignores the {CodeBlock})

const scored = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scored.length; i++) {

  if (scored[i] === 0) {
    continue;    // Continues the loop, and temporarily ignores the {CodeBlock} 
  }             //  Therefore, 0 does NOT print to the console,

  console.log("Your Score: ", scored[i]);
  if (scored[i] === 100){   
    console.log ("Congratulataions! You Got the HIGH SCORE !!")
    break;  // Breaks the loop
  }
}

// Break allows up to BREAK out of the Loop completely, 
// Continue allows us to jump out of the iteration, then Continue the Loop
//----------------------------------------------------------------------------------