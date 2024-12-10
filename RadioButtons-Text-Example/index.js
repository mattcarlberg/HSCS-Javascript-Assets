function setup(){
  document.getElementById("q1-btn").addEventListener("click", ans_prob1)
  document.getElementById("q2-btn").addEventListener("click", ans_prob2)
}

function ans_prob1(){
  let result
  if(document.getElementById("mj-radio").checked){
    result = "<p>NICE WORK!  You got it correct.</p>"
  }else{
    result = "<p>NOPE!  Better luck next time.</p>"
  }

  result += "<p>Michael Jordan is the career points per game leader averaging 30.12 ppg.  A close second is Wilt Chamberlin with 30.07 ppg.  Current players that all average 27 to 28 points per game are Luka Doncic, Joel Embiid, Kevin Durant, and Lebron James.</p>"
  document.getElementById("q1-box").innerHTML = result
}

function ans_prob2(){
  let text = document.getElementById("moon-walker").value
  text = text.toLowerCase() 
  let result
  if(text.includes("neil armstrong")){
    result = "<p>NICE WORK!  You got it correct.</p>"
  }else{
    result = "<p>NOPE!  Better luck next time.</p>"
  }

  result += "<p>Neil Armstrong was the first person to walk on the moon in 1969 as part of Apollo 11.  Buzz Aldrin joined him in the lunar module Eagle and was second to walk on the moon.  Michael Collins remained in the command module Columbia, orbiting the moon.</p>"
  document.getElementById("q2-box").innerHTML = result
}


setup();
