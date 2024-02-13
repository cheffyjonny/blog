---
title: Callback vs Promise vs Async/Await

tags: ["JavaScript"]
---

# Callback vs Promise vs Async/Await

__Callback__, __Promise__, and __async/await__ are all different ways to handle asynchronous operations in JavaScript.

## Callback
A __Callback__ is a function that is passed as an argument to another function and is executed after the first function completes its operation. Callbacks are commonly used in JavaScript for handling asynchronous operations, such as making an HTTP request.

### Pros
- Simple to understand and widely supported across many older JavaScript libraries and APIs.
- Can handle multiple asynchronous operations in parallel.
### Cons
- Can lead to callback hell, where code becomes deeply nested and difficult to read.
- No built-in mechanism for error handling.

```js
function getData(callback) {
  setTimeout(() => {
    const data = 'Some data';
    callback(data);
  }, 1000);
}

getData((data) => {
  console.log(data);
});
```


<br>
<br>
<br>

## Promise
A __Promise__ is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a simpler way to handle asynchronous operations compared to callbacks by allowing you to chain multiple operations together and handle errors in a more elegant way.
### Pros
- Avoid callback hell by chaining asynchronous operations in a more readable way.
- Built-in error handling with `.catch` method.
- Can be combined or transformed using higher-order functions such as `.then` and `.map`.
### Cons
- Not as widely supported as callbacks, especially in older codebases.
- Slightly more complex to understand compared to callbacks.

```js
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some data';
      resolve(data);
    }, 1000);
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

<br>
<br>
<br>

## Async/Await
__Async/await__ is a more recent addition to JavaScript that provides a way to write asynchronous code that looks and behaves like synchronous code. It uses the async keyword to declare a function that returns a promise, and the await keyword to wait for a promise to resolve before continuing with the execution.
### Pros
- More readable and concise compared to callbacks and promises.
- Built-in error handling with try-catch blocks.
- Can be used with promises and async functions.
### Cons
- Only supported in modern browsers and Node.js environments.
- Async/await functions cannot be used with older APIs that only support callbacks.


<code-group>

<code-block title="JavaScript">

```js
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some data';
      resolve(data);
    }, 1000);
  });
}

async function main() {
  const data = await getData();
  console.log(data);
}
main();
```

</code-block>

<code-block title="Example">

```js
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fetchData')
      console.log('fetchData')
    }, 300)
  })
}
async function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fetchData2')
      console.log('fetchData2')
    }, 100)
  })
}
async function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fetchData3')
      console.log('fetchData3')
    }, 200)
  })
}

async function getData() {
  try {
    const result = await fetchData()
    const result2 = await fetchData2()
    const result3 = await fetchData3()
  } catch (error) {
    console.error(error)
  }
}

getData() 

// Result : 
// fetchData 
// fetchData2
// fetchData3

```
</code-block>

</code-group>



## Summarize
Essentially all three mechanisms — __callback__, __Promise__, and __async/await__ — are used for handling asynchronous operations in JavaScript.<br>
While all three can achieve the same outcome, __Promise__ and __async/await are__ generally considered more modern and preferred ways of handling asynchronous operations due to their improved readability and maintainability compared to traditional __callback__ based approaches.

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
