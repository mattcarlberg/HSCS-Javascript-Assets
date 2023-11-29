# Strings

Strings have a TON of [built-in capabilities](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/)

## [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length#try_it)

Counts how many characters are in a string (including spaces and punctuation).

```javascript
let s = "BHSEC ?ueens."
console.log(s.length)
```
This logs ``13``. 



## [at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at#try_it)

Counts how many characters are in a string (including spaces and punctuation).

```javascript
let s = "BHSEC ?ueens."
console.log(s.at(0))
console.log(s.at(1))
console.log(s.at(6))
```
This logs
```
B
H
?
```

## [substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#try_it)

Returns the part of this string from the start index up to and excluding the end index.

```javascript
let s = "BHSEC ?ueens."
console.log(s.substring(0, 3))
console.log(s.substring(0, 7))
console.log(s.substring(2, 10))
```
This logs
```
BHS
BHSEC ?
SEC ?uee
```

## [toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

Returns the string converted to uppercase.

```javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
```

This logs 
```
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
```

## [repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

Constructs a new string containing a specific number of copies of the string.

```javascript
let mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
```

This logs
```
I feel Happy! Happy! Happy! 
```


## [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

Performs a case-sensitive search to determine whether a search query may be found within the string. 

```javascript
let sentence = 'The quick brown fox jumps over the lazy dog.';
let word1 = 'fox';
let word2 = 'monkey'
console.log(sentence.includes(word1))
console.log(sentence.includes(word2))
```
This logs
```
true
false
```


## [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

Searches the string and returns the index of the first occurrence of search query. 

```javascript 
let paragraph = "I think Ruth's dog is cuter than your dog!";
let searchTerm = 'dog';
let indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst)
```

This logs ``15`` because the "d" of the first "dog" in `paragraph` is at index 15 (when you count from the start of the string, don't forget to start at 0!)


## [replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

Returns a new string with all matches of a pattern replaced.

```javascript 
let paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
```

This logs
```
I think Ruth's monkey is cuter than your monkey!
```
