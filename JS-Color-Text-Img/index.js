
function setup(){
  document.getElementById("btn1").addEventListener("click", bg_change)
  document.getElementById("btn2").addEventListener("click", add_text)
  document.getElementById("btn3").addEventListener("click", change_img)
}

function bg_change(event){
  document.body.style.backgroundColor = "yellow"
}

function add_text(event){
  let paragraph = document.getElementById("placeholder")
  paragraph.innerHTML = "<p>Let's go Knicks!</p>"
  paragraph.innerHTML += "<p>We want Boston.</p>"
  paragraph.innerHTML += "<img src='knicks.webp' style='width:50%'>"
}

function change_img(event){
  let my_img = document.getElementById("bhsec-img")
  my_img.src = "bard_manhattan.jpg"
  
}

setup()
