---
title: CSS preprocessor
tags: ['Logic']
---

# CSS preprocessor

## What is the CSS preprocessor?

As a stylesheet language, CSS has limited capabilities when it comes to writing logic, organizing code, and performing other computational tasks. CSS preprocessors provide a solution to this problem.

CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.

## Examples

### In Javascript scope

```js
const myName = 'John'

function printName() {
  console.log(myName)
}

printName()
```

### Outer function, inner function

```js
function makeCounter(addValue) {
  let count = 0
  return function () {
    count += addValue
    return count
  }
}

let addOne = makeCounter(1)
let addTen = makeCounter(10)

console.log(addOne()) // 1
console.log(addOne()) // 2
console.log(addTen()) // 10
console.log(addTen()) // 20
```

### In React

useState hook use a closure. To update with a new value, it needs to get access to the previous value.

Note that code below is just an example to help understanding.

```js
let value = undefined
function useState(initValue) {
  const state = value || initValue
  const setState = (newValue) => {
    value = newValue
  }

  return [state, setState]
}
```

<br>
<br>

```
Let's make the world a better place together :)
```
