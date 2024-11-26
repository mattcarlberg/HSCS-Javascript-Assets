//Big Idea 1
//"let" introduces a variable to the computer
let thought = "good morning"; 
let x = 41; 
let is_it_raining = true; 
console.log(is_it_raining, x, thought)


//Big Idea 2
//variables values can change --> don't reuse let
thought = thought + " to you "
x = x + 2
is_it_raining = !is_it_raining

//Big Idea 3
//tic marks `` and ${} help make fun sentences
console.log(`${thought}, it is ${x} degrees out and ${is_it_raining} that it is raining.`)


//Big Idea 4 
//every variable has a type:  
//number, string (text), boolean (true/false)
console.log(typeof(thought))
console.log(typeof(x))
console.log(typeof(is_it_raining))
