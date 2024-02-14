---
title: HOC(Higher Order Component) Pattern

tags: ['React']
---

# HOC(Higher Order Component) Pattern

## Introduction

HOC is a Javascript function that take <span style="background-color:yellow">**a component as an argument**</span> and <span style="background-color:yellow">**returns another component**</span> after injecting or adding additional data and functionality to the returned component.

## Practice

we want to show a `"Loading..."` screen to the user. Instead of adding data to the `DogImages` component directly, we can use a Higher Order Component that adds this logic for us.

Let’s create a HOC called `withLoader`.

```jsx
function withLoader(Element) {
  return (props) => <Element />
}
```

A little bit more code..

```jsx
function withLoader(Element, url) {
  return (props) => {}
}
```

Eventually!!

<code-group>

<code-block title="DogImages.js">

```jsx
import React from 'react'
import withLoader from './withLoader'

function DogImages(props) {
  return props.data.message.map((dog, index) => (
    <img
      src={dog}
      alt='Dog'
      key={index}
    />
  ))
}

export default withLoader(
  DogImages,
  'https://dog.ceo/api/breed/labrador/images/random/6'
)
```

</code-block >

<code-block title="withLoader.js">

```jsx
import React, { useEffect, useState } from 'react'

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null)

    useEffect(() => {
      async function getData() {
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
      }

      getData()
    }, [])

    if (!data) {
      return <div>Loading...</div>
    }

    return (
      <Element
        {...props}
        data={data}
      />
    )
  }
}
```

</code-block >

</code-group>

## Pros

Using the **Higher Order Component pattern** allows us to <span style="background-color:yellow">**keep logic**</span> that we want to re-use all in <span style="background-color:yellow">**one place.**</span> This reduces the risk of accidentally spreading bugs throughout the application by duplicating code over and over, potentially introducing new bugs each time. By keeping the logic all in one place, we can <span style="background-color:yellow">**keep our code DRY**</span> and easily enforce separation of concerns.

## Cons

The name of the prop that a HOC can pass to an element, can cause a <span style="background-color:yellow">**naming collision.**</span>

<code-group>

<code-block title="BAD">

```jsx
function withStyles(Component) {
  return (props) => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return (
      <Component
        style={style}
        {...props}
      />
    )
  }
}

const Button = () => <button style={{ color: 'red' }}>Click me!</button>
const StyledButton = withStyles(Button)
```

</code-block >

<code-block title="GOOD">

```jsx
function withStyles(Component) {
  return (props) => {
    const style = {
      padding: '0.2rem',
      margin: '1rem',
      ...props.style,
    }

    return (
      <Component
        style={style}
        {...props}
      />
    )
  }
}

const Button = () => <button style={{ color: 'red' }}>Click me!</button>
const StyledButton = withStyles(Button)
```

</code-block >

</code-group>

<br>
<br>

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```
