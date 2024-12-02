// #1) Define and test a function squareAddOne that takes a number as input, multiplies it by itself, and then adds one.
//Ex. squareAddOne(5) --> 26

function squareAddOne(x){
  return x*x + 1
}

let a = squareAddOne(5)
let b = squareAddOne(10)
let c = squareAddOne(8)
console.log(a, b, c) 


// #2) Define and test a function isItACat that takes a string.  It outputs a boolean: true if the string is a common cat type and false otherwise.
//Ex. isItACat("cheetah") --> true

function isItACat(possibleCat){
  let cats = "lion cheetah jaguar tiger leopard kitten panther lynx"
  if(cats.includes(possibleCat)){
    return true
  }else{
    return false
  }
}

let x = isItACat("pink")
let y = isItACat("pink panther")
let z = isItACat("panther")
console.log(x, y, z)

// #3) Define and test a function firstLetterRepeat that takes a string and an number x.  It outputs the input string with the first letter repeated x number of times
//Ex. firstLetterRepeat("cake", 6) -->"ccccccake"

function firstLetterRepeat(word, amount){
  let firstLetter = word.at(0)
  let repeated = firstLetter.repeat(amount-1)
  return repeated + word
}

let m = firstLetterRepeat("bananas", 2)
let n = firstLetterRepeat("ugly", 4)
let o = firstLetterRepeat("cake", 6)
console.log(m, n, o)

// #4) Define and test a function scream that takes a string and a number x.  It outputs the input string converted to uppercase followed by x exclamation points. 
//Ex. scream("Banana", 2) -->"BANANA!!"

function scream(word, num){
  return word.toUpperCase() + "!".repeat(num)
}

let j = scream("Banana", 2)
let k = scream("hMm", 4)
let l = scream("cooL", 6)
console.log(j, k, l)


// #4) Define and test a function letterCounter that takes three strings as input.  It outputs a number: how many letters are in all three input words combined. 
//Ex. letterCounter("college", "bard", "Queens") --> 17

function letterCounter(word1, word2, word3){
  return word1.length + word2.length + word3.length
}

let d = letterCounter("college", "bard", "Queens")
let e = letterCounter("hello", "hi", "bye")
let f = letterCounter("???", "huh", "!")
console.log(d, e, f)






