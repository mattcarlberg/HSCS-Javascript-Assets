let cycle = 1;


function setup(){
   document.getElementById("cycle-btn").addEventListener("click", next_image); 
}

function next_image(){
  cycle = cycle + 1;
  if(cycle == 4){
    cycle = 1 ;
  }
  if(cycle == 1){
    document.getElementById("main-img").src = "knicks.png"
    document.getElementById("main-frame").style.backgroundColor = "red"
    document.getElementById("cycle-btn").innerHTML = "Next"
  }
  if(cycle == 2){
    document.getElementById("main-img").src = "pacers.png"
    document.getElementById("main-frame").style.backgroundColor = "blue"
  }
  if(cycle == 3){
    document.getElementById("main-img").src = "game.png"
    document.getElementById("main-frame").style.backgroundColor = "lightgray"
    document.getElementById("cycle-btn").innerHTML = "Back to Beginning"
  }
}


//RUN THE SETUP() FUNCTION ON PAGE LOAD
setup()

