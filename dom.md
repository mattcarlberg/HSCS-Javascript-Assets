## DOM Manipulation

JavaScript can be used in many ways, but one of the most powerful applications is to manipulate the DOM (the Document-Object-Model).

### Connecting Scripts

Link your JavaScript at the END of your document, right above the closing `</body>` tag.

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <script type="text/javascript" src="coolscript.js"></script>
  </body>
</html>
```

### Console

Debugging code - making sure it's running when you expect it to - requires printing information to the console, and checking for it in the console.

```javascript
console.log("script running!")
```

It's a good idea to put this at the top of JavaScript files to see if they're connected correctly.

### Selecting Elements

Get an element using the same syntax you use in CSS, and store it in a variable you can use later using the `let` command.

Select by element:
```javascript
let profilepic = document.getElementById("bestpic")
```

When you're still learning, it's helpful to make sure you got the element you were trying to select by logging it to the console.

```javascript
console.log(profilepic)
```

### Event Listeners

Add an event listener to an element, which will trigger a function when it is clicked.

```javascript
profilepic.addEventListener("click", runMe)
  console.log("Profile picture clicked!")
```
You also need to define what the function does when the click happens.

```javascript
function runMe(event){
  // Write whatever code you want in the codeblock.
  // I use comments like this to keep track of my code.
  // I also use debug statements like this to make sure the event is firing when I think it should.
  console.log("My picture has been clicked!")
  console.log(event.target)
}
```

Here are some events to listen for:
* click
* dblclick
* mousemove
* mouseover
* mouseout
