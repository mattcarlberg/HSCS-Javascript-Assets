#### Variables

JavaScript, like most languages, allows for the storage of information in variables using the `=` assignment operator. Use `let` for hard-coded strings and numbers that you intend to change. Use `const` for DOM elements information you intend to leave unchanged.

```javascript
// Assign the string "Raphael" to the variable called name.
let name = "Raphael"
// Assign the number 16 to the variable called age.
let age = 16

// Assign a value to pi, which will not be changed.
const pi = 3.14
```

Variables declared with `let` can be changed using the `=` reassignment operator, which is the same as the assignment operator.

```javascript
// Assign the number 16 to the variable called age.
let age = 16
// Reassign the age because this user had a birthday!
age = 17
```

Reassignment can also be done with variable expressions.
```javascript
// Assign the number 16 to the variable called age.
let age = 16
// Reassign age. The age is NOW equal to the PREVIOUS value of age (16) plus 1.
age = age + 1
```

Reassignment can be done with a shorthand operator to *increment* a value.
```javascript
// Assign the number 16 to the variable called age.
let age = 30
// Reassign age by incrementing it by 1. This is shorthand for `age = age + 1`
age += 1
```

Bear in mind that variables created with **const** are constants, and cannot be changed.
```javascript
// Assign a value to pi, which will not be changed.
const pi = 3.14
// This next line WILL THROW AN ERROR. Constants cannot be reassigned.
 pi = 3.14159265
```

Older JavaScript conventions will also declare variables with the keyword `var`, but this is falling out of style, and not recommended. **When you see examples with `var` online, consider replacing `var` with `let`.**

#### Types

There are numerous types of data you might see in JavaScript, but the most important fall into a few major categories.

##### Numbers
Numbers are exactly what they sound like. Some programming languages subdivide numbers into categories (like integers and non-integers called "floats"), but JavaScript keeps them all in one category.
```javascript
// You can store numbers in variables or constants.
let x = 42
let y = 7
const z = 990

// You can also use number literals, but without storing them in variables, they cannot be referenced later in the code.
13
4
1337
```

##### Strings
Strings are collections of characters - we use strings when we need words or sentences to appear in our programs.
```javascript
// You can store numbers in variables or constants.
let name1 = "Julian"
let name2 = "Shea"
const name3 = "Alejandra"

// You can also use string literals, but without storing them in variables, they cannot be referenced later in the code. String literals by themselves are not generally useful.
"Aaron"
"Erin"
```

##### Boolean Values
Boolean values are binary or true-false values. They can have no other value.
```javascript
let hungry = true
let thirsty = false
```

### Objects

Objects hold multiple variables.  Objects are stored not as single entries, but as **key-value pairs**. The **key** is the NAME of the information, and the **value** is the information itself.

Example:

```javascript
let person = {
  name: "Lebron",
  age: 38, 
  job: "athlete",
  glasses: false
}

console.log(`${person.name} is an ${person.job}`)
if(person.glasses){
  console.log(`${person.name} wears glasses`)
}else{
  console.log(`${person.name} does not wear glasses`)
}

person.age = person.age + 1
console.log(`${person.name} just had a birthday and is now ${person.age}`)

```

### Conditionals

Conditional statements in JavaScript are written with the following syntax:
```javascript
if (condition1) {
  // Code for if condition1 is true
} else if (condition2) {
  // Code for if condition2 is true (after condition 1 fails)
} else {
  // Code for if none of the above conditions are true
}
```

Conditional statements are confusing at first, but very syntax heavy, so 90% of errors with JS conditionals are punctuation issues. Make sure your code is indented properly, that every condition is enclosed in parentheses, and that every opening `{` has a corresponding closing `}`.

#### Conditional Operators
**Basic operators** compare two values.
* `a === b` checks to see if two values are *strictly* the same.
* `a == b` checks to see if two values are the same (even if the types mismatch).
* `a > b` checks to see if a is greater than b.
* `a < b` checks to see if a is less than b.
* `a >= b` checks to see if a is greater than or equal to b.
* `a <= b` checks to see if a is less than or equal to b.
* `a != b` checks to see if a is *not* equal to b.

NOTE that `=`, the assignment/reassignment operator is **NOT** a conditional operator. It MAKES statements true instead of checking to see if they are. Most often, if the `=` assignment operator is included in conditions, that's going to cause bugs.

**Compound / logical operators** compare two boolean values, so they can be used to write complex conditions.
* `a || b` checks to see if either a **OR** b is true.
* `a && b` checks to see if both a **and** b are true.

#### Conditionals Example
Here's what a compound conditional looks like in action.
```javascript
if (age < 65 && age > 17) {
  console.log("We're sorry, but you don't seem to be eligible for either our senior or our child discounts.")
} else if (age < 0 || age > 109) {
  console.log("We're sorry, but you appear to by lying about your age - please try again.")
} else if (age >= 65) {
  console.log("Please enjoy a 10% senior discount.")
} else {
  console.log("Kids eat free!")
}
```
