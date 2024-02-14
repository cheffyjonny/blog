---
title: React Hooks Design Patterns

tags: ['React']
---

# React Hooks Design Patterns

## Introduction

Hooks got introduced in <span style="background-color:yellow">**React 16.8 version**</span>. Using the React Hook API enables React functional components to get access to common React features like <span style="background-color:yellow">**context, state, props, lifecycle and refs**</span>.

## Practice

<code-group>
<code-block title="Classical">

```jsx
import React from 'react'
import './styles.css'

import { Count } from './Count'
import { Width } from './Width'

export default class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      width: 0,
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }))
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    return (
      <div className='App'>
        <Count
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <div id='divider' />
        <Width width={this.state.width} />
      </div>
    )
  }
}
```

</code-block>
<code-block title="Hooks">

```jsx
import React, { useState, useEffect } from 'react'
import './styles.css'

import { Count } from './Count'
import { Width } from './Width'

function useCounter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return { count, increment, decrement }
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.addEventListener('resize', handleResize)
  })

  return width
}

export default function App() {
  const counter = useCounter()
  const width = useWindowWidth()

  return (
    <div className='App'>
      <Count
        count={counter.count}
        increment={counter.increment}
        decrement={counter.decrement}
      />
      <div id='divider' />
      <Width width={width} />
    </div>
  )
}
```

</code-block>
</code-group>

## Pros

Fewer lines of code

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
