//Idea 1 - objects
let person1 = {
  name: "Taylor",
  age: 34,
  job: "singer",
  glasses: true
}

let person2 = {
  name: "Lebron",
  age: 39, 
  job: "athlete",
  glasses: false
}

console.log(person1)
console.log(typeof(person1))
console.log(person1.age)
console.log(typeof(person1.age))
console.log(`${person1.name} is ${person1.age} years old, and ${person2.name} is ${person2.age} years old.`)

//Idea 2 - Variable values can change
person1.age = person1.age + 1
console.log(person1.age)

//Idea 3 - if
if(person1.job == "singer"){
  console.log(`${person1.name} sings songs`)
}
if(person2.job == "singer"){
  console.log(`${person2.name} sings songs.`)
}

//Idea 4 - if/else
if(person1.age > person2.age){
  console.log(`${person1.name} is older than ${person2.name}`)
}else{
  console.log(`${person2.name} is older than ${person1.name}`)
}

if(person1.glasses){
  console.log(`${person1.name} wears glasses.`)
}else{
  console.log(`${person1.name} does NOT wear glasses.`)
}
