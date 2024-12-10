let output_str = ""; 

function setup(){
  document.getElementById("1btn").addEventListener("click", oneClicked)
  document.getElementById("2btn").addEventListener("click", twoClicked)
  document.getElementById("3btn").addEventListener("click", threeClicked)

  document.getElementById("sq-btn").addEventListener("click", go_sq)
  document.getElementById("sqrt-btn").addEventListener("click", go_sqrt)

}

function oneClicked(event){
    output_str = output_str + "1"
    document.getElementById("ans-text").innerHTML = output_str
}

function twoClicked(event){
    output_str = output_str + "2"
    document.getElementById("ans-text").innerHTML = output_str
}

function threeClicked(event){
    output_str = output_str + "3"
    document.getElementById("ans-text").innerHTML = output_str
}
  

function go_sq(event){
  let num = Number(output_str)
  let result = num*num 
  output_str = output_str + ` -> ${result}`
  document.getElementById("ans-text").innerHTML = output_str
}

function go_sqrt(event){
  let num = Number(output_str)
  let result = Math.sqrt(num) 
  output_str = output_str + ` -> ${result}`
  document.getElementById("ans-text").innerHTML = output_str
}

setup()
