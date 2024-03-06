---
title: Hoisting
tags: ['Logic']
---

# Hoisting

## What is the hoisting?

In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.

### Function hoisting

Under the hood, function declarations are put into memory at compile time. As such, this makes it possible to, on execution, call a declared function before it is defined. For example:

```js
console.log(greeting()) // "Hello there!"

function greeting() {
  return 'Hello there!'
}
```

In the above snippet, we are able to log the return value of invoking greeting() before that function is even defined. This is all due to **function hoisting** – a built-in behavior of JavaScript that hoists a function’s declaration and its value to the top of their scope.

::: details WARNING

- Note that this differs from invoking a function that is **never** declared:

  ```js
  console.log(greeting()) // ReferenceError: greeting is not defined
  ```

  Since the function is never defined anywhere, the JavaScript interpreter evaluates the expression as a `ReferenceError`.

- Note that function expression is not hoisted, only function declaration is hoisted.

  ```js
  myFunction() // Error: TypeError: myFunction is not a function

  var myFunction = function () {
    console.log('Hello, world!')
  }
  ```

  :::

### Variable hoisting with `var`

Unlike function hoisting, **variable hoisting** shows slightly different behavior. When a variable is declared with the `var` keyword, the JavaScript interpreter still hoists its declaration. However, it differs from how functions are hoisted in that the value of the variable (if it has one) is not included. Consider the following example:

```js
console.log(a) // undefined

var a = 'a'

console.log(a) // "a"
```

When the variable `a` is hoisted, the JavaScript engine still moves it to the top of its scope – but it initializes the variable with a value of `undefined`. As such, until `a` is actually declared on the next line, its actual value won’t be assigned. Then, after declaration, we can finally log its value to the console: `“a“`.

### Variable hoisting with `let` and `const`

Similar to declaring a variable with `var`, the declaring a variable with `let` or `const` still sees the variable declaration hoisted to the top of its scope. However, rather than initializing that variable with a value (i.e., `undefined`, as shown above), the JavaScript engine forgoes that step entirely. As such, by **not** being initialized, the JavaScript interpreter will throw an error if we try to access the variable:

```js
console.log(a) // ReferenceError: Cannot access 'a' before initialization

console.log(b) // ReferenceError: b is not defined

let a = 'a'

console.log(a) // "a"
```

The reason why we see these errors, even though variable a is properly hoisted, is due to the variable being in the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz">temporal dead zone (TDZ)</a>. That is, while the variable is in scope, we cannot access or use the variable at all before it is explicitly declared. This same behavior also applies when declaring a class with the `class` keyword:

::: details Temporal dead zone (TDZ)
A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.

While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a `ReferenceError`.
:::

```js
let instance = new MyClass() // Cannot access 'MyClass' before initialization

class MyClass {
  // ...
}
```

Certain developers in the community may argue that declarations with `let`, `const`, or `class` are _non-hoisting_ in the most strict sense.

### Conclusion

- Hoisting is not explicitly defined in the <a href="https://tc39.es/ecma262/">ECMAscript specification</a>, which describes the standards of JavaScript as a language. For the most part, you should consider hoisting as more of a default _behavior_ of JavaScript rather than a _feature_. That is, rather than leveraging hoisting as a practical tool or design pattern in the scripts and applications you write, you should just be mindful of its characteristics as you continue to work with JavaScript.

- In certain code bases, for example, you might come across functions being used in business logic at the top of the script, while its declarations are left at the bottom of the script (<a href="https://airbnb.io/javascript/#functions--declarations">something that AirBnb’s JavaScript Style Guide advises against</a>). Though less common and probably only partially useful, know that this is all possible due to _hoisting_.

- **Declare Variables and Functions before Use**: Although hoisting allows you to access variables and invoke functions before their declarations, it's considered a best practice to declare them at the beginning of their respective scopes. This improves code readability and avoids confusion.

- **Avoid Reliance on Hoisting**: While hoisting can be helpful, it's best not to rely on it heavily for code logic. Write your code in a way that is clear and explicit, with variables and functions declared and initialized in the order they are intended to be used.

- **Leverage Function Expressions**: Instead of relying solely on function declarations, consider using function expressions assigned to variables. Function expressions offer more control over the variable assignment and can help prevent unintended hoisting behaviour.

- **Strict Mode**: Enable strict mode ("use strict") to enforce stricter JavaScript rules. It helps catch potential hoisting-related errors and encourages better coding practices.
  <br>
  <br>

```
Let's make the world a better place together :)
```
