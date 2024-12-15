//DEFINE GLOBAL VARIABLES
//A global variable remembers its value as long as the web page is open.
//It can be modified by any function. 
let count1 = 0 
let count2 = 0 
let count3 = 1 
setup()


function setup(){
  document.getElementById("add").innerHTML = `The value of count1 is ${count1}`;
  document.getElementById("cycle").innerHTML = `The value of count2 is ${count2}`;
  document.getElementById("flip-flop").innerHTML = `The value of count3 is ${count3}`;
  document.getElementById("random").innerHTML = "Not ready yet"

  document.getElementById("add-btn").addEventListener("click", adding);
  document.getElementById("cycle-btn").addEventListener("click", cycling);
  document.getElementById("flip-flop-btn").addEventListener("click", flip_flopping);
  document.getElementById("random-btn").addEventListener("click", randomizing);
}

function adding(){
  count1 = count1 + 1;
  document.getElementById("add").innerHTML = `The value of count1 is ${count1}`;
}

function cycling(){
  count2 = count2 + 1;
  if(count2 == 5){
    count2 = 0; 
  }
  document.getElementById("cycle").innerHTML = `The value of count2 is ${count2}`;
}

function flip_flopping(){
  count3 = count3*-1
  document.getElementById("flip-flop").innerHTML = `The value of count3 is ${count3}`;
}


function randomizing(){
  let count4 = Randomizer.nextInt(1, 6)
  document.getElementById("random").innerHTML = `The value of count4 is ${count4}`;

}
