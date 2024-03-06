---
title: Closure
tags: ['Logic']
---

# Closure

## What is the Closure?

Closure is a mechanism in JavaScript for handling variable scope. More specially, it refers to the ability of a function to capture and retain the values of its local variables, even after the function has completed execution.

Once a function executes, it creates a lexical environment to saves the data inside of the function. Then inner function gets access to the data in the lexical environment.

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
