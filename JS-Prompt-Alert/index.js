
//this function runs once when the page is loaded
function setup(){
  //connect each button in the HTML to a function below that is run when the button is clicked
  document.getElementById('matt_problem_1').addEventListener('click', problem1);
  document.getElementById('matt_problem_2').addEventListener('click', problem2);
  document.getElementById('matt_problem_3').addEventListener('click', problem3);
}


//this function runs when the button with id matt_problem_1 is cicked
function problem1(event){
    let yourWord = prompt("Enter a word.")
    
    let letters = yourWord.length
    
    alert(`That word has ${letters} letters.`)
}

//this function runs when the button with id matt_problem_2 is cicked
function problem2(event){
    let howMany = prompt("How many o's do you want in spooky?")

    let os = "o".repeat(howMany)
    
    alert(`sp${os}ky`)
}


//this function runs when the button with id matt_problem_3 is cicked
function problem3(event){
    let seconds = prompt("How many seconds?")

    let mins = seconds/60

    alert(`${seconds} seconds is the same as ${mins} minutes.`)
}


setup();  //tell the setup function() to run right away (when the page is loaded)

