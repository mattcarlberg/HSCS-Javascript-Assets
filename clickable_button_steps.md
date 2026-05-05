

---
geometry: margin=0.75in
fontsize: 12pt
header-includes:
  - \usepackage{enumitem}
  - \setlist{itemsep=8pt}
  - \usepackage{tcolorbox}
  - \usepackage{fvextra}
  - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{
      frame=single,
      framesep=8pt,
      commandchars=\\\{\},
      xleftmargin=0.5in,
      xrightmargin=0.1in
    }  
  - \usepackage{needspace}
  - \AtBeginEnvironment{Highlighting}{\Needspace{6\baselineskip}}
---

Name: ___________________________________

*High School Computer Science*  
*Clickable Buttons*


## Making a Clickable Button in HTML & JavaScript



### 1. Put a `<button>` tag in your HTML

```html
<button>Click me!</button>
```

...or a stylized Bootsrap button...

```html
<button type="button" class="btn btn-primary">Click Me!</button>
```



### 2. Give your button an `id` so JavaScript can find it

```html
<button id="bhsecq">Click me!</button>
```

> **Why?** The `id` will allow JavaScript to target this specific button.



### 3. In JavaScript, use `querySelector` to get the button

```js
let button = document.querySelector('#bhsecq');
```

> **Note:** The `#` means *look for an id named `bhsecq`.*



### 4. Add an event listener to watch for a click

```js
button.addEventListener('click', sayHello);
```

> This means: "When the button is clicked, run the `sayHello` function."



### 5. Define the function to say what happens

```js
function sayHello() {
  alert('Hello, world!');
}
```

> You can change this to do anything — show a message, change colors, hide things, etc.

<br><br><br>

\newpage

### Full Example (HTML + JS)

HTML:

```html
<html>
    <body>
        <button id="bhsecq">Click me!</button>
    </body>
    <script src="index.js"></script>
</html>
```

Javascript
```js
function main(){
    let button = document.querySelector('#bhsecq');
    button.addEventListener('click', sayHello);
}
function sayHello() {
    alert('Hello, world!');
}
main();
```


