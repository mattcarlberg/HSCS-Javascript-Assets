let output_str = ""; 

function setup(){
  document.getElementById("1btn").addEventListener("click", numberClicked)
  document.getElementById("2btn").addEventListener("click", numberClicked)
  document.getElementById("3btn").addEventListener("click", numberClicked)

  document.getElementById("sq-btn").addEventListener("click", go)
  document.getElementById("sqrt-btn").addEventListener("click", go)

}

function numberClicked(event){
  if(event.target.id == "1btn"){
    output_str = output_str + "1"
  }
  if(event.target.id == "2btn"){
    output_str = output_str + "2"
  }
  if(event.target.id == "3btn"){
    output_str = output_str + "3"
  }
  document.getElementById("ans-text").innerHTML = output_str
}

function go(event){
  let num = Number(output_str)
  let result
  if(event.target.id == "sq-btn"){
    result = num*num 
  }
  if(event.target.id == "sqrt-btn"){
    result = Math.sqrt(num)
  }
  output_str = output_str + " = " + result
  document.getElementById("ans-text").innerHTML = output_str
}


setup()
